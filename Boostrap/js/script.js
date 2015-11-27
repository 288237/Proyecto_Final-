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
});
