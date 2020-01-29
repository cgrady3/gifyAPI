// starter buttons
var queries = ['funny cat', 'flowers', 'rainbow'];

function createButtons() {

    for (let i = 0; i < queries.length; i++) {

        var btn = $('<a>');

        btn.addClass('btn btn-primary btn gif').text(`${queries[i]}`);
        btn.attr({
            'value': `${queries[i]}`,
            'type': 'submit',
            'role': 'button',
        })
        $('.buttons').prepend(btn);
    }
}

function showGIF() {

    var userQuery = $(this).attr('value')
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=l3BQXaVrqxak9wat1iZYciOAzYiTQlI1&q=' + userQuery + '&limit=10&offset=0&rating=PG&lang=en'

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {

        console.log(response.data);

        for (let i = 0; i < response.data.length; i++) {

            var image = $('<iframe>').attr('src', response.data[i].embed_url);

            $('.main').prepend(image);
        }
    })
}

$(document).ready(function () {

    // to take in user query on hitting enter
    $('#userQuery').on('keydown', function (event) {

        console.log(event)

        if (event.keyCode === 13) {
            
            // check that the user has entered a search term
            if ($('#userQuery').val() === '') {
                alert('Please enter a valid search term')
            }
            else {
                // get users search query from the text box
                var query = $('#userQuery').val().trim()

                // add the search query to the queries array
                queries.push(query);

                // add new queries as buttons
                $('#userQuery').text('');
                var btn = $('<a>');

                btn.addClass('btn btn-primary btn gif').text(`${queries[queries.length - 1]}`);
                btn.attr({
                    'value': `${queries[queries.length - 1]}`,
                    'type': 'submit',
                    'role': 'button',
                })
                $('.buttons').prepend(btn);
            }
            console.log(queries)
        }
    })

    // to take in user query by hitting the submit button
    $('#submit-btn').on('click', function (event) {
        // prevent a button click from opening up to a new page
        event.preventDefault();
        console.log(this)

        // check that the user has entered a search term
        if ($('#userQuery').val() === '') {
            alert('Please enter a valid search term')
        }
        else {
            // get users search query from the text box
            var query = $('#userQuery').val().trim()

            // add the search query to the queries array
            queries.push(query);

            // add new queries as buttons
            $('#userQuery').text('');
            var btn = $('<a>');

            btn.addClass('btn btn-primary btn gif').text(`${queries[queries.length - 1]}`);
            btn.attr({
                'value': `${queries[queries.length - 1]}`,
                'type': 'submit',
                'role': 'button',
            })
            $('.buttons').prepend(btn);
        }
        console.log(queries)
    })

    $(document).on('click', '.gif', showGIF);

    createButtons();
})