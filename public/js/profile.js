async function handleSubmit(event) {
  event.preventDefault()
  isValid = validateInput()
  const dataObj = buildDataObj()
  // console.log(dataObj)
  // console.log(JSON.stringify(dataObj))
  if(isValid){
    const response = await fetch(`/api/character`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dataObj)
    })
    
    if (response.ok) {
      document.location.replace('/user');
    } else {
      alert('Failed to create character');
    }
  } else {
    alert("There's more to your story, traveler. Please fill out all form fields")
  }
};

//FORM VALIDATION
function validateInput(){
  let name = $('#name').val()
  let background = $('#background-name').val()
  if(!name || !background){
    return false
  } else {
    return true
  }

}


//DATA OBJECT
function buildDataObj(){
  const dataObj = {}


  //query selectors
  const name = $('#name').val()
  const alignment = $('#alignment-select').val()
  const strength = $('#strength-stat').val()
  const dexterity = $('#dexterity-stat').val()
  const constitution = $('#constitution-stat').val()
  const intelligence = $('#intelligence-stat').val()
  const wisdom = $('#wisdom-stat').val()
  const charisma = $('#charisma-stat').val()

  //Build data object
  dataObj.name = name

  //Stats
  dataObj.strength = strength
  dataObj.dexterity = dexterity
  dataObj.constitution = constitution
  dataObj.intelligence = intelligence
  dataObj.wisdom = wisdom
  dataObj.charisma = charisma

  //Race Object
  const raceObj = buildRaceObj()
  dataObj.race = raceObj

  //Archetype Object
  const archetypeObj = buildArchetypeObj()
  dataObj.archetype = archetypeObj

  //Background Object
  const backgroundObj = buildBackgroundObj()
  dataObj.background = backgroundObj
  //Misc
  dataObj.level = 1
  dataObj.alignment = alignment

return dataObj
}

//RACE OBJECT
function buildRaceObj(){
  const raceObj = {}

  //query selectors
  const race = $('#race-select').val()
  const subrace = $('#subrace-select').val()
  const raceOption = $('#race-option').val()
  const raceOption1 = $('#race-option1').val()
  const raceOption2 = $('#race-option2').val()
  const raceOption3 = $('#race-option3').val()
  const raceOption4 = $('#race-option4').val()

  subrace ? raceObj.name = subrace : raceObj.name = race

  if(raceOption){
    raceObj.option = raceOption
  } else if (raceOption1){
    let statArray = [raceOption1, raceOption2]
    let skillArray = [raceOption3, raceOption4]
    let statArrayTrue = statArray.map(function(stat) {
      if (stat == "Animal Handling") {
        return "animalHandling";
      } else if (stat == "Sleight of Hand") {
        return "sleightOfHand";
      } else {
        return stat.toLowerCase();
      }
    });
    let skillArrayTrue = skillArray.map(function(skill) {
      if (skill == "Animal Handling") {
        return "animalHandling";
      } else if (skill == "Sleight of Hand") {
        return "sleightOfHand";
      } else {
        return skill.toLowerCase();
      }
    });
    
    raceObj.option = {
      stat: statArrayTrue,
      skill: skillArrayTrue
    }
}
return raceObj
}

//ARCHETYPE OBJECT
function buildArchetypeObj(){
  const archetypeObj = {
    name: '',
    option: {
      skill: [],
      weapon: [],
      armor: [],
      tool: [],
      pack: [],
      feature: [],
      spell: []
    }
  }

  //NAME
  let name = $('#archetype-select').val()
  archetypeObj.name = name

  //SKILLS
  let skill1 = $('#skill1').val()
  let skill2 = $('#skill2').val()
  let skill3 = $('#skill3').val()
  let skill4 = $('#skill4').val()
  let skillsArray = [skill1, skill2, skill3, skill4,]
  skillsArray = skillsArray.filter((skill) => skill !== undefined)
  let skillsArrayTrue = skillsArray.map(function(skill) {
    if (skill == "Animal Handling") {
      return "animalHandling";
    } else if (skill == "Sleight of Hand") {
      return "sleightOfHand";
    } else {
      return skill.toLowerCase();
    }
  });
  archetypeObj.option.skill = skillsArrayTrue


  //WEAPONS
  //* if weapon2 = '2 handaxes' push 2 handaxes
  let weapon1 = $('#weapon1').val()
  let weapon2 = $('#weapon2').val()
  let weapon3 = $('#weapon3').val()
  if(weapon2 == '2 Handaxes'){
    let weapon4 = 'Handaxe'
    let weapon5 = 'Handaxe'
    let weaponsArray = [weapon1, weapon3, weapon4, weapon5]
    weaponsArray = weaponsArray.filter((weapon) => weapon !== undefined)
    archetypeObj.option.weapon = weaponsArray
  } else {
    let weaponsArray = [weapon1, weapon2, weapon3]
    weaponsArray = weaponsArray.filter((weapon) => weapon !== undefined)
    archetypeObj.option.weapon = weaponsArray
  }

  //ARMOR
  let armor = $('#weapon3').val()
  if(armor){
    archetypeObj.option.armor.push(armor)
  }

  //if armor2 fix cleric

  //TOOLS
  let tool1 = $('#tool1').val()
  let tool2 = $('#tool2').val()
  let tool3 = $('#tool3').val()
  let toolsArray = [tool1, tool2, tool3]
  toolsArray = toolsArray.filter((tool) => tool !== undefined)
  archetypeObj.option.tool = toolsArray
  

  //PACKS

  let pack1 = $('#pack1').val()
  let pack2 = $('#pack2').val()
  let packsArray = [pack1, pack2]
  packsArray = packsArray.filter((pack) => pack !== undefined)
  archetypeObj.option.pack = packsArray

  //FEATURES
  let feature1 = $('#feature1').val()
  let feature2 = $('#feature2').val()
  let featuresArray = [feature1, feature2]
  featuresArray = featuresArray.filter((feature) => feature !== undefined)
  archetypeObj.option.feature = featuresArray

  //SPELLS
  let spell1 = $('#spell1').val()
  let spell2 = $('#spell2').val()
  let spell3 = $('#spell3').val()
  let spell4 = $('#spell4').val()
  let spell5 = $('#spell5').val()
  let spell6 = $('#spell6').val()
  let spell7 = $('#spell6').val()
  let spell8 = $('#spell6').val()
  let spell9 = $('#spell6').val()
  let spellsArray = [spell1, spell2, spell3, spell4, spell5, spell6, spell7, spell8, spell9]
  spellsArray = spellsArray.filter((spell) => spell !== undefined)
  archetypeObj.option.spell = spellsArray

  //MISC
  //* this = Chain mail or 'Leather armor + Longbow'
  let fighterSpcl = $('#fighter-spcl').val()
  if(!fighterSpcl){

  } else if(fighterSpcl == 'Chain mail'){
    archetypeObj.option.armor.push('Chain mail')
  } else {
    archetypeObj.option.armor.push('Leather')
    archetypeObj.option.weapon.push('Longbow')
  }
  return archetypeObj
}

function buildBackgroundObj(){
  let backgroundObj = {
    name: '',
    option: [
      {
        type: '',
        option: ''
      },
      {
        type: '',
        option: ''
      }
    ]
  }
  backgroundObj.name = $('#background-name').val()
  backgroundObj.option[0].type = $('#langOrTool1').val()
  backgroundObj.option[1].type = $('#langOrTool2').val()
  backgroundObj.option[0].option = $('#misc1').val()
  backgroundObj.option[1].option = $('#misc2').val()
  return backgroundObj
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
.append($('<select class="prof" id="race-option3">'))
.append($('<label id="buff">').text('skill:'))
.append($('<select class="prof" id="race-option4">'))

$('#race-options').append(options)

renderDropdown('stat', stats)
renderDropdown('prof', skills)
}

//RENDER RACE OPTION

//BARBARIAN  .skill(2) .weapon(2) SPCL 2 handaxes option weapon 2
function renderBarbarianOptions(){
//Prficiencies
const skillProfs = ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival']

const weapon2 = ['2 Handaxes']
simpleWeapons.forEach((weapon) => weapon2.push(weapon))

const options = $('<div>')
.append($('<label id="prof">').text('skill'))
.append($('<select class="skill" id="skill1">'))
.append($('<label id="prof">').text('skill'))
.append($('<select class="skill" id="skill2">'))
.append($('<label id="weapon">').text('weapon'))
.append($('<select class="weapon1" id="weapon1">'))
.append($('<label id="weapon">').text('weapon'))
.append($('<select class="weapon2" id="weapon2">'))

$('#archetype-options').append(options)

renderDropdown('skill', skillProfs)
renderDropdown('weapon1', martialMelee)
renderDropdown('weapon2', weapon2)

}

//BARD .tool(3) .skill(3) .weapon .pack(pack and instrument) .spell(2 + 4)
function renderBardOptions(){
//arrays
//full skills array for skills
const weapon1 = ['Rapier', 'Longsword']
simpleWeapons.forEach(weapon => weapon1.push(weapon))
//musical instruments in object as "option.tool" array
//inputs
const tools = $('<div>')
.append($('<h6>').text('You can play 3 instruments'))
.append($('<input id="tool1">'))
.append($('<input id="tool2">'))
.append($('<input id="tool3">'))

//skills in as "option.skills" array 
//all skills
const profs = $('<div>')
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill1">'))
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill2">'))
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill3">'))

//option.weapon
const misc = $('<div>')
.append($('<label>').text('weapon'))
.append($('<select class="weapon" id="weapon1">'))
//option.pack
.append($('<label>').text('gear'))
.append($('<select id="pack1">')
  .append($('<option>').text("Diplomat's Pack"))
  .append($('<option>').text("Entertainer's Pack")))
//option.pack2 
.append($('<h6>').text('You own an instrument'))
.append($('<input id="pack2">'))


//spells
//cantrips
const cantripsKnown = $('<div>')
.append($('<label>').text('cantrip'))
.append($('<select class="cantrip" id="spell1">'))
.append($('<label>').text('cantrip'))
.append($('<select class="cantrip" id="spell2">'))

//1st level
const spellsKnown = $('<div>')
.append($('<label>').text('spell'))
.append($('<select class="spell" id="spell3">'))
.append($('<label>').text('spell'))
.append($('<select class="spell" id="spell4">'))
.append($('<label>').text('spell'))
.append($('<select class="spell" id="spell5">'))
.append($('<label>').text('spell'))
.append($('<select class="spell" id="spell6">'))

$('#archetype-options').append(tools).append(profs).append(misc).append(cantripsKnown).append(spellsKnown)

renderDropdown('skill', skills)
renderDropdown('weapon', weapon1)
renderDropdown('cantrip', bardCantrips)
renderDropdown('spell', lvl1BardSpells)
}

//CLERIC !! BUFFED(because if-proficient)  .skill(2) .weapon .armor .pack .spell(3)
function renderClericOptions(){
//arrays
const skillProfs = ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']

//option.skill
const profs = $('<div>')
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill1">'))
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill2">'))

//option.weapon / option.armor / option.pack
const misc = $('<div>')
.append($('<label>').text('weapon'))
.append($('<select id="weapon1">')
  .append($('<option>').text("Mace"))
  .append($('<option>').text("Warhammer")))
.append($('<label>').text('armor'))
.append($('<select id="armor">')
  .append($('<option>').text("Scale mail"))
  .append($('<option>').text("Leather")))
.append($('<label>').text('gear'))
.append($('<select id="pack1">')
  .append($('<option>').text("Priests' Pack"))
  .append($('<option>').text("Explorer's Pack")))

//option.spell 
const cantripsKnown = $('<div>')
.append($('<label>').text('cantrip'))
.append($('<select class="cantrip" id="spell1">'))
.append($('<label>').text('cantrip'))
.append($('<select class="cantrip" id="spell2">'))
.append($('<label>').text('cantrip'))
.append($('<select class="cantrip" id="spell3">'))


$('#archetype-options').append(profs).append(misc).append(cantripsKnown)

renderDropdown('skill', skillProfs)
renderDropdown('cantrip', clericCantrips)
}

//DRUID .skill(2) .
function renderDruidOptions(){

//arrays choose 2
const skillProfs = ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']
const weapon1 = ['Wooden shield']
simpleWeapons.forEach(weapon => weapon1.push(weapon))
const weapon2 = ['Scimitar']
simpleMelee.forEach(weapon => weapon2.push(weapon))

const profs = $('<div>')
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill1">'))
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill2">'))

const misc = $('<div>')
  .append($('<label>').text('weapon'))
  .append($('<select class="weapon1" id="weapon1">'))
  .append($('<label>').text('weapon'))
  .append($('<select class="weapon2" id="weapon2">'))

const cantripsKnown = $('<div>')
  .append($('<label>').text('cantrip'))
  .append($('<select class="cantrip" id="spell1">'))
  .append($('<label>').text('cantrip'))
  .append($('<select class="cantrip" id="spell2">'))

$('#archetype-options').append(profs).append(misc).append(cantripsKnown)

renderDropdown('skill', skillProfs)
renderDropdown('weapon1', weapon1)
renderDropdown('weapon2', weapon2)
renderDropdown('cantrip', druidCantrips)
}

//FIGHTER 
function renderFighterOptions(){
//arrays
const skillProfs = ['Acrobatics', 'Animal handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival']
const weapon1 = ['shield']
martialWeapons.forEach(weapon => weapon1.push(weapon))
const features = ['Archery', 'Defense', 'Dueling', 'Great Weapon Fighting', 'Protection', 'Two-Weapon Fighting']

const profs = $('<div>')
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill1">'))
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill2">'))

const gear = $('<div>')
  .append($('<label>').text('armor'))
  .append($('<select id="fighter-spcl">')
    .append($('<option>').text("Chain mail"))
    .append($('<option>').text("Leather armor + Longbow")))
  .append($('<label>').text('weapon'))
  .append($('<select class="weapon1" id="weapon1">'))
  .append($('<label>').text('weapon'))
  .append($('<select class="weapon3" id="weapon3">'))

const more = $('<div>')
  .append($('<label>').text('weapon'))
  .append($('<select id="weapon2">')
    .append($('<option>').text("light crossbow"))
    .append($('<option>').text("2 handaxes")))
  .append($('<label>').text('gear'))
  .append($('<select id="pack1">')
    .append($('<option>').text("Dungeneer's Pack"))
    .append($('<option>').text("Explorer's Pack")))
  .append($('<label>').text('fighting style'))
  .append($('<select class="feature" id="feature1">'))
  

$('#archetype-options').append(profs).append(gear).append(more)

renderDropdown('skill', skillProfs)
renderDropdown('weapon1', weapon1)
renderDropdown('weapon3', martialWeapons)
renderDropdown('feature', features)
}

//MONK
function renderMonkOptions(){
//arrays
const skillProfs = ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth']
const weapon1 = ['Shortsword']
simpleWeapons.forEach(weapon => weapon1.push(weapon))

const profs = $('<div>')
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill1">'))
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill2">'))

const misc = $('<div>')
.append($('<label>').text('weapon'))
.append($('<select class="weapon" id="weapon1">'))
.append($('<label>').text('gear'))
.append($('<select id="pack1">')
  .append($('<option>').text("Dungeneer's Pack"))
  .append($('<option>').text("Explorer's Pack")))

$('#archetype-options').append(profs).append(misc)

renderDropdown('skill', skillProfs)
renderDropdown('weapon', weapon1)
}

//PALADIN
function renderPaladinOptions(){
//arrays
const skillProfs = ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']
const weapon1 = ['shield']
martialWeapons.forEach(weapon => weapon1.push(weapon))
const weapon3 = ['Javelin']
simpleMelee.forEach(weapon => weapon3.push(weapon))

const profs = $('<div>')
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill1">'))
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill2">'))

const gear = $('<div>')
.append($('<label>').text('weapon'))
.append($('<select class="weapon1" id="weapon1">'))
.append($('<label>').text('weapon'))
.append($('<select class="weapon2" id="weapon2">'))
.append($('<label>').text('weapon'))
.append($('<select class="weapon3" id="weapon3">'))
.append($('<label>').text('gear'))
.append($('<select id="pack1">')
  .append($('<option>').text("Preist's Pack"))
  .append($('<option>').text("Explorer's Pack")))


$('#archetype-options').append(profs).append(gear)

renderDropdown('skill', skillProfs)
renderDropdown('weapon1', weapon1)
renderDropdown('weapon2', martialWeapons)
renderDropdown('weapon3', weapon3)
}

//RANGER
function renderRangerOptions(){
//arrays
//CHOOSE 3 OF STATS!!
const skillProfs = ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']

const feature1 = ['aberrations', 'beasts', 'celestials', 'constructs', 'dragons', 'elementals', 'fey', 'fiends', 'giants', 'monstrosities', 'oozes', 'plants', 'undead']

const feature2 = ['arctic', 'coast', 'desert', 'forest', 'grassland', 'mountain', 'swamp', 'underdark']

const profs = $('<div>')
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill1">'))
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill2">'))
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill3">'))

const misc = $('<div>')
.append($('<label>').text('weapon'))
.append($('<select id="weapon2">')
  .append($('<option>').text("2 Shortswords"))
  .append($('<option>').text("2 simple melee weapons")))
.append($('<label>').text('armor'))
.append($('<select id="armor">')
  .append($('<option>').text("Scale mail"))
  .append($('<option>').text("Leather")))
.append($('<label>').text('gear'))
.append($('<select id="pack1">')
  .append($('<option>').text("Dungeneer's Pack"))
  .append($('<option>').text("Explorer's Pack")))

const feature = $('<div>')
  .append($('<label>').text('Favored Enemy'))
  .append($('<select class="feature1" id="feature1">'))
    .append($('<label>').text('Natural Explorer'))
    .append($('<select class="feature2" id="feature2">'))
//!!! SPECIAL!!! 2 shortswords or 2 simple melee weapons

$('#archetype-options').append(profs).append(misc).append(feature)

renderDropdown('skill', skillProfs)
renderDropdown('feature1', feature1)
renderDropdown('feature2', feature2)
}

//ROGUE
function renderRogueOptions(){
//.weapon, .pack, .feature

//arrays
//CHOOSE 4!!!
const skillProfs = ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand']

const profs = $('<div>')
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill1">'))
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill2">'))
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill3">'))
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill4">'))

const misc = $('<div>')
  .append($('<label>').text('weapon'))
  .append($('<select id="weapon1">')
    .append($('<option>').text("Rapier"))
    .append($('<option>').text("Shortsword")))
  .append($('<label>').text('weapon'))
  .append($('<select id="weapon2">')
    .append($('<option>').text("Shortbow"))
    .append($('<option>').text("Shortsword")))
  .append($('<label>').text('gear'))
  .append($('<select id="pack1">')
  .append($('<option>').text("Burglar's Pack"))
  .append($('<option>').text("Dungeneer's Pack"))
    .append($('<option>').text("Explorer's Pack")))
//NON CANNON. NEED TO CHOOSE OF PROFICIENCIES
const feature = $('<div>')
.append($('<label>').text('expertise'))
.append($('<select class="feature" id="feature1">'))
.append($('<label>').text('expertise'))
.append($('<select class="feature" id="feature2">'))

$('#archetype-options').append(profs).append(misc).append(feature)

renderDropdown('skill', skillProfs)
renderDropdown('feature', skills)

renderDropdown('')
    //^ will need to make only those proficient
}

//SORCERER
function renderSorcererOptions(){
  //arrays
  const skillProfs = ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuastion', 'Religion']

  const weapon1 = ['Light crossbow']
  simpleWeapons.forEach(weapon => weapon1.push(weapon))

  const profs = $('<div>')
    .append($('<label>').text('skill'))
    .append($('<select class="skill" id="skill1">'))
    .append($('<label>').text('skill'))
    .append($('<select class="skill" id="skill2">'))
    .append($('<label>').text('gear'))
    .append($('<select id="pack1">')
        .append($('<option>').text("Component Pouch"))
        .append($('<option>').text("Arcane Focus")))
    .append($('<label>').text('gear'))
    .append($('<select id="pack2">')
        .append($('<option>').text("Dungeneer's Pack"))
        .append($('<option>').text("Explorer's Pack")))
    
  const cantripsKnown = $('<div>')
    .append($('<label>').text('cantrip'))
    .append($('<select class="cantrip" id="spell1">'))
    .append($('<label>').text('cantrip'))
    .append($('<select class="cantrip" id="spell2">'))
    .append($('<label>').text('cantrip'))
    .append($('<select class="cantrip" id="spell3">'))
    .append($('<label>').text('cantrip'))
    .append($('<select class="cantrip" id="spell4">'))
    
  const feature = $('<div>')
    .append($('<label>').text('spell'))
    .append($('<select class="spell" id="spell5">'))
    .append($('<label>').text('spell'))
    .append($('<select class="spell" id="spell6">'))
    .append($('<label>').text('Sorcerous Origin'))
    .append($('<select class="feature" id="feature1">')
      .append($('<option>').text("Draconic Bloodline"))
      .append($('<option>').text("Wild Magic")))
    
    //if Draconic Bloodline!!!
        //dropdown of ancestors steal from dragonborn

  $('#archetype-options').append(profs).append(cantripsKnown).append(feature)

  renderDropdown('skill', skillProfs)
  renderDropdown('weapon', weapon1)
  renderDropdown('cantrip', sorcererCantrips)
  renderDropdown('spell', lvl1SorcererSpells)
}

//WARLOCK . skill .weapon .pack .spell .feature
function renderWarlockOptions(){
//arrays 
const skillProfs = ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']

const weapon1 = ['Light crossbow']
simpleWeapons.forEach(weapon => weapon1.push(weapon))

const feature = ['The Archfey', 'The Fiend', 'The Great Old One']

const profs = $('<div>')
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill1">'))
  .append($('<label>').text('skill'))
  .append($('<select class="skill" id="skill2">'))
  .append($('<label>').text('weapon'))
  .append($('<select class="weapon1" id="weapon1">'))
  .append($('<label>').text('weapon'))
  .append($('<select class="weapon2" id="weapon2">'))

const misc = $('<div>')
  .append($('<label>').text('gear'))
  .append($('<select id="pack1">')
    .append($('<option>').text("Component Pouch"))
    .append($('<option>').text("Arcane Focus")))
  .append($('<label>').text('gear'))
  .append($('<select id="pack2">')
    .append($('<option>').text("Scholar's Pack"))
    .append($('<option>').text("Dungeneer's Pack")))
  .append($('<label>').text('Otherwordly Patron'))
  .append($('<select class="feature" id="feature1">'))

const spells = $('<div>')
  .append($('<label>').text('cantrip'))
  .append($('<select class="cantrip" id="spell1">'))
  .append($('<label>').text('cantrip'))
  .append($('<select class="cantrip" id="spell2">'))
  .append($('<label>').text('spell'))
  .append($('<select class="spell" id="spell3">'))
  .append($('<label>').text('spell'))
  .append($('<select class="spell" id="spell4">'))

//EXPAND SPELL LIST BASED ON PATRON?? NOT CANNON

$('#archetype-options').append(profs).append(misc).append(spells)

renderDropdown('skill', skillProfs)
renderDropdown('weapon1', weapon1)
renderDropdown('weapon2', simpleWeapons)
renderDropdown('feature', feature)
renderDropdown('cantrip', warlockCantrips)
renderDropdown('spell', lvl1WarlockSpells)

}

//WIZARD
function renderWizardOptions(){
//arrays
const skillProfs = ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion']

const profs = $('<div>')
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill1">'))
.append($('<label>').text('skill'))
.append($('<select class="skill" id="skill2">'))
.append($('<label>').text('weapon'))
  .append($('<select id="weapon1">')
    .append($('<option>').text("Quaterstaff"))
    .append($('<option>').text("Dagger")))

const misc = $('<div>')
  .append($('<label>').text('gear'))
  .append($('<select id="pack1">')
    .append($('<option>').text("Component Pouch"))
    .append($('<option>').text("Arcane Focus")))
  .append($('<label>').text('gear'))
  .append($('<select id="pack2">')
    .append($('<option>').text("Scholar's Pack"))
    .append($('<option>').text("Explorer's Pack")))

const cantripsKnown = $('<div>')
    .append($('<label>').text('cantrip'))
    .append($('<select class="cantrip" id="spell1">'))
    .append($('<label>').text('cantrip'))
    .append($('<select class="cantrip" id="spell2">'))
    .append($('<label>').text('cantrip'))
    .append($('<select class="cantrip" id="spell3">'))

const spellsKnown1 = $('<div>')
    .append($('<label>').text('spell'))
    .append($('<select class="spell" id="spell4">'))
    .append($('<label>').text('spell'))
    .append($('<select class="spell" id="spell5">'))
    .append($('<label>').text('spell'))
    .append($('<select class="spell" id="spell6">'))

const spellsKnown2 = $('<div>')
    .append($('<label>').text('spell'))
    .append($('<select class="spell" id="spell7">'))
    .append($('<label>').text('spell'))
    .append($('<select class="spell" id="spell8">'))
    .append($('<label>').text('spell'))
    .append($('<select class="spell" id="spell9">'))

$('#archetype-options').append(profs).append(misc).append(cantripsKnown).append(spellsKnown1).append(spellsKnown2)

renderDropdown('skill', skillProfs)
renderDropdown('cantrip', wizardCantrips)
renderDropdown('spell', lvl1WizardSpells)
}

//**No racial options for half-orc or tiefling 

//ARCHETYPE OPTION FUNCTIONS

$(document).ready(function (){
//render default options
renderDwarfOptions()
renderBarbarianOptions()
renderDropdown('background-skill', skills)
renderDropdown('misc1', languages)
renderDropdown('misc2', languages)

//event listeners on race and class options
//Race
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

//Class
$('#archetype-select').on('change', function(event){
  event.preventDefault()
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

  let roll = chance.d6()
  console.log(roll)
  console.log('whatthe')
})

//Background
// console.log(('#langOrTool1').val())
$('#langOrTool1').on('change', function(event){
  event.preventDefault()
  $("#misc1").html("")
  if ($('#langOrTool1').val() == 'Language'){
    renderDropdown('misc1', languages)
  } else if($('#langOrTool1').val() == 'Tools'){
    renderDropdown('misc1', tools)
  }
})
$('#langOrTool2').on('change', function(event){
  event.preventDefault()
  $("#misc2").html("")
  if ($('#langOrTool2').val() == 'Language'){
    renderDropdown('misc2', languages)
  } else if($('#langOrTool2').val() == 'Tools'){
    renderDropdown('misc2', tools)
  }
})

//Form Submit Listener
$('#character-submit').on('click', handleSubmit)

})


//ARRAYS 
const languages = ['Abyssal', 'Celestial', 'Draconic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Infernal', 'Orc', 'Primordial', 'Sylvan']

const tools = ["Artisan's Tools", 'Disguise Kit', 'Forgery Kit', 'Gaming Set', 'Herbalism Kit', "Navigator's Tools", "Poisoner's Kit", "Thieve's Tools"]

const stats = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

const skills = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival']

//weapon arrays
const simpleWeapons = ["Club", "Dagger", "Greatclub", "Handaxe", "Light hammer", "Javelin", "Quarterstaff", "Mace", "Spear", "Light crossbow", "Sickle", "Shortbow", "Sling", "Dart"];

const simpleMelee = ["Club", "Dagger", "Greatclub", "Handaxe", "Light hammer", "Javelin", "Quarterstaff", "Mace", "Spear", "Sickle"];

const rangedWeapons = ["Light crossbow", "Shortbow", "Sling", "Dart", "Blowgun", "Hand crossbow", "Heavy crossbow", "Longbow"];

const simpleRanged = ["Light crossbow", "Shortbow", "Sling", "Dart"];

const martialRanged = ["Blowgun", "Hand crossbow", "Heavy crossbow", "Longbow"];

const martialWeapons = ["Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War pick", "Warhammer", "Whip", "Blowgun", "Hand crossbow", "Heavy crossbow", "Longbow"];

const martialMelee = ["Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War pick", "Warhammer", "Whip"]

//spell arrays
//cantrips
const bardCantrips = ['Friends', 'Mending', 'Blade Ward', 'Dancing Lights', 'Light', 'Mage Hand', 'Message', 'Minor Illusion', 'Prestidigitation', 'True Strike', 'Vicious Mockery', 'Thunderclap'];


const clericCantrips = ['Mending', 'Guidance', 'Light', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'];

const druidCantrips = ['Mending', 'Poison Spray', 'Druidcraft', 'Guidance', 'Produce Flame', 'Resistance', 'Shillelagh', 'Thorn Whip', 'Frostbite', 'Thunderclap', 'Gust', 'Magic Stone', 'Control Flames', 'Mold Earth', 'Create Bonfire', 'Shape Water'];

const sorcererCantrips = ['Acid Splash', 'Friends', 'Mending', 'Poison Spray', 'Blade Ward', 'Chill Touch', 'Dancing Lights', 'Fire Bolt', 'Light', 'Mage Hand', 'Message', 'Minor Illusion', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp', 'True Strike', 'Frostbite', 'Thunderclap', 'Gust', 'Control Flames', 'Mold Earth', 'Create Bonfire', 'Shape Water'];

const warlockCantrips = ['Friends', 'Poison Spray', 'Blade Ward', 'Chill Touch', 'Eldritch Blast', 'Mage Hand', 'Minor Illusion', 'Prestidigitation', 'True Strike', 'Frostbite', 'Thunderclap', 'Magic Stone', 'Create Bonfire'];

const wizardCantrips = ['Acid Splash', 'Friends', 'Mending', 'Poison Spray', 'Blade Ward', 'Chill Touch', 'Dancing Lights', 'Fire Bolt', 'Light', 'Mage Hand', 'Message', 'Minor Illusion', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp', 'True Strike', 'Frostbite', 'Thunderclap', 'Gust', 'Control Flames', 'Mold Earth', 'Create Bonfire', 'Shape Water'];

const lvl1BardSpells = ['Comprehend Languages', 'Disguise Self', 'Faerie Fire', 'Healing Word', 'Illusory Script', 'Silent Image', 'Thunderwave', 'Bane', 'Animal Friendship', 'Charm Person', 'Cure Wounds', 'Detect Magic', 'Dissonant Whispers', 'Feather Fall', 'Heroism', 'Identify', 'Longstrider', 'Sleep', 'Speak with Animals', 'Unseen Servant', 'Hideous Laughter', 'Earth Tremor']

const lvl1SorcererSpells = ['Burning Hands', 'Comprehend Languages', 'Disguise Self', 'Mage Armor', 'Silent Image', 'Thunderwave', 'Charm Person', 'Chromatic Orb', 'Color Spray', 'Detect Magic', 'Expeditious Retreat', 'False Life', 'Feather Fall', 'Fog Cloud', 'Jump', 'Magic Missile', 'Ray of Sickness', 'Shield', 'Sleep', 'Witch Bolt', 'Catapult', 'Ice Knife', 'Earth Tremor'];

const lvl1WarlockSpells = ['Comprehend Languages', 'Illusory Script', 'Protection from Evil and Good', 'Charm Person', 'Expeditious Retreat', 'Hellish Rebuke', 'Hex', 'Unseen Servant', 'Witch Bolt'];

const lvl1WizardSpells = ['Burning Hands', 'Comprehend Languages', 'Disguise Self', 'Illusory Script', 'Mage Armor', 'Protection from Evil and Good', 'Silent Image', 'Thunderwave', 'Alarm', 'Charm Person', 'Chromatic Orb', 'Color Spray', 'Detect Magic', 'Expeditious Retreat', 'False Life', 'Feather Fall', 'Find Familiar', 'Fog Cloud', 'Grease', 'Identify', 'Jump', 'Longstrider', 'Magic Missile', 'Ray of Sickness', 'Shield', 'Sleep', 'Unseen Servant', 'Witch Bolt', 'Absorb Elements', 'Catapult', 'Ice Knife', 'Hideous Laughter', 'Floating Disk', 'Earth Tremor'];

//for straight to character?
const lvl1ClericSpells = ['Disguise Self', 'Healing Word', 'Protection from Evil and Good', 'Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Inflict Wounds', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'];

const lvl1DruidSpells = ['Faerie Fire', 'Healing Word', 'Thunderwave', 'Animal Friendship', 'Charm Person', 'Create or Destroy Water', 'Cure Wounds', 'Detect Magic', 'Detect Poison and Disease', 'Entangle', 'Fog Cloud', 'Goodberry', 'Jump', 'Longstrider', 'Purify Food and Drink', 'Speak with Animals', 'Absorb Elements', 'Beast Bond', 'Ice Knife', 'Earth Tremor'];

//GOAL! 🏁🏁🏁send character info into api🏁🏁🏁