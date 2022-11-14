$(function() {
    $(".toggle").on("click", function(){
  
      if($(".item").hasClass("active")){
        $(".item").removeClass("active");
      }
      else{
        $(".item").addClass("active");
  
      }
  })
  });
  
  var counter = 1;
  setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 6){
        counter = 1;
      }
  }, 5000);
