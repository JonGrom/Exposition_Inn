const router = require("express").Router() 
const Stat = require("../../models/Stat")

router.get('/', async (req, res) => {

    try {
      const statData = await Stat.findAll();
      res.status(200).json(statData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const statData = await Stat.findByPk(req.params.id);
  
      if (!statData) {
        res.status(404).json({ message: 'No stat found with this id!' });
        return;
      }
  
      res.status(200).json(statData);
    } catch (err) {
      res.status(500).json(err);
    }
  });