const newFormHandler = async (event) => {
    event.preventDefault();
  
     
    
    if (characterName && race && archetype && alignment && stat && skill && background && backstory) {
      const response = await fetch(`/api/profile`, {
        method: 'GET',
        body: JSON.stringify({ characterName, race, archetype, alignment, stat, skill, background, backstory }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/character');
      } else {
        alert('Failed to create character');
      }
    }
  };

//event listeners on race and class options
function renderRaceOptions(){

}

const race = $('#race')
console.log(race)
function renderClassOptions(){

}

$(document).ready(function (){
  //event listeners on race and class options
  const archetypeSelect = $('#archetype').val()
})

//GOAL! send character info into api