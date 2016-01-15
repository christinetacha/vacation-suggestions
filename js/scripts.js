$(document).ready(function() {
    $("form#nextVacation").submit(function(event) {
      var age = parseInt($("input#age").val());
      var romAvd = $("select#romAdv").val();
      var familyFun = $("select#familyFun").val();
      var skiBeach = $("select#skiBeach").val();
      var shop = $("select#shop").val();
      var casino = $("select#casino").val();

      if (age > 40 && romAdv === "romAdv" && familyFun === "familyFun" && skiBeach === "ski" && shop === "shop" && casino === "yes") {
        $("#destination").empty().append("Lake Tahoe, California");
        // $("#result").show();
        $("#seeResult").show();
      }


        event.preventDefault();
    });
});
