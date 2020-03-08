function getDogBreedImage() {

    let action_src=$("#dogBreed").val();
    let urlLink ="https://dog.ceo/api/breed/"
    let fullUrlLink= urlLink + action_src + "/images/random";

    fetch(fullUrlLink)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results').replaceWith(
      `<img src="${responseJson.message}" class="results">`
    )
    $('.results').removeClass('hidden');
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogBreedImage();
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });