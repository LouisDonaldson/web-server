const submit_button = document.querySelector('#submit_btn_div');
const definition_text = document.querySelector('#results_text');

// submit button clicked
submit_button.addEventListener('click', function(){
  var input_text = document.querySelector('#input').value;
  if(input_text != "")
  {
    GetResponse(input_text)
  }
})
const link = `https://api.urbandictionary.com/v0/define?term=${input_text}`;


// api handler
function GetResponse(input_text){
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      //definition_text.innerHtml = this.responseText;
      console.log(this.responseText);
    }
  });
  const link = `https://api.urbandictionary.com/v0/define?term=${input_text}`;
  xhr.open("GET", link);
  //xhr.setRequestHeader("x-rapidapi-host", "mashape-community-urban-dictionary.p.rapidapi.com");
  //xhr.setRequestHeader("x-rapidapi-key", "53ce3638a9mshb0c4fe33d0cfca9p1100ffjsnf7abe9c081b3");
  
  xhr.send(data);

}