const newFormHandler = async (event) => {
    event.preventDefault();
  
    const characterName = document.querySelector('#character-name').value.trim();
    const race = document.querySelector('#race').value.trim();
    const archetype = document.querySelector('#archetype').value.trim();
    const alignment = document.querySelector('#alignment').value.trim();
    const stat = document.querySelector('#stat').value.trim();
    const skill = document.querySelector('#skill').value.trim();
    const background = document.querySelector('#background').value.trim();
    const backstory = document.querySelector('#backstory').value.trim();
    
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