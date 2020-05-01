let requestURL = "https://holidayapi.com/v1/holidays?key=f7c3fa3b-37ff-4981-a36a-8c41bae110b2&year=2019&country=US"
/*
1. Get today's date
2. Change today's date year to 2019
3. Put today's date in a format "YYYY-MM-DD"
4. Do a for loop
    a. apiData.holidays[0].date
    
    b. If <= then that's the holiday I want. Get holiday name, date and value of i
    Then break out of the loop

var year = new Date();
d.setFullYear(2019, 04, 29);
document.getElementById("demo").innerHTML = d;

function onXHRLoad() {
      let message = ""
      let apiData = JSON.parse(this.responseText)
      
      for (i = 0; i <= apiData.holidays.date; i++) {
      
        message = message + apiData.holidays[0].name.date
    
      lblHolidays.value = message
}

function callAPI(URL) {
  var xhttp = new XMLHttpRequest();  
  var onXHRLoad = ""
      xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
      
      //API request
      xhttp.addEventListener('load', onXHRLoad)
      xhttp.send() 
}
*/
HomePage.onshow=function(){
  imgHeader3.src="https://ormond.creighton.edu/courses/375/Groups/Group-A2/Creighton_Bluejays_logo.svg.png"
  
/*  
  lblHolidays.style.height = "100px"
  callAPI(requestURL)
*/
  //time for the header
  var timeApp=(new Date())
  timeApp=String(timeApp)
  timeApp=timeApp.substring(0,10)
  lblTime3.value=timeApp
  
}

btnLogin3.onclick=function(){
  ChangeForm(LoginPage)
}


btnSignup3.onclick=function(){
  ChangeForm(SignUp)
}



//https://ormond.creighton.edu/courses/375/Groups/Group-B2/images/CreightonLogo.jpg