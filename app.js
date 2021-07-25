$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
     if(event.which===13){
     	var todoText=$(this).val();     	
     	$("ul").append("<li><span><img class='fas fa-trash' src='https://img.icons8.com/ios-glyphs/30/000000/empty-trash--v1.png'/></span> " + todoText + "</li>")
     	$(this).val("");
     }
});
$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});