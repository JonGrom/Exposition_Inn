const router = require("express").Router() 
const Weapon = require("../../models/Weapon")

router.get('/', async (req, res) => {

    try {
      const weaponData = await Weapon.findAll({       
        include: [
          { model: Character, as: 'character' },
        ]
        });
      res.status(200).json(weaponData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const weaponData = await Weapon.findByPk(req.params.id, {
  
        include: [
          { model: Character, as: 'character' },
        ]
      });
  
      if (!weaponData) {
        res.status(404).json({ message: 'No weapon found with this id!' });
        return;
      }
  
      res.status(200).json(weaponData);
    } catch (err) {
      res.status(500).json(err);
    }
  });