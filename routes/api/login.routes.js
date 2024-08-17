const router = require("express").Router() 
const User = require("../../models/User")
const bcrypt = require("bcrypt");

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email
      },
    });
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);
    console.log(validPassword)
    
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


module.exports = router;