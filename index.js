function getDogBreedImage() {

    let action_src=$("#dogBreed").val();
    let urlLink ="https://dog.ceo/api/breed/"
    let fullUrlLink= urlLink + action_src + "/images/random";

    fetch(fullUrlLink)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => {
        console.log(error);
      })
  }

function displayResults(responseJson) {
    console.log(responseJson);
    //check code range is in 200 and less 300
    if(responseJson.status == "success"){
        $('.results').replaceWith(
          `<img src=${responseJson.message} class="results">`);
        $('.results').removeClass('hidden');
    }else {
        alert(responseJson.message);
    }
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