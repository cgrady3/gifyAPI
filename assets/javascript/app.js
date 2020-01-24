
$('#submit-btn').on('click', function (event) {
    event.preventDefault();
    console.log(this)
    // get users search query from the text box
    var query = $('#userQuery').val().trim()

    // add the search query to the queries array
    //queries.push(query);
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=l3BQXaVrqxak9wat1iZYciOAzYiTQlI1&q=' + query + '&limit=10&offset=0&rating=PG&lang=en'
    //createButtons();
})

