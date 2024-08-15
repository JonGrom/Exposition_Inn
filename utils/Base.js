class Base{
    //takes in user input data to construct character
    constructor(dataObj){
        const { name, archetype, level, race, background, username, strength, dexterity, constitution, intelligence, wisdom, charisma } = dataObj;
        //Base straight from form

        this.name = name;
        this.archetype = archetype;
        this.level = level;
        this.race = race;
        this.background = background;
        this.username = username;

        //Stats
        this.stat = {
            strength: {
                val: strength,
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            dexterity: {
                val: dexterity,
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            constitution: {
                val: constitution,
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            intelligence: {
                val: intelligence,
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            wisdom: {
                val: wisdom,
                mod: 0,
                saveVal: 0,
                prof: false,
            },
            charisma: {
                val: charisma,
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
            },
            animalHandling: {
                val: 0,
                prof: false,
            },
            arcana: {
                val: 0,
                prof: false,
            },
            athletics: {
                val: 0,
                prof: false,
            },
            deception: {
                val: 0,
                prof: false,
            },
            history: {
                val: 0,
                prof: false,
            },
            insight: {
                val: 0,
                prof: false,
            },
            intimidation: {
                val: 0,
                prof: false,
            },
            investigation: {
                val: 0,
                prof: false,
            },
            medicine: {
                val: 0,
                prof: false,
            },
            nature: {
                val: 0,
                prof: false,
            },
            perception: {
                val: 0,
                prof: false,
            },
            performance: {
                val: 0,
                prof: false,
            },
            persuasion: {
                val: 0,
                prof: false,
            },
            religion: {
                val: 0,
                prof: false,
            },
            sleightOfHand: {
                val: 0,
                prof: false,
            },
            stealth: {
                val: 0,
                prof: false,
            },
            survival: {
                val: 0,
                prof: false,
            },
        }
        
        
        this.passivePerception = 0

        //other proficiencies
        this.languages = []
        this.weaponProficiencies = []
        this.armorProficiencies = []
        this.toolProficiencies = []


        //combat

        this.armorClass = 0
        this.initiative = 0
        this.speed = 0
        this.hpMax = 0
        //current and temp hp are updateables
        this.hitDice = ''
        this.hitDiceCount = 0
        //death saves are updateable
        //attacks + spellcasting has array of attack names atk bonus and damage/type
        this.equipment = [
            {weapons: []},
            {armor: []},
            {kits: []},
        ]

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
            //IDEA: seed breath weapons into weapons and this.equipment.weapon.push(`${this.race.option.ancestry}`)
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
            this.skill[this.race.option.prof[0]].prof = true
            this.skill[this.race.option.prof[1]].prof = true
            
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
            this.stat.intimidation.prof = true
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

    }
    calculate(){

    }
    applyArchetpye(){
        if(this.archetype.name == 'Barbarian'){
            //HIT POINTS
            this.hitDice = '1d12'
            this.hitDiceCount = this.level
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 12
            
            //PROFICIENCIES
            this.armorProficiencies.push('light armor', 'medium armor', 'shields')
            this.weaponProficiencies.push('simple weapons', 'martial weapons')
            //no tools
            this.stat.strength.prof = true
            this.stat.constitution.prof = true
            this.skill[this.archetype.option.skill[0]].prof = true
            this.skill[this.archetype.option.skill[1]].prof = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon)
            //!!! "Two handaxes" potential issue
            this.equipment.kits.push("explorer's pack")
            this.equipment.weapons.push('javelin')

            this.features.push('Rage', 'Unarmored Defense')
            //Unarmored Defense
            this.armorClass = 10 + dexMod + conMod
            
        }
        if(this.archetype.name == 'Bard'){
            //HIT POINTS
            this.hitDice = '1d8'
            this.hitDiceCount = this.level
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 8
            
            //PROFICIENCIES
            this.armorProficiencies.push('light armor')
            this.weaponProficiencies.push('simple weapons', 'hand crossbow', 'rapier', 'shortsword')
            //3 musical instruments
            this.toolProficiencies.push(this.archetype.option.tool)
            //no tools
            this.dexSaveProf = true
            this.chaSaveProf = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon)
            this.equipment.weapons.push('dagger')
            //!!! "Two handaxes" potential issue
            this.equipment.kits.push(this.archetype.option.pack)
            this.equipment.kits.push(this.archetype.option.instrument)
            this.equipment.armor.push('leather')


            this.features.push('Rage', 'Unarmored Defense')
            //Unarmored Defense
            this.armorClass = 10 + dexMod + conMod
            
        }
        if(this.archetype.name == 'Cleric'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
        if(this.archetype.name == 'NAME'){
            //HIT POINTS
            this.hitDice = 
            this.hitDiceCount = 
            //At higher levels 1d12 (or7) plus conMod per level
            this.hpMax = this.conMod + 
            
            //PROFICIENCIES
            this.armorProficiencies.push('')
            this.weaponProficiencies.push('')
            this.toolProficiencies.push('')
            //no tools
            //SAVING THROWS
            this. = true
            this. = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("")
            this.equipment.weapons.push('')

            this.features.push('')
            
        }
    }
}

class Barbarian extends Base{
    constructor(){
        //super all else
        super( name, archetype, level, race, background, username, strength, dexterity, constitution, intelligence, wisdom, charisma )
        
        //hp
        this.hitDice = '1d12'
        this.hitDiceCount = this.level
            //At higher levels 1d12 (or7) plus conMod per level
        this.hpMax = this.conMod + 12
            
            //PROFICIENCIES
            this.armorProficiencies.push('light armor', 'medium armor', 'shields')
            this.weaponProficiencies.push('simple weapons', 'martial weapons')
            //no tools
            this.strSaveProf = true
            this.conSaveProf = true
            this[this.archetype.option.skill[0]] = true
            this[this.archetype.option.skill[1]] = true

            //EQUIPMENT
            this.equipment.weapons.push(this.archetype.option.weapon[0])
            //!!! "Two handaxes" potential issue
            this.equipment.weapons.push(this.archetype.option.weapon[1])
            this.equipment.kits.push("explorer's pack")
            this.equipment.weapons.push('javelin')

            this.features.push('Rage', 'Unarmored Defense')
            //Unarmored Defense
            this.armorClass = 10 + dexMod + conMod


        //other proficiencies
        this.languages = []
        this.weaponProficiencies = []
        this.armorProficiencies = []
        this.toolProficiencies = []


        //combat

        this.armorClass = 
        this.initiative = 0
        this.speed = 0
        this.hpMax = 0
        //current and temp hp are updateables
        this.hitDice = ''
        this.hitDiceCount = 0
        //death saves are updateable
        //attacks + spellcasting has array of attack names atk bonus and damage/type
        this.equipment = [
            {weapons: []},
            {armor: []},
            {kits: []},
        ]

        this.features = ['Rage']
        this.traits = []

    }
}

//questionTree:
    //Character's name? Character'sRace? Character's Class? Character's Background? Character's Stats?
// name, archetype, level, race, background, username, strength, dexterity, constitution, intelligence, wisdom, charisma
const dataObj = {
    name: "Marcus",
    archetype: "Barbarian",
    level: 1,
    race: {
        name: 'Half-Elf',
        option: {
            language: 'english',
            stat: ['strength', 'dexterity'],
            prof: ['acrobaticsProf', 'athleticsProf']
        },
    },
    background: '',
    username: '',
    strength: 14,
    dexterity: 12,
    constitution: 12,
    intelligence: 12,
    wisdom: 12,
    charisma: 12,
}

console.log(dataObj.race.name, dataObj.race.option.language)
const character = new Base(dataObj)
character.applyRace(this.race)
console.log(dataObj)
console.log(character)