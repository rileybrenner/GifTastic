
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//             <script type="text/javascript">

//             // Array of strings of topics of interest to me

//             var topics = ["surfing", "spearfishing", "hiking", "skateboarding", "painting"];

//             // displayTopicInfo function re-renders the HTML to display the appropriate content
//             function displayTopicInfo(){

//                 console.log(this);

//                 var topic = $(this).attr("data-name");
//                 console.log(topic);
//                 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dAWaCGFhHvD0hnLC2oufRkeZIm533tVv";
//                 console.log(queryURL);
//                 $.ajax({
//                 url: queryURL,
//                 method: "GET"
//               }).then(function(response) {

//             // Creating a div to hold the topic
//                 var topicDiv = $("<div class = 'topic'>");
            
//           // Storing an array of results in the results variable
//           var results = response.data;

//           // Looping over every result item
//           for (var i = 0; i < results.length; i++) {

//               // Creating a div for the gif
//               var gifDiv = $("<div>");

//               // Storing the result item's rating
//               var rating = results[i].rating;

//               console.log(results,'results');

//               // Creating a paragraph tag with the result item's rating
//               var p = $("<p>").text("Rating: " + rating);

//               // Creating an image tag
//               var personImage = $("<img>");

//               // Giving the image tag an src attribute of a proprty pulled off the
//               // result item

//               var image = results[i].images.fixed_height.url; 
//               personImage.attr("src", image);

//               console.log(image, 'image');


//               // Appending the paragraph and personImage we created to the "gifDiv" div we created
//               gifDiv.append(p);
//               gifDiv.append(personImage);

//               // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//               $("#topics-view").prepend(gifDiv);
            
//           }
//         })
//     //         // storing the rating data
//     //         var rating = response.rating;

//     //         // creating an element to have the ratin displayed
//     //         var p0ne = $("<p>").text("Rating: " + rating);
            
//     //         // Displaying the rating
//     //         topicDiv.append(p0ne);
            
//     //         // retrieving url for the image
//     //         var imgURL = response.data[0].images.fixed_height.url;

//     //         // creating element to hold the image
//     //         var image = $("<img>").attr("src", imgURL);

//     //         // append the image
//     //         topicDiv.append(image);

//     //         // put the entire topic above previous movies
//     //         $("topics-view").prepend(topicDiv);
//             //   

//     //         // function for displaying topic data
//     //         function renderButtons(){
            
//     //             // deleting the topics prior to adding the new topics. necessary so to avoid repeat buttons
            
//     //         $("#buttons-view").empty();

//     //         // looping through array of topics
//     //         for (var i = 0; i < topics.length; i++) {

//     //             // dynamically generate buttons for each topic in array

//     //         var a = $("<button>");

//     //         // adding a class for topic-btn to our button
//     //         a.addClass("topic-btn")

//     //         // adding data attribute
//     //         a.attr("data-name", topics[i]);

//     //     // providing an initial text button
//     //     a.text(topics[i]);

//     //     // adding the button to the button-view div
//     //     $("#buttons-view").append(a);       
//     //     }
//     // }

//     // function handles events where a topic button is clicked
//     $("#add-topic").on("click", function(event){
//         event.preventDefault();

//         // this line grabs the input from the textbox

//         var topic = $("#topic-input").val().trim;

//         // Adding topic from the textbox to our array

//         topics.push(topic);

//         // Calling renderButtons which handles the processing our topic array

//         renderButtons();

//     });
            
//     // adding a click event listener to all elements with a class of "topic-btn"

//     $(document).on("click",".topic-btn",displayTopicInfo);

//     // calling the renderButtons function to display the initial buttons

//     renderButtons();




          
// </script>

alert{"Hello world"};