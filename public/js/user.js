const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const race = document.querySelector('#race').value.trim();
  const archetype = document.querySelector('#archetype').value.trim();

  if (name && race && archetype) {
    const response = await fetch(`/api/character`, {
      method: 'GET',
      body: JSON.stringify({ name, race, archetype }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      res.render('/character');
    } else {
      alert('Failed to create character');
    }
  }
};