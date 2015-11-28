$(document).ready(function(){
  $("button").click(function(ev){
    ev.preventDefault();
    $.ajax({
      url:  "http://openlibrary.org/search.json",
      data: {q:$("input").val()},
      success: function(res){
        res=JSON.parse(res);
        console.log(res);
        $("#resultados").html(res.numFound);
        for (var i = 0; i < 5; i++) {
          var e = res.docs[i];
          var libro = $("<div class='libro'>");
          libro.html(e.title);
          libro.append("<img src='http://covers.openlibrary.org/b/olid/"+e.cover_edition_key+"-M.jpg'>")
          $("#resultados").append(libro);
        }
      }
    });
  });

  $("#prom1").click(function(){
    $("#panel1").slideToggle("slow");
    $("#subpanel1").css("background-color","#e5eecc").css("border", "solid 1px #c3c3c3");
  });

  $("#prom2").click(function(){
    $("#panel2").slideToggle("slow");
    $("#subpanel2").css("background-color","#e5eecc").css("border", "solid 1px #c3c3c3");
  });

  $("#prom3").click(function(){
    $("#panel3").slideToggle("slow");
      $("#subpanel3").css("background-color","#e5eecc").css("border", "solid 1px #c3c3c3");
  });

});
