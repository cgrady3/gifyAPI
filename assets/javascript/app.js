$(document).ready(function () {

    var queries = [];

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();
        console.log(this)

        // get users search query from the text box
        var query = $('#userQuery').val().trim()

        // add the search query to the queries array
        queries.push(query);
        console.log(query)

        createButtons();
    })

    function createButtons() {

        for (var i = 0; i < queries.length; i++) {
            var btn = $('<button>');

            btn.addClass('btn btn-primary btn gif').attr('value', queries[i]).text(queries[i]);
        }

        $('#userQuery').empty();
        $('.buttons').prepend(btn);
    }

    function showGIF() {
        var userQuery = $(this).attr('value')
        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=l3BQXaVrqxak9wat1iZYciOAzYiTQlI1&q=' + userQuery + '&limit=10&offset=0&rating=PG&lang=en'

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            for ( var i = 0; response.data.images.length; i++){
                var image = $('<img>').attr('src', response.data.images.url);

                $('.main').append(image);
            }
        })
    }

    $(document).on('click', '.gif', showGIF);

    createButtons();


})