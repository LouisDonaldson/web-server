var advice = "";
const adviceBox = document.querySelector('#advice_text');

const advice_button = document.querySelector('#advice_button');
advice_button.addEventListener('click', function(){
    GetAdvice();
})




function GetAdvice(){
    const Http = new XMLHttpRequest();
    const url='https://api.adviceslip.com/advice';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      var response = Http.responseText;
      const obj = JSON.parse(response);
      advice = obj.slip.advice;
      adviceBox.innerHTML = advice;
    }

}