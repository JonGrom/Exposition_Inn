async function handleSubmit(event) {
    event.preventDefault()
    const dataObj = buildDataObj()
    console.log(dataObj)
    
    // if (characterName && race && archetype && alignment && stat && skill && background && backstory) {
    //   const response = await fetch(`/api/profile`, {
    //     method: 'GET',
    //     body: JSON.stringify({ characterName, race, archetype, alignment, stat, skill, background, backstory }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/character');
    //   } else {
    //     alert('Failed to create character');
    //   }
    // }
};

function buildDataObj(){

  validateInput()
  const raceObj = buildRaceObj()
  const archetypeObj = buildArchetypeObj()
  const bakcgroundObj = buildBackgroundObj()

  const dataObj = {}

  //define query selectors
  const name = $('#name').val()
  const race = $('#race-select').val()
  const subrace = $('#subrace-select').val()
  const raceOption = $('#race-option').val()
  const raceOption1 = $('#race-option1').val()
  const raceOption2 = $('#race-option2').val()
  const raceOption3 = $('#race-option3').val()
  const raceOption4 = $('#race-option4').val()
  const alignment = $('#alignment-select').val()
  console.log(alignment)
  console.log(raceOption1)
  const strength = $('#strength-stat').val()
  const dexterity = $('#dexterity-stat').val()
  const constitution = $('#constitution-stat').val()
  const intelligence = $('#intelligence-stat').val()
  const wisdom = $('#wisdom-stat').val()
  const charisma = $('#charisma-stat').val()

  //Build data object
  dataObj.name = name

  //Race Object
  dataObj.race = {}

  subrace ? dataObj.race.name = subrace : dataObj.race.name = race

  if(raceOption){
    console.log(raceOption)
    dataObj.race.option = raceOption
    console.log(dataObj.race.option)
  } else if (raceOption1){
    dataObj.race.option = {
      stat: [raceOption1, raceOption2],
      skill: [raceOption3, raceOption4]
    }
    console.log(dataObj.race.option)
  }

  function validateInput(){

  }

  function buildRaceObj(){

  }

  function buildArchetypeObj(){

  }

  function buildBackgroundObj(){

  }

  //Archetype Object

  //Background Object

  //Race Object Stats
  dataObj.strength = strength
  dataObj.dexterity = dexterity
  dataObj.constitution = constitution
  dataObj.intelligence = intelligence
  dataObj.wisdom = wisdom
  dataObj.charisma = charisma

  //Misc
  dataObj.level = 1
  dataObj.alignment = alignment

  return dataObj
}


//DROPDOWNS
function renderDropdown(name, array){
  //filter
  array.forEach((element) => {$(`.${name}`).append($ ('<option>').text(element))
  })
}


//EXAMPLE form

//RACE OPTION FUNCTIONS

//DWARF
function renderDwarfOptions(){
  const form = $('<div>')
  .append($('<label>').text('subrace:'))
  .append($('<select id="subrace-select">')
    .append($('<option>').text('Hill Dwarf'))
    .append($('<option>').text('Mountain Dwarf'))
  )
  .append($('<label>').text('tool proficiency:'))
  .append($('<select id="race-option">')
    .append($('<option>').text("Smith's Tools"))
    .append($('<option>').text("Brewer's Supplies"))
    .append($('<option>').text("Mason's Tools"))
  )

  $('#race-options').append(form)
}

//ELF
function renderElfOptions(){
  
  //subrace option
  const subraceOption = $('<div>')
  .append($('<label>').text('subrace:'))
  .append($('<select id="subrace-select">')
    .append($('<option>').text('High Elf'))
    .append($('<option>').text('Wood Elf'))
    .append($('<option>').text('Dark Elf'))
  )

  //language option
  const languageOption = $('<div>')
    .append($('<label>').text('extra language:'))
    .append($('<select class="languages" id="race-option">')
  )

  $('#race-options').append(subraceOption).append(languageOption)

  renderDropdown('languages', languages)

  //Change function
  $('#subrace-select').on('change', function(){
    subrace = $('#subrace-select').val()
    languageOption.remove()
    if(subrace == 'High Elf'){
      $('#race-options').append(languageOption)
      renderDropdown('languages', languages)
    }
  })
}

//HALFLING
function renderHalflingOptions(){
  const form = $('<div>')
  .append($('<label>').text('subrace:'))
    .append($('<select id="subrace-select">')
      .append($('<option>').text('Lightfoot Halfling'))
      .append($('<option>').text('Stout Halfling'))
  )

  $('#race-options').append(form)
}

//HUMAN
function renderHumanOptions(){
  const languageOption = $('<div>')
    .append($('<label>').text('extra language:'))
    .append($('<select class="languages" id="race-option">')
  )

  $('#race-options').append(languageOption)

  renderDropdown('languages', languages)

}

//DRAGONBORN
function renderDragonbornOptions(){
  const form = $('<div>')
  .append($('<label>').text('draconic ancestry:'))
    .append($('<select id="race-option">')
      .append($('<option>').text('Black'))
      .append($('<option>').text('Blue'))
      .append($('<option>').text('Brass'))
      .append($('<option>').text('Bronze'))
      .append($('<option>').text('Copper'))
      .append($('<option>').text('Gold'))
      .append($('<option>').text('Green'))
      .append($('<option>').text('Red'))
      .append($('<option>').text('Silver'))
      .append($('<option>').text('White'))
  )

  $('#race-options').append(form)

}
function renderGnomeOptions(){

  const form = $('<div>')
  .append($('<label>').text('subrace:'))
    .append($('<select id="subrace-select">')
      .append($('<option>').text('Forest Gnome'))
      .append($('<option>').text('Rock Gnome'))
  )

  $('#race-options').append(form)
}

//HALF-ELF
function renderHalfElfOptions(){
  //stat and skill options
  const options = $('<div>')
  .append($('<label id="buff">').text('stat buff:'))
  .append($('<select class="stat" id="race-option1">'))
  .append($('<label id="buff">').text('stat buff:'))
  .append($('<select class="stat" id="race-option2">'))
  .append($('<label id="buff">').text('skill:'))
  .append($('<select class="skill" id="race-option3">'))
  .append($('<label id="buff">').text('skill:'))
  .append($('<select class="skill" id="race-option4">'))

  $('#race-options').append(options)

  renderDropdown('stat', stats)
  renderDropdown('skill', skills)
}

//RENDER RACE OPTION

//BARBARIAN
function renderBarbarianOptions(){
  //Prficiencies
  const skillProfs = ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival']
  const martialMelee = ['!!!!']
  const simpleWeapons = ['!!!!']

  const options = $('<div>')
  .append($('<label id="prof">').text('skill:'))
  .append($('<select class="profs" id="archetype-skill1">'))
  .append($('<label id="prof">').text('skill:'))
  .append($('<select class="profs" id="archetype-skill2">'))
  .append($('<label id="weapon">').text('weapon:'))
  .append($('<select class="weapon1" id="weapon1">'))
  .append($('<label id="weapon">').text('weapon:'))
  .append($('<select class="weapon2" id="weapon2">'))
  
  $('#archetype-options').append(options)
  
  renderDropdown('profs', skillProfs)
  renderDropdown('weapon1', martialMelee)
  renderDropdown('weapon2', simpleWeapons)

}

//BARD
function renderBardOptions(){
  //arrays
  //full skills array for skills
  const weapons = ['Rapier', 'Longsword']
//!!! simpleWeapons.forEach(weapon => weapons.push(weapon))
  //musical instruments in object as "option.tool" array
  //inputs
  const options = $('<div>')
  .append($('<label id="">').text(':'))
  .append($('<input class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<input class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<input class="" id="">'))

  //skills in as "option.skills" array 
  //all skills
  const skillprofs = $('<div>')
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))

  //option.weapon
  const misc = $('<div>')
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  //option.pack
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">')
    .append($('<option>').text("Diplomat's Pack"))
    .append($('<option>').text("Entertainer's Pack")))
  //option.instrument 
  .append($('<label id="">').text(':'))
  .append($('<input class="" id="">'))


  //spells
  //cantrips
  const cantripsKnown = $('<div>')
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))

  //1st level
  const spellsKnown = $('<div>')
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))

  $('#archetype-options').append(options).append(skillprofs).append(misc).append(spellsKnown)

  renderDropdown('prof', skills)
  renderDropdown('weapon', weapons)
  renderDropdown('cantrip', bardCantrips)
  renderDropdown('spells', lvl1BardSpells)
}

//CLERIC !! BUFFED(because if-proficient)
function renderClericOptions(){
  //arrays
  const skillProfs = ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']

  //option.skill
  const profs = $('<div>')
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))

  //option.weapon / option.armor / option.pack
  const misc = $('<div>')
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">')
    .append($('<option>').text("Mace"))
    .append($('<option>').text("Warhammer")))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">')
    .append($('<option>').text("Scale mail"))
    .append($('<option>').text("Leather")))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">')
    .append($('<option>').text("Priests' Pack"))
    .append($('<option>').text("Explorer's Pack")))

  //option.spell 
  const spellsKnown = $('<div>')
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  .append($('<label id="">').text(':'))
  .append($('<select class="" id="">'))
  

  $('#archetype-options').append(profs).append(misc).append(spellsKnown)

  renderDropdown('prof', skillProfs)
  renderDropdown('cantrip', clericCantrips)
}

//DRUID 
function renderDruidOptions(){
  
  //arrays choose 2
  const skillProfs = ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']
  const weapon1 = ['wooden shield']
// simpleWeapons.forEach(weapon => weapons.push(weapon))
  const weapon2 = ['scimitar']
// simpleMelee.forEach(weapon => weapons.push(weapon))

//2 cantrips known
  // const spellsKnown = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))

  // $('#archetype-options').append()

  renderDropdown('prof', skillProfs)
  renderDropdown('weapon1', weapon1)
  renderDropdown('weapon2', weapon2)
  renderDropdown('cantrip', druidCantrips)
}
function renderFighterOptions(){
  //arrays
  // choose 2
  const skillProfs = ['Acrobatics', 'Animal handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival']
  const weapon2 = ['shield']
// martialWeapons.forEach(weapon => weapons.push(weapon))
  const features = ['Archery', 'Defense', 'Dueling', 'Great Weapon Fighting', 'Protection', 'Two-Weapon Fighting']
  //! Chain mail / leather armor and longbow UNIQUE ID! weapon1
        //^ if no time just Chain mail straight to constructor
  //! s AND shield OR two martial weapons UNIQUE ID!
  //! light crossbow / 2 handaxes
  //!dungeneers pack or explorer's pack

  // const spellsKnown = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))

  // $('#archetype-options').append()

  renderDropdown('weapon2', weapon2)
  renderDropdown('weapon3', martialWeapons)
  renderDropdown('feature', features)
}
function renderMonkOptions(){
  //arrays
  const skillProfs = ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth']
  const weapons = ['Shortsword']
// simpleWeapons.forEach(weapon => weapons.push(weapon))

  //! dungeoneers pack / explorers pack option.pack
  // const spellsKnown = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))

  // $('#archetype-options').append()

  renderDropdown('prof', skillProfs)
  renderDropdown('weapon', weapons)
}
function renderPaladinOptions(){
  //arrays
  const skillProfs = ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']
  const weapon1 = ['shield']
// martialWeapons.forEach(weapon => weapons.push(weapon))
  const weapon3 = ['Javelin']
// simpleMelee.forEach(weapon => weapons.push(weapon))

//.pack preists or explorers
  // const option = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))

  // $('#archetype-options').append()

  renderDropdown('prof', skillProfs)
  renderDropdown('weapon1', weapon1)
  renderDropdown('weapon2', martialWeapons)
  renderDropdown('weapon3', weapon3)
}
function renderRangerOptions(){
  //arrays
  //CHOOSE 3 OF STATS!!
  const skillProfs = ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']

  const feature1 = ['aberrations', 'beasts', 'celestials', 'constructs', 'dragons', 'elementals', 'fey', 'fiends', 'giants', 'monstrosities', 'oozes', 'plants', 'undead']

  const feature2 = ['arctic', 'coast', 'desert', 'forest', 'grassland', 'mountain', 'swamp', 'underdark']
  

  //.armor Scale mail or leather
  //!!! SPECIAL!!! 2 shortswords or 2 simple melee weapons
  //dungeneer's pack or explorer's
  // const option = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))

  // $('#archetype-options').append()

  renderDropdown('prof', skillProfs)
  renderDropdown('feature1', feature1)
  renderDropdown('feature2', feature2)
}
function renderRogueOptions(){
  //.weapon, .pack, .feature
  
  //arrays
  //CHOOSE 4!!!
  const skillProfs = ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand']

  //rapier or shortsword
  //shortbow or shortsword
  //burglar's dungeneers or explorers
//!! Choose 2 skills of your skill proficiencies!! HOW???
  // const option = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))

  // $('#archetype-options').append()

  renderDropdown('prof', skillProfs)

  renderDropdown('feature', skills)
      //^ will need to make only those proficient
}
function renderSorcererOptions(){
  //arrays
  const skillProfs = ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuastion', 'Religion']

  const weapons = ['Light crossbow']
// simpleWeapons.forEach(weapon => weapons.push(weapon))

    //component pouch or arcane focus
    //dungeoneers or explorers
  // const option = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))
    //if Draconic Bloodline
        //dropdown of ancestors steal from dragonborn
    //4 cantrips 2 spells

  // $('#archetype-options').append()

  renderDropdown('prof', skillProfs)
  renderDropdown('weapon', weapons)
  renderDropdown('cantrip', sorcererCantrips)
  renderDropdown('spell', lvl1SorcererSpells)
}

//WARLOCK . skill .weapon .pack .spell .feature
function renderWarlockOptions(){
  
  //arrays 
  const skillProfs = ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']

  const weapon1 = ['Light crossbow']
//!! simpleWeapons.forEach(weapon => weapons.push(weapon))

  const feature = ['The Archfey', 'The Fiend', 'The Great Old One']

  //component pouch or arcane focus
    // scholar's or dungeoneer's 
    //any simple weapon
    //2 cantrips 2 spells
  // const option = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))

//EXPAND SPELL LIST BASED ON PATRON??

  // $('#archetype-options').append()

  renderDropdown('prof', skillProfs)
  renderDropdown('weapon1', weapon1)
  renderDropdown('feature', feature)
  renderDropdown('cantrip', warlockCantrips)
  renderDropdown('spell', lvl1WarlockSpells)

}

//WIZARD
function renderWizardOptions(){
  //arrays
  const skillProfs = ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion']

  //quaterstaff or dagger
  //component pouch or arcane focus
  //scholar's pack or explorer's pack
  //3 cantrips, six spells
  // const option = $('<div>')
  // .append($('<label id="">').text(':'))
  // .append($('<select class="" id="">'))

  // $('#archetype-options').append()

  renderDropdown('prof', skillProfs)
  renderDropdown('cantrip', wizardCantrips)
  renderDropdown('spell', wizardSpells)
}

//**No racial options for half-orc or tiefling 

//ARCHETYPE OPTION FUNCTIONS

$(document).ready(function (){
  //render default options


  // $('#archetype-options').append($('<h1>').text('WHYYYYYY'))
  //event listeners on race and class options
  $('#race-select').on('change', function(event){
    event.preventDefault()
    $('#race-options').html("")
    console.log($('#race-select').val())
    if($('#race-select').val() == 'Dwarf'){
      renderDwarfOptions()
    }
    else if($('#race-select').val() == 'Elf'){
      renderElfOptions()
    }
    else if($('#race-select').val() == 'Halfling'){
      renderHalflingOptions()
    }
    else if($('#race-select').val() == 'Human'){
      renderHumanOptions()
    }
    else if($('#race-select').val() == 'Dragonborn'){
      renderDragonbornOptions()
    }
    else if($('#race-select').val() == 'Gnome'){
      renderGnomeOptions()
    }
    else if($('#race-select').val() == 'Half-Elf'){
      renderHalfElfOptions()
    }
  
  })
  $('#archetype-select').on('change', function(event){
    event.preventDefault()
    console.log($('#archetype-select').val())
    $('#archetype-options').html("")
    if($('#archetype-select').val() == 'Barbarian'){
      renderBarbarianOptions()
    }
    else if($('#archetype-select').val() == 'Bard'){
      renderBardOptions()
    }
    else if($('#archetype-select').val() == 'Cleric'){
      renderClericOptions()
    }
    else if($('#archetype-select').val() == 'Druid'){
      renderDruidOptions()
    }
    else if($('#archetype-select').val() == 'Fighter'){
      renderFighterOptions()
    }
    else if($('#archetype-select').val() == 'Monk'){
      renderMonkOptions()
    }
    else if($('#archetype-select').val() == 'Paladin'){
      renderPaladinOptions()
    }
    else if($('#archetype-select').val() == 'Ranger'){
      renderRangerOptions()
    }
    else if($('#archetype-select').val() == 'Rogue'){
      renderRogueOptions()
    }
    else if($('#archetype-select').val() == 'Sorcerer'){
      renderSorcererOptions()
    }
    else if($('#archetype-select').val() == 'Warlock'){
      renderWarlockOptions()
    }
    else if($('#archetype-select').val() == 'Wizard'){
      renderWizardOptions()
    }
  })

  
  //Form Submit Listener
  $('#character-submit').on('click', handleSubmit)
  
})

const languages = ['Abyssal', 'Celestial', 'Draconic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Infernal', 'Orc', 'Primordial', 'Sylvan']

const stats = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

const skills = ['Acrobatics', 'AnimalHandling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival']

//weapon arrays needed
const simpleWeapons = ['SIMPLE WEAPONS']
const simpleMelee = ['SIMPLE MELEE']
const martialWeapons = ['MARTIAL WEAPONS']
const martialMelee = ['MARTIAL MELEE']

//spell arrays needed
const bardCantrips = ['BARD CANTRIPS']
const clericCantrips = ['CLERIC CANTRIPS']
const druidCantrips = ['DRUID CANTRIPS']
const sorcererCantrips = ['SORCERER CANTRIPS']
const warlockCantrips = ['WARLOCK CANTRIPS']
const wizardCantrips = ['WIZARD CANTRIPS']
const lvl1BardSpells = ['LVL 1 BARD SPELLS']
const lvl1SorcererSpells = ['LVL 1 SORCERER SPELLS']
const lvl1WarlockSpells = ['LVL 1 WARLOCK SPELLS']
const lvl1WizardSpells = ['LVL 1 WIZARD SPELLS']

//for straight to character?
const lvl1ClericSpells = ['LVL 1 CLERIC SPELLS']
const lvl1DruidSpells = ['LVL 1 DRUID SPELLS']
//GOAL! send character info into api