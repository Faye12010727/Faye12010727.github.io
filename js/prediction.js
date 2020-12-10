$(function(){
  $("#submit_btn").click(function() {
  	var state = $("#state").val()
  	var day = $("#day").val()
  	if ($("#category").val() === 'positive cases daily increase') {
  		var category = 'positiveIncrease'
  	} else {
  		var category = 'deathIncrease'
  	}
  	
  	$.get(`http://127.0.0.1:5000/predict?state=${state}&day=${day}&category=${category}`, function(data, status) {
  		$("#answer").text(data)
  	})
  })
});