const router = require("express").Router() 
const { Character, Stat, Skill, Weapon, Armor, Spell, User } = require("../../models");
const { convertToDb } = require("../../utils/converter");
const Base = require("../../utils/Base");

// get all characters
router.get('/', async (req, res) => {
    // find all products
    // be sure to include its associated Category
    try {
      const characterData = await Character.findAll({
        include: [
        // { model: Stat, as: 'stat' },
        // { model: Skill, as: 'skill' },
        { model: Weapon, as: 'weapon' },
        { model: Armor, as: 'armor' },
        { model: Spell, as: 'spell' },
        { model: User, as: 'user' }
        ]
      });
      res.status(200).json(characterData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // get one character
router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag 
    try {
      const characterData = await Character.findByPk(req.params.id);


      const character = await convertFromDatabase(characterData.get({plain: true}));
      console.log(character)

  
      if (!characterData) {
        res.status(404).json({ message: 'No character found with this id!' });
        return;
      }
  
      res.status(200).json(character);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // create 
router.post('/', async (req, res) => {
    try {
      
      console.log("console log in character post", req.body)

      const newBase = new Base(req.body)
      newBase.applyRace();
      newBase.calculateMods();
      newBase.applyArchetype();
      newBase.calculations();


      const newCharacter = await Character.create({
        ...convertToDb(newBase),
        user_id: req.session.user_id
    });
      
      res.status(200).json(newCharacter);
    } catch(err){
      console.log(err);
      res.status(400).json(err);
    };
  })

  module.exports = router