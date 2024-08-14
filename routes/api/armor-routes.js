const router = require("express").Router() 
const { Armor, Character} = require("../../models")

router.get('/', async (req, res) => {

    try {
      const armorData = await Armor.findAll({       
        include: [
          { model: Character, as: 'character' },
        ]
        });
      res.status(200).json(armorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const armorData = await Armor.findByPk(req.params.id, {
        include: [
          { model: Character, as: 'character' }
        ]
      });
  
      if (!armorData) {
        res.status(404).json({ message: 'No armor found with this id!' });
        return;
      }
  
      res.status(200).json(armorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });