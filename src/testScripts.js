const postPetUrl = 'https://petstore.swagger.io/v2/pet'

const messageTemplate = `<p class="CLASS_WILL_GO_HERE">MESSAGE_WILL_GO_HERE</p>`;

idPlusOne = 0
// function to retrieve special tool pet which is storing our own id series.
function retrieveId(){
  const idUrl = postPetUrl + '/12345678901'
  fetch(idUrl, {
    headers:{'Content-Type':'application/json'},
    method:'GET',
  })
    .then((response)=>response.json())
    .then((data)=>{
      idPlusOne = data.tags[0].id + 1;
      fetch(postPetUrl,{
        headers: { 'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
          "id": 12345678901,
          "tags": [
            {
              "id": idPlusOne
            }
          ]
        })
      })
    })
}



function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('nameInput').value;
  let message = '';
  let isSuccess = true;
  if(name === ''){
    message = 'The name is required!';
    message = false;
    return;
  }
  retrieveId();
  fetch(postPetUrl, {
    headers: { 'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({
      "id": idPlusOne,
      "name": name,
      "status": 'team2'
    })
  }).then((response) => response.json())
    .then((createdPet) => {
      message = `Pet has been created with id: ${createdPet.id}!`;
      isSuccess = true;
    }).catch((e) => {
    message = 'Something went wrong! Could not add the pet.';
    message = false;
    console.error(e);
  }).finally(() => {
    let messageHTML = messageTemplate;
    messageHTML = messageHTML.replace('MESSAGE_WILL_GO_HERE', message);
    messageHTML = messageHTML.replace('CLASS_WILL_GO_HERE', `message ${isSuccess ? 'success' : 'error'}`);

    document.getElementById('messageBox').innerHTML = messageHTML;
  });
}

function getPetById () {
  const id = document.getElementById('idInput').value;

  getUrl = postPetUrl + '/' + id;
  console.log(getUrl);
  fetch(getUrl,{
    headers: { 'Content-Type': 'application/json'}
  })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
    })

}



document.getElementById('addNewPetForm').addEventListener('submit', handleSubmit, true);

// function test(){
//     retrieveId();
//     console.log(idPlusOne);
// }
