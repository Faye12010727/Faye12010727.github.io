$(function(){
  $("#submit_btn").click(function() {
  	var state = $("#state").val()
  	var day = $("#day").val()
  	var category = $("#category").val()
  	$.get(`http://127.0.0.1:5000/predict?state=${state}&day=${day}&category=${category}`, function(data, status) {
  		$("#answer").text(data)
  	})
  })
});