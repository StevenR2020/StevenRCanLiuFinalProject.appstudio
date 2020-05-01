btnView.onclick=function(){
  var currentQuery = "SELECT * FROM objectives"
  var currentRequest = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sar74677&pass=Aaron2020)&database=375groupa2&query="+currentQuery)
  if (currentRequest.status == 200) {
      var dataJSON = currentRequest.responseText;
      var currentArray = JSON.parse(dataJSON);
      
      var currentData = "";
      for (i = 0; i < currentArray.length; i++) {
        currentData = currentData + currentArray[i][0] + " " + currentArray[i][1] + "\n";
        
      }
      txtResults.value = currentData;
      
    } else {
      alert("There was an error.")
    }
  
}
btnCreate.onclick=function(){
  ChangeForm(inptToDo)
}


btnB2H.onclick=function(){
  ChangeForm(HomePage)
}
