var password=""
var firstName = ""
var lastName = ""
var email = ""
var query = ""
var req = ""
var result = ""


SignUp.onshow=function(){
  Image2.src="https://ormond.creighton.edu/courses/375/Groups/Group-B2/images/CreightonLogo.jpg"
  
  //time for the header
  var timeApp=(new Date())
  timeApp=String(timeApp)
  timeApp=timeApp.substring(0,10)
  lblTime2.value=timeApp
}

btnSignUp2.onclick=function(){
  
  let netID = inptNetID.value
  let firstName = iptFirstName.value
  let lastName = iptLastName.value
  let email = iptEmail.value
  let password = iptPASSWORD2.value
  
  query = "INSERT INTO user (NetId,firstname,lastname,email,pass) VALUES ('" + netID + "','" + firstName + "','" + lastName + "','" + email + "','" + password + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sar74677&pass=Aaron2020)&database=375groupa2&query="+query)
  if (req.status == 200) {
    if (req.responseText == 500) {
      result = JSON.parse(req.responseText)
      NSB.MsgBox("You have successfully added your account!")
      ChangeForm(accountOverview)
    } else 
      alert("Error: Your information wasn't able to be added.")
  } else 
      alert("There was a network error. Try again.")
}

btnClear.onclick=function(){
  iptEmail.value=""
  iptFirstName.value=""
  iptLastName.value=""
  iptPASSWORD2.value=""
  inptNetID.value=""
}

Hamburger1.onclick=function(s){
  if (typeof(s) == "object") { 
       return
    } else {
      switch(s) {
        case "Back to HomePage":
        ChangeForm(HomePage)
        break
    }
  }
}