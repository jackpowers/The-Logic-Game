//home.js
$(document).ready(function () {



    loadItems();

    var money = 0.00;

    $('#addDollar').click(function (event) {

        money = money + 1.00;
        $('#moneyAdded').val(money.toFixed(2));
    });

    $('#addQuarter').click(function (event) {

        money = money + 0.25;
        $('#moneyAdded').val(money.toFixed(2));
    });

    $('#addDime').click(function (event) {

        money = money + 0.10;
        $('#moneyAdded').val(money.toFixed(2));
    });

    $('#addNickel').click(function (event) {

        money = money + 0.05;
        $('#moneyAdded').val(money.toFixed(2));
    });

    $('#makePurchase').click(function (event) {
        
           


        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080//money/' + money + '/item/' + $('#displayItem').val(),


            success: function (data, status) {




                $('#displayMessage').val("Thanks!");

               




                    var quarters = data.quarters;
                    var dimes = data.dimes;
                    var nickels = data.nickels;
                    var pennies = data.pennies;

                    $('#displayChange').val(quarters + " Q, " + dimes + " D, " + nickels + " N, " + pennies + " P");
                    money = 0;
                    loadItems();








               


            },

            error: function (xhr, status, error) {
                var message = xhr.responseJSON.message;

                $('#displayMessage').val(message);




            }


        });






    });
    
     $('#changeButton').click(function (event) {
         
         clearAll();
         loadItems();

     });
});





function loadItems() {
  $('#itemTableDiv').empty();
    var itemRows = $('#itemRows');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/items',
        success: function (data, status) {
            $.each(data, function (index, item) {
                var id = item.id;
                var name = item.name;
                var price = item.price.toFixed(2);

                var quantity = item.quantity;

                var html = '<div class="col-md-4 items">' +
                    '<div id="item' + id + '">' +
                    '<table class="table table hover">' +
                    '<tr>' +
                    '<td class="itemId">' + id + '</td>' +
                    '</tr>' +
                    '<tr class="text-center">' +
                    '<td class="itemName">' + name + '</td>' +
                    '</tr>' +
                    '<tr class="text-center">' +
                    '<td>' + '<text>' + '$' + '</text>' + price + '</td>' +
                    '</tr>' +
                    '<tr class="text-center">' +
                    '<td>' + '<text>' + 'Number Left: ' + '</text>' + quantity + '</td>' +
                    '</tr>' +
                    '</table>' +

                    '</div>' +
                    '</div>'


                $('#itemTableDiv').append(html);

                $('.items').click(function () {
                    $('#displayItem').val($(this).find('.itemId').text());
                });


            });
        },
        error: function () {
            $('#errorMessages')
                .append($('<li>')
                    .attr({
                        class: 'list-group-item list-group-item-danger'
                    })
                    .text('Error calling web service.  Please try again later.'));
        }
    });
}

function clearAll() {
    
    $('#displayMessage').val(" ");
    $('#displayItem').val(" ");
    $('#moneyAdded').val(" ");
    $('#displayChange').val(" ");
    





}
