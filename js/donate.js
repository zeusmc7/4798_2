function payHandler() {
      var serverNumber = $( "#serverNumber option:selected" ).text();
      var characterName = $(".characterName").val();
      var paySum = parseInt($(".paySum").val()) || 0;
      var donateSum = getDonateByPay(paySum);

      $(".serverNumberStr").text(serverNumber);
      $(".characterNameResult").text(characterName);
      $(".paySumResult").text(paySum + " RUB");
      $(".donateSumResult").text(donateSum + " Infinity Coins");

}

function payResultHandler() {
      $(".btndonate1").off("click");
      var characterName = $(".characterName").val();
      var paySum = parseInt($(".paySum").val());
      var donateSum = getDonateByPay(paySum);

      //var reg = /^([A-Z][a-z]{1,19}) ([A-Z][a-z]{1,19})$/;
	//if (!reg.test(characterName)) return alertify.error(`Имя ${characterName} некорректно!`);
      if (paySum < 20) return alertify.error(`Пополнить можно минимум на 20 руб!`);

      $.ajax({
            type: 'POST',
            url: 'https://infinitymta.ru/php/payment.php',
            async: true,
            data: {"action": "donate", "characterName": characterName, "paySum": paySum, "donateSum": donateSum},
            success: function(data) {
                  //alert(data);
                  window.location.replace(data);
            }
        });
      return false;
}

function payStartkit1Handler() {
      var serverNumberWindow = $( "#serverNumberWindow1 option:selected" ).text();
      var characterName1 = $("#characterNameWindow1").val();
      var donateSum = 750;
      var buyitem = $("#startkits1").text();

      $(".serverNumberWindowStr1").text(serverNumberWindow);
      $(".paySumResult1").text(donateSum);
      $(".characterNameResult1").text(characterName1);
      $(".product1").text(buyitem);

}

function payStartkit1ResultHandler() {
      $(".btnstartkit1").off("click");
      var serverNumberWindow = $( ".serverNumberWindowStr1" ).text();
      var characterName = $(".characterNameResult1").text();
      var donateSum = 400;
      var buyitem = 385458;

      //var reg = /^([A-Z][a-z]{1,19}) ([A-Z][a-z]{1,19})$/;
	//if (!reg.test(characterName)) return alertify.error(`Имя ${characterName} некорректно!`);
                 //if (paySum < 20) return alertify.error(`Пополнить можно минимум на 20 руб!`);

      $.ajax({
            type: 'POST',
            url: 'https://infinitymta.ru/php/paymentkit.php',
            async: true,
            data: {"action": "donate", "characterName": characterName, "donateSum": donateSum, "buyitem": buyitem},
            success: function(data) {
                  //alert(data);
                  window.location.replace(data);
            }
        });
      return false;
}

function payStartkit2Handler() {
      var serverNumberWindow = $( "#serverNumberWindow2 option:selected" ).text();
      var characterName1 = $("#characterNameWindow2").val();
      var donateSum = 750;
      var buyitem = $("#startkits2").text();

      $(".serverNumberWindowStr2").text(serverNumberWindow);
      $(".paySumResult2").text(donateSum);
      $(".characterNameResult2").text(characterName1);
      $(".product2").text(buyitem);

}

function payStartkit2ResultHandler() {
      $(".btnstartkit1").off("click");
      var serverNumberWindow = $( ".serverNumberWindowStr2" ).text();
      var characterName = $(".characterNameResult2").text();
      var donateSum = 750;
      var buyitem = 385458;

      //var reg = /^([A-Z][a-z]{1,19}) ([A-Z][a-z]{1,19})$/;
	//if (!reg.test(characterName)) return alertify.error(`Имя ${characterName} некорректно!`);
                 //if (paySum < 20) return alertify.error(`Пополнить можно минимум на 20 руб!`);

      $.ajax({
            type: 'POST',
            url: 'https://infinitymta.ru/php/paymentkit.php',
            async: true,
            data: {"action": "donate", "characterName": characterName, "donateSum": donateSum, "buyitem": buyitem},
            success: function(data) {
                  //alert(data);
                  window.location.replace(data);
            }
        });
      return false;
}
function payStartkit3Handler() {
      var serverNumberWindow = $( "#serverNumberWindow3 option:selected" ).text();
      var characterName1 = $("#characterNameWindow3").val();
      var donateSum = 1400;
      var buyitem = $("#startkits3").text();

      $(".serverNumberWindowStr3").text(serverNumberWindow);
      $(".paySumResult3").text(donateSum);
      $(".characterNameResult3").text(characterName1);
      $(".product3").text(buyitem);

}

function payStartkit3ResultHandler() {
      $(".btnstartkit1").off("click");
      var serverNumberWindow = $( ".serverNumberWindowStr3" ).text();
      var characterName = $(".characterNameResult3").text();
      var donateSum = 1400;
      var buyitem = 385458;
      //var reg = /^([A-Z][a-z]{1,19}) ([A-Z][a-z]{1,19})$/;
	//if (!reg.test(characterName)) return alertify.error(`Имя ${characterName} некорректно!`);
                 //if (paySum < 20) return alertify.error(`Пополнить можно минимум на 20 руб!`);

      $.ajax({
            type: 'POST',
            url: 'https://infinitymta.ru/php/paymentkit.php',
            async: true,
            data: {"action": "donate", "characterName": characterName, "donateSum": donateSum, "buyitem": buyitem},
            success: function(data) {
                  //alert(data);
                  window.location.replace(data);
            }
        });
      return false;
}

function payStartkit4Handler() {
      var serverNumberWindow = $( "#serverNumberWindow4 option:selected" ).text();
      var characterName1 = $("#characterNameWindow4").val();
      var donateSum = 1;
      var buyitem = $("#car1").text();

      $(".serverNumberWindowStr4").text(serverNumberWindow);
      $(".characterNameResult4").text(characterName1);
      $(".product4").text(buyitem);

}

function payStartkit4ResultHandler() {
      $(".btnstartkit1").off("click");
      var serverNumberWindow = $( ".serverNumberWindowStr4" ).text();
      var characterName = $(".characterNameResult4").text();
      var donateSum = 1;
      var buyitem = 382578;
      

      //var reg = /^([A-Z][a-z]{1,19}) ([A-Z][a-z]{1,19})$/;
	//if (!reg.test(characterName)) return alertify.error(`Имя ${characterName} некорректно!`);
                 //if (paySum < 20) return alertify.error(`Пополнить можно минимум на 20 руб!`);

      $.ajax({
            type: 'POST',
            url: 'https://infinitymta.ru/php/paymentcar.php',
            async: true,
            data: {"action": "donate", "characterName": characterName, "donateSum": donateSum, "buyitem": buyitem},
            success: function(data) {
                  //alert(data);
                  window.location.replace(data);
            }
        });
      return false;
}

function getDonateByPay(paySum) {
      paySum = parseInt(paySum);
      if (isNaN(paySum)) return 0;

      var values = [[9000, 1.50], [5000, 1.3], [3000, 1.25], [1000, 1.2], [500, 1.15], [250, 1.1], [100, 1.05]];
      for (var i = 0; i < values.length; i++) {
            if (paySum > values[i][0]) {
                  paySum *= values[i][1];
                  break;
            }
      }

      return parseInt(paySum);
}
