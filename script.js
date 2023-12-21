// AOS.init();
//script for Google Sheet
var scriptURL = "https://script.google.com/macros/s/AKfycbzS0lF3hALhPMOor7WGf6MF1XeAQT01lBOmQvS2r3nSOTEzdV6eEEEEFQ081rUt3g3EDA/exec";
var form = document.forms['google-sheet'];
form.addEventListener('Send Massages', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});
//scroll to top
$("#top-button").click(
    function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    }
);