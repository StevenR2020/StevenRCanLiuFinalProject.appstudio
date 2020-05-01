let NetID = ""
let query2 = ""
let request2 = ""
let result2 = ""

btnLogin.onclick=function(){

let passWord = ""

    NetID = iptNETID.value
    passWord = iptPASSWORD.value
    if(result2.length == 0) {
            NSB.MsgBox("Your information is not recognized")
            ChangeForm(SignUp)
            
    } else {
            let recognized = false
            for (i = 0; i <= result2.length - 1; i++)
              if (result2[i][0] == NetID && result2[i][1] == passWord) {
                  recognized = true
                  ChangeForm(accountOverview)
                }
            if (recognized == false) {
                alert("Login credentials are incorrect")
                NetID = ""
                passWord = ""
              }
            }
} 


btnSignUp.onclick=function(){
  ChangeForm(SignUp)
}

LoginPage.onshow=function(){
  imgHeader.src="https://ormond.creighton.edu/courses/375/Groups/Group-A2/Creighton_Bluejays_logo.svg.png"
     //time for the header
  var timeApp=(new Date())
  timeApp=String(timeApp)
  timeApp=timeApp.substring(0,10)
  lblTime.value=timeApp
  
  
  
  
  query2 = "SELECT NetId, pass FROM user"
  request2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sar74677&pass=Aaron2020)&database=375groupa2&query=" + query2);
    if (request2.status == 200){
        result2 = JSON.parse(request2.responseText)
       } else 
         alert("Your Login Credentials Were Invalid")
         
         
}

