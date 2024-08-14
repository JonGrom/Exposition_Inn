const router = require("express").Router() 
const {Skill, Character} = require("../../models")

router.get('/', async (req, res) => {

    try {
      const skillData = await Skill.findAll({       
         include: [
          { model: Character, as: 'character' }
        ]
        });
      res.status(200).json(skillData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const statData = await Skill.findByPk(req.params.id, {
        include: [
            { model: Character, as: 'character' }
          ]
      });
  
      if (!skillData) {
        res.status(404).json({ message: 'No skill found with this id!' });
        return;
      }
  
      res.status(200).json(skillData);
    } catch (err) {
      res.status(500).json(err);
    }
  });