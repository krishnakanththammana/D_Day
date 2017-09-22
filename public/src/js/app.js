$('#selectDate').dateDropper();



function dateSelected() {
  console.log("on change");
  var dryDays = ["09/28/2017"];
  var date = $("#selectDate").val();
  if(dryDays.indexOf(date) != -1) {
    $('#result').text("Its a dry day");
  } else {
    $('#result').text("Its NOTTTTTTTT a dry day");
  }
}