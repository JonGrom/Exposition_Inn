const router = require('express').Router();
const path = require("path")
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/api', apiRoutes);
router.use('/homeRoutes', homeRoutes);





/* ===== load your page routes below (or create a separate folder for them) ================== */

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/pages/index.html"))
})



module.exports = router;

/*

User 
Product
Order

User
Pet
Comment


*/