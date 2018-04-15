// getters
var fullName = document.getElementById('fullName');
var username = document.getElementById('username');
var email = document.getElementById('email');
var city = document.getElementById('city');
var btn = document.getElementById('btn');

// API endpoint
var url = 'https://randomuser.me/api';

// event to fire AJAX request
btn.addEventListener('click', function(){
// fetch data from the api
fetch(url)
  // then return that data in json format
  .then(function(res){
    return res.json();
  })
  // then get the data from that json res object
  .then(function(data){
    // SETTERS
    fullName.innerText = data.results[0].name.first + ' ' + data.results[0].name.last;
    avatar.src = data.results[0].picture.large;
    username.innerText = 'username: ' + data.results[0].login.username;
    email.innerText = 'email' + data.results[0].email;
    city.innerText = 'location: ' + data.results[0].location.city + ', ' + data.results[0].location.state;
  })
  .catch(function(err){
    console.log(err);
  });
});
