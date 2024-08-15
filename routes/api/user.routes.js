const router = require("express").Router() 
const { User, Character } = require("../../models")

// Session Router
router.post('/', async (req, res) => {
  console.log("ok")
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Character.findAll({where: {user_id: req.session.user.id }})
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.get("/:id", async (req, res) => {
  try {
    const response = await User.findByPk(req.params.id)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.post("/", async (req, res) => {
  try {
    const response = await User.create(req.body)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})

module.exports = router;