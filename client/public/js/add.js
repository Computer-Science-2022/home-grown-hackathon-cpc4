const animalForm = document.getElementById('animal-form');
const animalId = document.getElementById('animal-id');
const animalAddress = document.getElementById('animal-address');

// Send POST to API to add store
async function addAnimal(e) {
  e.preventDefault();

  if (animalId.value === '' || animalAddress.value === '') {
    alert('Please fill in fields');
  }

  const sendBody = {
    animalId: animalId.value,
    address: animalAddress.value
  };

  try {
    const res = await fetch('/api/v1/animal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    if (res.status === 400) {
      throw Error('Animal  already tracked!');
    }

    alert('animal  added!');
    window.location.href = '/index.html';
  } catch (err) {
    alert(err);
    return;
  }
}

animalForm.addEventListener('submit', addAnimal);