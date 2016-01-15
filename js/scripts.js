$(document).ready(function() {
    $("form#starWars").submit(function(event) {
      var age = parseInt($("input#age").val());
      var romAvd = $("select#romAdv").val();
      var familyFun = $("select#familyFun").val();
      var skiBeach = $("select#skiBeach").val();
      var shop = $("select#shop").val();
      var casino = $("select#casino").val();

      // if (isNaN(age)) {
      //   $("#characterName").empty().append("Please enter your age!");
      //   $("#result").show();
      // } else if (rebel < 0) {
      //   $("#characterName").empty().append("a stuck-up, half-witted, scruffy-looking nerf-herder!!!");
      //   $("#result").show();
      // }  else if (rebel > 10) {
      //     $("#characterName").empty().append("too rebellious!!!");
      //     $("#result").show();
      // } else if (rebel > 5) {
      if (age > 40 && romAdv === "romance" && familyFun === "family" skiBeach === "ski" && shop === "shop" && casino === "yes") {
        $("#destination").empty().append("Lake Tahoe");
        $("#result").show();
      } else if (rebel > 5 && gender === "male" && ewoks === "no") {
        $("#characterName").empty().append("Finn");
        $("#result").show();
      }else if (rebel > 5 && gender === "female" && ewoks === "yes") {
        $("#characterName").empty().append("Maz Kanata");
        $("#result").show();
      } else if (rebel > 5 && gender === "female" && ewoks === "no") {
        $("#characterName").empty().append("Rey");
        $("#result").show();
      } else if (rebel <= 5 && gender === "male" && ewoks === "yes") {
        $("#characterName").empty().append("Chewbacca");
        $("#result").show();
      } else if (rebel <= 5 && gender === "male" && ewoks === "no") {
        $("#characterName").empty().append("BB-8");
        $("#result").show();
      } else if (rebel <= 5 && gender === "female" && ewoks === "yes") {
        $("#characterName").empty().append("General Leia");
        $("#result").show();
      } else if (rebel <= 5 && gender === "female" && ewoks === "no") {
        $("#characterName").empty().append("Captain Phasma");
        $("#result").show();
      }

        event.preventDefault();
    })
});
