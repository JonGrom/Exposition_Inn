const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const path = require('path');

const hbs = exphbs.create({ helpers });

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/fonts', express.static(path.join(__dirname, 'public/assets/fonts')));


const sess = {
  secret: 'YOUSHALLNOTPASS',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(routes);

// Keep this sync setting set to false and just use the seed file to update the database; site db logs and saves new users.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
