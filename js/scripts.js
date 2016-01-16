$(document).ready(function() {
    $("form#nextVacation").submit(function(event) {
      var age = parseInt($("input#age").val());
      var romanceOrAdventure = $("select#romanceOrAdventure").val();
      var familyFun = $("select#familyFun").val();
      var skiBeach = $("select#skiBeach").val();
      var shop = $("select#shop").val();
      var casino = $("select#casino").val();

      if (age > 40 && romanceOrAdventure === "romance" && familyFun === "family" && skiBeach === "ski" && shop === "shopping" && casino === "yes") {
        $("#destination").empty().append("Lake Tahoe, California");
        $("#result").show();
        $("#seeResult").show();
      } else if (age < 40 && romanceOrAdventure === "adventure" && familyFun === "nightlife" && skiBeach === "beaches" && shop === "history" && casino === "no") {
        $("#destination").empty().append("Maui, Hawaii");
        $("#result").show();
        $("#seeResult").show();
      } else if (age < 40 && romanceOrAdventure === "adventure" && familyFun === "family" && skiBeach === "beaches" && shop === "history" && casino === "no") {
        $("#destination").empty().append("Orlando, Florida");
        $("#result").show();
        $("#seeResult").show();
      }



        event.preventDefault();
    });
});
