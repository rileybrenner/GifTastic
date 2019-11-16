$(document).ready(function() {
    // Declaring Initial Array of Topics which is a list of Hobbies
    var topics = ["surfing", "spearfishing", "hiking", "skateboarding", "painting"];

    /// List of all functions below

    //Function to display info on the topics by calling an API and retrieving the info 
    function displayInfo(){
      $('#hobby-view').empty();
      var topic = $(this).attr('data-name');
      var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + '&api_key=dAWaCGFhHvD0hnLC2oufRkeZIm533tVv&limit=10';

      // AJAX call to GET information 
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        
        // Record the JSON response from API callto a variable called results
        var results = response.data;

        // for loop created to go through each item in the object 
        for (var i = 0; i < results.length; i++){
          // Create new Topic Div
          var newHobbyDiv = $("<div class='hobby-name'>");

          // Gif Rating
          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating); 

          // Gif IMAGE functionality
          var gifURL = results[i].images.fixed_height_still.url;         
          var gif = $('<img>');
          gif.attr('src', gifURL);
          gif.attr('data-still', results[i].images.fixed_height_still.url);
          gif.attr('data-animate', results[i].images.fixed_height.url);
          gif.attr('data-state', 'still');
          // adding a class for each result for styling purposes
          gif.addClass ('animate-gif');
          // Appending rating 
          newHobbyDiv.append(p);
          // Appending Gif Image;
          newHobbyDiv.append(gif);
           // Appending New Hobby Div to my ID in HTML of Hobby-View
          $('#hobby-view').append(newHobbyDiv);
        } 
      });
    };
    
    // Function for displaying buttons called render buttons
    function renderButtons() {
      // Remove hobbies before adding more hobbies
      $('.buttons-view').empty();
      // Loops through the array of topics to create buttons for all topics
      for (var i = 0; i < topics.length; i++) {
        var createButtons = $('<button>');
        createButtons.addClass('topic btn btn-info');
        createButtons.attr('data-name', topics[i]);
        createButtons.text(topics[i]);
        $('.buttons-view').append(createButtons);
      }
    }

    // Function to remove buttons
    function removeButton(){
      $("#hobby-view").empty();
      var topic = $(this).attr('data-name');
      var itemindex = topics.indexOf(topic);
      if (itemindex > -1) {
        topics.splice(itemindex, 1);
        renderButtons();
      }
    }

    // Function to play or still Gif images
    function playGif () {
      var state = $(this).attr('data-state');
      if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
      }
      else {
        $(this).attr('src' , $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
      }
    }

    // Upon clicking the submit button we will add a new hobby button
    $("#add-hobby").on("click", function(event) {
      event.preventDefault();
      // user input captured from the form
      var hobby = $("#hobby-search").val().trim();

      // push hobby into array

      topics.push(hobby);
      renderButtons();


    });

    // Click on hobby button to display Gifs and other info from API
    $(document).on("click", ".topic", displayInfo);
    // User can click on the Gif image to animate or click again to make it still
    $(document).on("click", ".animate-gif", playGif);
    // Double-click on any hobby button to remove it from the UI List/array
    $(document).on("dblclick", ".topic", removeButton);

    // This calls the renderButtons function to display the intial buttons from original array
    renderButtons();


});