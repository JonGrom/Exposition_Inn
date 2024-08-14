const router = require("express").Router() 
const { Spell, Character } = require("../../models")

router.get('/', async (req, res) => {

    try {
      const spellData = await Stat.findAll({       
        include: [
          { model: Character, as: 'character' },
        ]
        });
      res.status(200).json(spellData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const spellData = await Spell.findByPk(req.params.id, {
        include: [
          { model: Character, as: 'character' },
        ]
      });
  
      if (!spellData) {
        res.status(404).json({ message: 'No spell found with this id!' });
        return;
      }
  
      res.status(200).json(spellData);
    } catch (err) {
      res.status(500).json(err);
    }
  });