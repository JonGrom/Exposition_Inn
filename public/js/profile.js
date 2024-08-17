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

//**No racial options for half-orc or tiefling 

//ARCHETYPE OPTION FUNCTIONS

$(document).ready(function (){

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
    console.log($('#archetype-select').val())
  })

  //Form Submit Listener
  $('#character-submit').on('click', handleSubmit)
  
})

const languages = ['Abyssal', 'Celestial', 'Draconic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Infernal', 'Orc', 'Primordial', 'Sylvan']

const stats = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

const skills = ['acrobatics', 'animalHandling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight of hand', 'stealth', 'survival']

//GOAL! send character info into api