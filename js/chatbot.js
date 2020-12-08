$(function(){
  $("#submit_btn").click(function() {
  	var question = $("#question").val()
  	$.get("http://127.0.0.1:5000/chatbot?question=" + question, function(data, status) {
  		$("#answer").text(data)
  	})
  })
});