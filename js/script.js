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
        res.forEach(function(e,i){
            var libro = $("<div class='libro'>");
            libro.html(libro.title);
            libro.append("<img src=''>")
            $("#resultados").append(libro);
        });
      }
    });
  });
});
