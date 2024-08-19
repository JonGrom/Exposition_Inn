class Base{
    //takes in user input data to construct character
    constructor(dataObj){
        const { name, archetype, level, race, background, alignment, strength, dexterity, constitution, intelligence, wisdom, charisma } = dataObj;
        //Base straight from form

        this.name = name;
        this.archetype = archetype;
        this.level = level;
        this.race = race;
        this.background = background;
        this.alignment = alignment;

        this.profBonus = 2

        //Stats
        this.stat = {
            strength: {
                val: parseInt(strength),
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            dexterity: {
                val: parseInt(dexterity),
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            constitution: {
                val: parseInt(constitution),
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            intelligence: {
                val: parseInt(intelligence),
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            wisdom: {
                val: parseInt(wisdom),
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            charisma: {
                val: parseInt(charisma),
                mod: 0,
                saveVal: 0,
                prof: false,
            }
            
        }

        //Skills
        this.skill = {
            acrobatics: {
                val: 0,
                prof: false,
                ref: 'dexterity'
            },
            animalHandling: {
                val: 0,
                prof: false,
                ref: 'wisdom'
            },
            arcana: {
                val: 0,
                prof: false,
                ref: 'intelligence'
            },
            athletics: {
                val: 0,
                prof: false,
                ref: 'strength'
            },
            deception: {
                val: 0,
                prof: false,
                ref: 'charisma'
            },
            history: {
                val: 0,
                prof: false,
                ref: 'intelligence'
            },
            insight: {
                val: 0,
                prof: false,
                ref: 'wisdom'
            },
            intimidation: {
                val: 0,
                prof: false,
                ref: 'charisma'
            },
            investigation: {
                val: 0,
                prof: false,
                ref: 'intelligence'
            },
            medicine: {
                val: 0,
                prof: false,
                ref: 'wisdom'
            },
            nature: {
                val: 0,
                prof: false,
                ref: 'intelligence'
            },
            perception: {
                val: 0,
                prof: false,
                ref: 'wisdom'
            },
            performance: {
                val: 0,
                prof: false,
                ref: 'charisma'
            },
            persuasion: {
                val: 0,
                prof: false,
                ref: 'charisma'
            },
            religion: {
                val: 0,
                prof: false,
                ref: 'intelligence'
            },
            sleightOfHand: {
                val: 0,
                prof: false,
                ref: 'dexterity'
            },
            stealth: {
                val: 0,
                prof: false,
                ref: 'dexterity'
            },
            survival: {
                val: 0,
                prof: false,
                ref: 'wisdom'
            },
        }
        
        
        this.passivePerception = 10 + this.stat.wisdom.mod

        //other proficiencies
        this.languages = []
        this.weaponProficiencies = []
        this.armorProficiencies = []
        this.toolProficiencies = []


        //combat

        this.armorClass = 10
        this.initiative = this.stat.dexterity.mod
        this.speed = 0
        this.hpMax = 0
        //current and temp hp are updateables
        this.hitDice = ''
        this.hitDiceCount = this.level
        //death saves are updateable
        //attacks + spellcasting has array of attack names atk bonus and damage/type
        this.equipment = {
            weapon: [],
            armor: [],
            kits: [],
        }

        this.features = []
        this.traits = []
    
        //spellcasting
        this.splClass = ''
        this.splAbility = ''
        this.splSave = 0
        this.splAtckBonus = 0
        this.spellsKnown = []
        this.lvl1spellSlots = 0

        //pure cosmetics
        this.personalityTraits = ''
        this.ideals = ''
        this.bonds = ''
        this.flaws = ''
        
    };
    //question tree functions
    applyRace(){
        //OPTION for both dwarves is toolProficiency CHOICE: smith's tools, brewer's supplies, mason's tools
        if(this.race.name == 'Hill Dwarf'){
            //Buffs
            this.stat.constitution.val = this.stat.constitution.val+2
            this.stat.wisdom.val = this.stat.wisdom.val+1
            this.speed = 25
            this.traits.push('Dwarven Resilience', 'Dwarven Combat Training', 'Stonecunning', 'Dwarven Toughness')
            //Dwarven Combat Training
            this.weaponProficiencies.push('battleaxe', 'handaxe', 'light hammer', 'warhammer')
            //Tool Proficiency
            this.toolProficiencies.push(this.race.option)
            //Languages
            this.languages.push('Common', 'Dwarvish')
            //Dwarven Toughness FEATUREPROOFING!! THIS SHOULD ADD 1 HP FOR EACH LEVEL
            this.hpMax = this.hpMax + this.level

        }
        if(this.race.name == 'Mountain Dwarf'){
            //Buffs
            this.stat.constitution.val = this.stat.constitution.val+2
            this.stat.strength.val = this.stat.strength.val+2
            this.speed = 25
            this.traits.push('Dwarven Resilience', 'Dwarven Combat Training', 'Stonecunning')
            //Dwarven Combat Training
            this.weaponProficiencies.push('battleaxe', 'handaxe', 'light hammer', 'warhammer')
            //Tool Proficiency
            this.toolProficiencies.push(this.race.option)
            //Languages
            this.languages.push('Common', 'Dwarvish')
            //Dwarven Armor Training
            this.armorProficiencies.push('light', 'medium')
        }
        if(this.race.name == 'High Elf'){
            //Buffs
            this.stat.dexterity.val = this.stat.dexterity.val+2
            this.stat.intelligence.val = this.stat.intelligence.val+1
            this.speed = 30
            this.traits.push('Darkvision', 'Fey Ancestry', 'Trance')
            //Keen Senses
            this.skill.perception.prof = true
            //Elf Weapon Training
            this.weaponProficiencies.push('longsword', 'shortsword', 'shortbow', 'longbow')
            //Languages
            this.languages.push('Common', 'Elvish', this.race.option.language)
            //Cantrip
            this.spellsKnown.push(this.race.option.cantrip)
        }
        if(this.race.name == 'Wood Elf'){
            //Buffs
            this.stat.dexterity.val = this.stat.dexterity.val+2
            this.stat.wisdom.val = this.stat.wisdom.val+1
            this.speed = 35
            this.traits.push('Darkvision', 'Fey Ancestry', 'Trance', 'Mask of the Wild')
            //Keen Senses
            this.skill.perception.prof = true
            //Elf Weapon Training
            this.weaponProficiencies = ('longsword', 'shortsword', 'shortbow', 'longbow')
            //Languages
            this.languages.push('Common', 'Elvish')
        }
        if(this.race.name == 'Dark Elf'){
            //Buffs
            this.stat.dexterity.val = this.stat.dexterity.val+2
            this.stat.charisma.val = this.stat.charisma.val+1
            this.speed = 30
            this.traits.push('Darkvision', 'Fey Ancestry', 'Trance', 'Superior Darkvision', 'Sunlight Sensitivity')
            //Keen Senses
            this.skill.perception.prof = true
            //Drow Magic!! NEW SPELLS ADDED AT HIGHER LEVELS MAKE IT A FUNCTION??
            this.spellsKnown.push('dancing lights')
            //Languages
            this.languages.push('Common', 'Elvish')
            //Drow weapon training
            this.weaponProficiencies.push('rapier', 'shortsword', 'hand crossbow')
        }
        if(this.race.name == 'Lightfoot Halfling'){
            //Buffs
            this.stat.dexterity.val = this.stat.dexterity.val+2
            this.stat.charisma.val = this.stat.charisma.val+1
            this.speed = 25
            this.traits.push('Lucky', 'Brave', 'Halfling Nimbleness', 'Naturally Stealthy')
            
            //Languages
            this.languages.push('Common', 'Halfling')
        }
        if(this.race.name == 'Stout Halfling'){
            //Buffs
            this.stat.dexterity.val = this.stat.dexterity.val+2
            this.stat.constitution.val = this.stat.constitution.val+1
            this.speed = 25
            this.traits.push('Lucky', 'Brave', 'Halfling Nimbleness', 'Stout Resilience')
            
            //Languages
            this.languages.push('Common', 'Halfling')
        }
        if(this.race.name == 'Human'){
            //Buffs
            this.stat.strength.val = this.stat.strength.val+1
            this.stat.dexterity.val = this.stat.dexterity.val+1
            this.stat.constitution.val = this.stat.constitution.val+1
            this.stat.intelligence.val = this.stat.intelligence.val+1
            this.stat.wisdom.val = this.stat.wisdom.val+1
            this.stat.charisma.val = this.stat.charisma.val+1
            this.speed = 30
            
            //Languages
            this.languages.push('common', this.race.option.language)
        }
        //Dragonborn option is ancestry
        if(this.race.name == 'Dragonborn'){
            //Buffs
            this.stat.charisma.val = this.stat.charisma.val+1
            this.speed = 30
            //THIS ONE WILL BE HARD!
            this.traits.push('Draconic Ancestry', 'Breath Weapon', 'Damage Resistance')
            
            //Languages
            this.equipment.weapon.push('Breath Weapon')
            this.languages.push('Common', 'Draconic')
            //UNFINISHED!!
            //IDEA: seed breath weapon into weapon and this.equipment.weapon.push(`${this.race.option.ancestry}`)
        }
        if(this.race.name == 'Forest Gnome'){
            //Buffs
            this.stat.intelligence.val = this.stat.intelligence.val+2
            this.stat.dexterity.val = this.stat.dexterity.val+1
            this.speed = 25
            this.traits.push('Darkvision', 'Gnome Cunning', 'Speak with Small Beasts')
            //Natural Illusionist
            this.spellsKnown.push('minor illusion')
            
            //Languages
            this.languages.push('Common', 'Gnomish')
        }
        if(this.race.name == 'Rock Gnome'){
            //Buffs
            this.stat.intelligence.val = this.stat.intelligence.val+2
            this.stat.constitution.val = this.stat.constitution.val+1
            this.speed = 25
            this.traits.push('Darkvision', 'Gnome Cunning', "Artificer's Lore", 'Tinker')
            //Tinker
            this.toolProficiencies.push("artisan's tools")
            //Languages
            this.languages.push('Common', 'Gnomish')
        }
        if(this.race.name == 'Half-Elf'){
            //Buffs
            this.stat.charisma.val = this.stat.charisma.val+2
            //OPTION pick two stats to increase
            this.stat[this.race.option.stat[0]].val = this.stat[this.race.option.stat[0]].val+1
            this.stat[this.race.option.stat[1]].val = this.stat[this.race.option.stat[1]].val+1
            this.speed = 30
            this.traits.push('Darkvision', 'Fey Ancestry')
            //Skill Versatility
            this.skill[this.race.option.skill[0]].prof = true
            this.skill[this.race.option.skill[1]].prof = true
            
            //Languages
            this.languages.push('Common', 'Elvish', this.race.option.language)
        }
        if(this.race.name == 'Half-Orc'){
            //Buffs
            this.stat.strength.val = this.stat.strength.val+2
            this.stat.constitution.val = this.stat.constitution.val+1
            this.speed = 30
            this.traits.push('Darkvision', 'Relentless Endurance', 'Savage Attacks')
            //Menacing
            this.skill.intimidation.prof = true
            //Languages
            this.languages.push('Common', 'Orc')
        }
        if(this.race.name == 'Tiefling'){
            //Buffs
            this.stat.intelligence.val = this.stat.intelligence.val+1
            this.stat.charisma.val = this.stat.charisma.val+2
            this.speed = 30
            this.traits.push('Darkvision', 'Hellish Resistance')
            //Infernal Legacy NEW SPELLS AT HIGHER LEVELS!!
            this.spellsKnown.push('thaumaturgy')
            
            //Languages
            this.languages.push('Common', 'Infernal')
        }
    }
    applyBackground(){
        this.backgroundObj.option.forEach((option) => {
            if (option.type == "Language"){
                this.languages.push(option.option)
            } else if (option.type == "Tools"){
                this.equipment.kits.push(option.option)
            }
        })
    }
    calculateMods(){
        const stats = Object.keys(this.stat)
        stats.forEach((stat) => this.stat[stat].mod = Math.floor(this.stat[stat].val/2 - 5))
    }
    applyArchetype(){
        if(this.archetype.name == 'Barbarian'){
            //HIT POINTS
            this.hitDice = '1d12'
            //At higher levels 1d12 (or7) plus stat.constitution.mod per level
            this.hpMax = this.stat.constitution.mod + 12
            
            //PROFICIENCIES
            this.armorProficiencies.push('light', 'medium', 'shields')
            this.weaponProficiencies.push('simple', 'martial')
            //no tools
            this.stat.strength.prof = true
            this.stat.constitution.prof = true
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon)
            this.equipment.kits.push("explorer's pack")
            this.equipment.weapon.push('Javelin')

            this.features.push('Rage', 'Unarmored Defense')
            //Unarmored Defense
            this.armorClass = this.armorClass + this.stat.constitution.mod
            
        }
        if(this.archetype.name == 'Bard'){
            //HIT POINTS
            this.hitDice = '1d8'
            //At higher levels 1d12 (or7) plus stat.constitution.mod per level
            this.hpMax = this.stat.constitution.mod + 8
            
            //PROFICIENCIES
            this.armorProficiencies.push('light')
            this.weaponProficiencies.push('simple', 'hand crossbow', 'rapier', 'shortsword')
            //3 musical instruments
            this.toolProficiencies.push(this.archetype.option.tool)
            //SAVING THROWS
            this.stat.dexterity.prof = true
            this.stat.charisma.prof = true
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true
            this.skill[this.archetype.option.skill[2]].prof = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon, 'Dagger')
            this.equipment.kits.push(this.archetype.option.pack)
            this.equipment.armor.push('Leather')

            //SPELLCASTING 
            this.splClass = 'Bard'
            this.splAbility = 'CHA'
            this.splSave = 8 + this.profBonus + this.stat.charisma.mod
            this.splAtckBonus = this.profBonus + this.stat.charisma.mod
            this.spellsKnown.push(this.archetype.option.spell) //should be array
            this.lvl1spellSlots = 2
        
            this.features.push('Ritual Casting', 'Bardic Inspiration')
            
        }
        if(this.archetype.name == 'Cleric'){
            //HIT POINTS
            this.hitDice = '1d8'
            this.hpMax = this.stat.constitution.mod + 8
            
            //PROFICIENCIES
            this.armorProficiencies.push('light, medium, shields')
            this.weaponProficiencies.push('simple')
            //no tools
            //SAVING THROWS
            this.stat.wisdom.prof = true
            this.stat.charisma.prof = true
            
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon)
            this.equipment.armor.push(this.archetype.option.armor)
            this.equipment.kits.push(this.archetype.option.pack, 'shield', 'holy symbol')

            //SPELLCASTING 
            this.splClass = 'Cleric'
            this.splAbility = 'WIS'
            this.splSave = 8 + this.profBonus + this.stat.wisdom.mod
            this.splAtckBonus = this.profBonus + this.stat.wisdom.mod
            this.spellsKnown.push(this.archetype.option.spell) //should be array
            this.lvl1spellSlots = 2

            this.features.push('Ritual Casting', 'Divine Domain')
            
        }
        if(this.archetype.name == 'Druid'){
            //HIT POINTS
            this.hitDice = '1d8'
            this.hpMax = this.stat.constitution.mod + 8
            
            //PROFICIENCIES
            this.armorProficiencies.push('light', 'medium', 'shields')
            this.weaponProficiencies.push('Club', 'Dagger', 'Dart', 'Javelin', 'Mace', 'Quarterstaff', 'Scimitar', 'Sickle', 'Sling', 'Spear')
            this.toolProficiencies.push('Herbalism Kit')
            //no tools
            //SAVING THROWS
            this.stat.intelligence.prof = true
            this.stat.wisdom.prof = true
            
            
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon)
            this.equipment.armor.push('Leather')
            this.equipment.kits.push("Explorer's Pack", 'Druidic Focus')

            //SPELLCASTING 
            this.splClass = 'Druid'
            this.splAbility = 'WIS'
            this.splSave = 8 + this.profBonus + this.stat.wisdom.mod
            this.splAtckBonus = this.profBonus + this.stat.wisdom.mod
            this.spellsKnown.push(this.archetype.option.spell) //should be array
            this.lvl1spellSlots = 2

            this.features.push('Ritual Casting')
            
        }
        if(this.archetype.name == 'Fighter'){
            //HIT POINTS
            this.hitDice = '1d10'
            this.hpMax = this.stat.constitution.mod + 10
            
            //PROFICIENCIES
            this.armorProficiencies.push('All', 'shields')
            this.weaponProficiencies.push('simple', 'martial')
            //no tools
            //SAVING THROWS
            this.stat.strength.prof = true
            this.stat.constitution.prof = true
            
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true

            //EQUIPMENT!!!
           

            this.features.push(`Fighting Style: ${this.archetype.option.feature}`)
            
        }
        if(this.archetype.name == 'Monk'){
            //HIT POINTS
            this.hitDice = '1d8'
            this.hpMax = this.stat.constitution.mod + 8
            
            //PROFICIENCIES
            //no armor
            this.weaponProficiencies.push('simple', 'shortbows')
            this.toolProficiencies.push("Artisan's Tools")
                    //*^ NONE CANNON. Monk gets to choose between this and an instrument
            //SAVING THROWS
            this.stat.strength.prof = true
            this.stat.dexterity.prof = true
            
            
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon)
            this.equipment.kits.push(this.archetype.option.pack, 'Dart') //10 darts?

            this.features.push('Unarmored Defense', 'Martial Arts')
            
            //Unarmored Defense
            this.armorClass = this.armorClass + this.stat.wisdom.mod
        }
        if(this.archetype.name == 'Paladin'){
            //HIT POINTS
            this.hitDice = '1d10'
            this.hpMax = this.stat.constitution.mod + 10
            
            //PROFICIENCIES
            this.armorProficiencies.push('All', 'shields')
            this.weaponProficiencies.push('simple', 'martial')
            //no tools
            //SAVING THROWS
            this.stat.wisdom.prof = true
            this.stat.charisma.prof = true
            
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true

        
            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon)
            this.equipment.armor.push('Chain mail')
            this.equipment.kits.push(this.archetype.option.pack, 'Holy Symbol')

            this.features.push('Divine Sense', 'Lay on Hands')
            
        }
        if(this.archetype.name == 'Ranger'){
            //HIT POINTS
            this.hitDice = '1d10'
            this.hpMax = this.stat.constitution.mod + 10
            
            //PROFICIENCIES
            this.armorProficiencies.push('light', 'medium', 'shields')
            this.weaponProficiencies.push('simple', 'martial')
            //no tools
            //SAVING THROWS
            this.stat.strength.prof = true
            this.stat.dexterity.prof = true
            
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true
            this.skill[this.archetype.option.skill[2]].prof = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon, 'Longbow')
            this.equipment.armor.push(this.archetype.option.armor)
            this.equipment.kits.push(this.archetype.option.pack)

            this.features.push(`Favored Enemy: ${this.archetype.option.feature[0]}`, `Natural Explorer: ${this.archetype.option.feature[1]}`)
            
        }
        if(this.archetype.name == 'Rogue'){
            //HIT POINTS
            this.hitDice = '1d8'
            this.hpMax = this.stat.constitution.mod + 8
            
            //PROFICIENCIES
            this.armorProficiencies.push('light')
            this.weaponProficiencies.push('simple', 'crossbow', 'longsword', 'rapier', 'shortsword')
            this.toolProficiencies.push("Thieves' Tools")
            //SAVING THROWS
            this.stat.dexterity.prof = true
            this.stat.intelligence.prof = true
            
            
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true
            this.skill[this.archetype.option.skill[2]].prof = true
            this.skill[this.archetype.option.skill[3]].prof = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon, 'Daggar', 'Daggar')
            this.equipment.armor.push('Leather')
            this.equipment.kits.push(this.archetype.option.pack, "Thieves' Tools")
       

            this.features.push(`Expertise: ${this.archetype.option.feature[0]}, ${this.archetype.option.feature[1]}`, 'Sneak Attack', "Thieves' Cant")

            //Expertise
            this.skill[this.archetype.option.feature[0]].val = this.skill[this.archetype.option.feature[0]].val + this.profBonus
            this.skill[this.archetype.option.feature[1]].val = this.skill[this.archetype.option.feature[1]].val + this.profBonus
        }
        if(this.archetype.name == 'Sorcerer'){
            //HIT POINTS
            this.hitDice = '1d6'
            this.hpMax = this.stat.constitution.mod + 6
            
            //PROFICIENCIES
            //no armor
            this.weaponProficiencies.push('Dagger', 'Dart', 'Sling', 'Quarterstaff', 'Light Crossbow')
            //no tools
            //SAVING THROWS
            this.stat.constitution.prof = true
            this.stat.charisma.prof = true
            
            this.skill[this.archetype.option.skill[0]].val = true
            this.skill[this.archetype.option.skill[1]].val = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon[0], 'Dagger', 'Dagger')
            this.equipment.kits.push(this.archetype.option.pack)

            //SPELLCASTING 
            this.splClass = 'Sorcerer'
            this.splAbility = 'CHA'
            this.splSave = 8 + this.profBonus + this.stat.charisma.mod
            this.splAtckBonus = this.profBonus + this.stat.charisma.mod
            this.spellsKnown.push(this.archetype.option.spell) //should be array
            this.lvl1spellSlots = 2

            //FEATURES
            this.features.push(`Sorcerous Origin: ${this.archetype.option.feature}`)
            if(this.archetype.option.feature == 'Draconic Bloodline'){
                this.features.push(`Dragon Ancester: ${this.archetype.option.feature.ancestor}`, 'Draconic Resilience')
                this.languages.push('Draconic')
            } else if(this.archetype.option.feature == 'Wild Magic'){
                this.features.push('Wild Magic Surge', 'Tides of Chaos')
            }
            
        }
        if(this.archetype.name == 'Warlock'){
            //HIT POINTS
            this.hitDice = '1d8'
            this.hpMax = this.stat.constitution.mod + 8
            
            //PROFICIENCIES
            this.armorProficiencies.push('light')
            this.weaponProficiencies.push('simple')

            //SAVING THROWS
            this.stat.intelligence.prof = true
            this.stat.wisdom.prof = true
            
            //STAT PROFICIENCIES
            this.skill[this.archetype.option.skill[0]].val = true
            this.skill[this.archetype.option.skill[1]].val = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon, 'Dagger', 'Dagger')
            this.equipment.armor.push('Leather')
            this.equipment.kits.push(this.archetype.option.pack)
            //SPELLCASTING 
            this.splClass = 'Warlock'
            this.splAbility = 'CHA'
            this.splSave = 8 + this.profBonus + this.stat.charisma.mod
            this.splAtckBonus = this.profBonus + this.stat.charisma.mod
            this.spellsKnown.push(this.archetype.option.spell) //should be array
            this.lvl1spellSlots = 1

            this.features.push(`Otherworldly Patron: ${this.archetype.option.feature}`, 'Pact Magic')

            if(this.archetype.option.feature == 'The Archfey'){
                this.features.push('Fey Presence')
            } else if(this.archetype.option.feature == 'The Fiend'){
                this.features.push("Dark One's Blessing")
            } else if(this.archetype.option.feature == 'The Great Old One'){
                this.features.push('Awakened Mind')
            }
            
        }
        if(this.archetype.name == 'Wizard'){
            //HIT POINTS
            this.hitDice = '1d6'
            this.hpMax = this.stat.constitution.mod + 6
            
            //PROFICIENCIES
            //no armor
            this.weaponProficiencies.push('Dagger', 'Dart', 'Sling', 'Quarterstaff', 'Light Crossbow')
            //no tools
            //SAVING THROWS
            this.stat.intelligence.prof = true
            this.stat.wisdom.prof = true
            
            this.skill[this.archetype.option.skill[0]].val = true
            this.skill[this.archetype.option.skill[1]].val = true

            //EQUIPMENT
            this.equipment.weapon.push(this.archetype.option.weapon)
            this.equipment.kits.push(this.archetype.option.pack, 'Spellbook')

            //SPELLCASTING 
            this.splClass = 'Wizard'
            this.splAbility = 'INT'
            this.splSave = 8 + this.profBonus + this.stat.intelligence.mod
            this.splAtckBonus = this.profBonus + this.stat.intelligence.mod
            this.spellsKnown.push(this.archetype.option.spell) //should be array
            this.lvl1spellSlots = 2

            this.features.push('Ritual Casting', 'Arcane Recovery')
            
        }
    }
    calculations(){
        //saves
        const stats = Object.keys(this.stat)
        stats.forEach((stat) => {
            this.stat[stat].saveVal = this.stat[stat].mod
            if(this.stat[stat].prof == true){
                this.stat[stat].saveVal = this.stat[stat].saveVal + this.profBonus
            }
        })
        //skills
        const skills = Object.keys(this.skill)
        skills.forEach((skill) => {
            this.skill[skill].val = this.skill[skill].val + this.stat[this.skill[skill].ref].mod
            if(this.skill[skill].prof == true){
                this.skill[skill].val = this.skill[skill].val + this.profBonus
            }
        })
        //naked armor class
        this.armorClass = this.armorClass + this.stat.dexterity.mod
        //initiative
        this.initiative = this.stat.dexterity.mod
        //passive perception
        this.passivePerception = 10 + this.skill.perception.val
    }
}

//WHEN CONSTRUCTING ALWAYS PERFORM THESE FUNCTIONS
// character.applyRace()
// character.applyBackground()
// character.calculateMods()
// character.applyArchetpye()
// character.calculations()
//EXAMPLE DATA OBJ
const dataObj = {
    name: "Marcus",
    archetype: {
        name: "Rogue", 
        option: {
            skill: ['arcana', 'intimidation', 'athletics', 'deception'],
            feature: ['athletics', 'deception'],
            weapon: 'crossbow',
            pack: 'can of beans'
        }
    },
    level: 1,
    race: {
        name: 'High Elf',
        option: {
            language: 'Draconic',
            cantrip: 'firebolt'
        },
    },
    background: '',
    alignment: '',
    strength: 14,
    dexterity: 12,
    constitution: 12,
    intelligence: 12,
    wisdom: 12,
    charisma: 12,
}

const marcus = new Base(dataObj)
marcus.applyRace()
marcus.calculateMods()
marcus.applyArchetype()
marcus.calculations()
// console.log(marcus)

module.exports = Base