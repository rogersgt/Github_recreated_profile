///////////////////////////////// Repository List //////////////////////////////
var repositories = repos.map(function(el){
  return el.name;
});
var repoLink = repos.map(function(el){
  return el.html_url;
});

var repoArray = [];

for(var i = 0; i < repositories.length; i++){
  repoArray += ["<li><a href=repoLink[i]>" + repositories[i] + "</a></li>"];
}

$('#repo').html(repoArray);


/////////////////////////////// Left Column ////////////////////////////////////////
var pic = user.avatar_url;

$('#pic').html(
  "<img src='" +
  pic +
  "'/>"
);

$('#names').html(
  "<li>" +
  user.name +
  "</li>" +
  "<li>" +
  user.login +
  "</li>"
);

$('#details1').html(
  "<li>" +
  user.email +
  "</li>" +
  "<li>Joined on " +
   user.created_at +
  "</li>"
);

$('#details2').html(
  "<li>" +
  user.followers +
  "</li>" +
  "<li> 0" +
  "</li>" +
  "<li>" +
  user.following +
  "</li>"
);

// function(){
//   if(user.followers === 1){
//     var followers = "Follower";
//   }else{
//     var followers = "Followers";
//   }
// };

$('#details2Titles').html(
  "<li>Follower</li>" +
  "<li>Starred</li>" +
  "<li>Following</li>"
);

$('#org').html(
  "<li><h3>Organizations</h3></li>" +
  "<li><a href='" +
  user.organizations_url +
  "'><img src='https://avatars1.githubusercontent.com/u/14251473?v=3&s=84' /></a></li>"

);

////////////////////////////// Right Column /////////////////////////////
$('#repo-tab').click(function(event){
  event.preventDefault();
  $('#repo').css('display', 'block');
  $('#cont').css('display', 'none');
  $('#pa').css('display', 'none');
});

$('#pa-tab').click(function(event){
  event.preventDefault();
  $('#pa').css('display', 'block');
  $('#cont').css('display', 'none');
  $('#repo').css('display', 'none');
});

$('#cont-tab').click(function(event){
  event.preventDefault();
  $('#cont').css('display', 'block');
  $('#repo').css('display', 'none');
  $('#pa').css('display', 'none');
});
