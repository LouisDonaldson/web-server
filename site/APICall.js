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

var responseObj = null;
var added = false;

// api handler
function GetResponse(input_text){
  const Http = new XMLHttpRequest();
  const link = `https://api.urbandictionary.com/v0/define?term=${input_text}`;
  Http.open("GET", link);
  Http.send();

    Http.onreadystatechange = (e) => {
      if(Http.status == 200){
        var response = Http.responseText;
        console.log(response);
        try{
          responseObj = JSON.parse(response);
  
        }
        catch{
  
        }
        if(!added){
          AddDefinitionToUI(responseObj);
        }
      }
    }
}

function AddDefinitionToUI(responseObj){
  for(var i = 0; i < responseObj.list.length; i++){
    // parent = main_div
    // <div id="result_text_div">
    //      <h3 id="results_text" style="text-align: center; margin: 10px;">No results</h3>
    // </div>
    var individualDefinitionResponse = responseObj.list[i];

    var newResultsTextDiv =  document.createElement('div');
    newResultsTextDiv.id = "result_text_div";
    document.querySelector('#main_div').appendChild(newResultsTextDiv);

    var newTextDefinition = document.createElement('h3');
    newTextDefinition.id = "results_text";
    newTextDefinition.style = 'text-align: center; margin: 10px;';
    newResultsTextDiv.appendChild(newTextDefinition)

    const string = individualDefinitionResponse.definition + '\n\n' + individualDefinitionResponse.example;
    newTextDefinition.innerHTML = string;
  };
  added = true;
}