var description = ""
var datetime = ""
var toDoQuery = ""
var toDoRequest = ""
var toDoResult = ""

btnSubmit.onclick=function(){
  let description = inptDescription.value
  let datetime = inptDateAndTime.value
  let toDoQuery = "INSERT INTO objectives (description,dateandtime) VALUES ('" + inptDescription.value + "','" + inptDateAndTime.value + "')"
  toDoRequest = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sar74677&pass=Aaron2020)&database=375groupa2&query="+toDoQuery)

  if (toDoRequest.status == 200) {
      if (toDoRequest.responseText == 500) {
          let toDoResult = JSON.parse(toDoRequest.responseText)
          NSB.MsgBox("Thank You For Submitting Your Goal!")
          ChangeForm(confirmationPage)
      } else
        alert("There Was An Issue With Your Submission")
  } else 
    alert("Error: " + toDoRequest.status)

}


