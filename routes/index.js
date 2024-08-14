const router = require('express').Router();
const path = require("path")
const apiRoutes = require('./api');
const { User } = require('../models');
const withAuth = require('../utils/auth');



router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    try {
    console.log("Hello")
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/user', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id);

    const user = userData.get({ plain: true });

    res.render('user', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });



/* ===== load your page routes below (or create a separate folder for them) ================== */

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/pages/index.html"))
// })



module.exports = router;