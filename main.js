/////////////////////////////// Header /////////////////////////////////////////////
var pic = user.avatar_url;

$('#sm-pic').html(
    "<img src='" +
    pic +
    "'/>"
);

/////////////////////////////// Left Column ////////////////////////////////////////
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

var date = moment(user.created_at).format('LL');

$('#details1').html(
  "<li>" +
  user.email +
  "</li>" +
  "<li>Joined on " +
   date +
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
/////////////////////////////////////////////////////////////////////////

////////////////////////////// Right Column /////////////////////////////

///// Button Stuff ////
$('#rep-tab').click(function(event){
  event.preventDefault();
  //// switch material displayed ////
  $('#repo').css('display', 'block');
  $('#cont').css('display', 'none');
  $('#pa').css('display', 'none');
///// switch border and padding to break underline /////
  $('#rep-tab').css('padding-bottom', '0.3em').css('border', '.1em solid #B2B2B2').css('border-bottom', 'none');
  $('#pa-tab').css('padding-bottom', '.1em').css('border', 'none');
  $('#cont-tab').css('padding-bottom', '.1em').css('border', 'none');
});

$('#pa-tab').click(function(event){
  event.preventDefault();
  $('#pa').css('display', 'block');
  $('#cont').css('display', 'none');
  $('#repo').css('display', 'none');

  $('#pa-tab').css('padding-bottom', '0.3em').css('border', '.1em solid #B2B2B2').css('border-bottom', 'none');
  $('#rep-tab').css('padding-bottom', '.1em').css('border', 'none');
  $('#cont-tab').css('padding-bottom', '.1em').css('border', 'none');
});

$('#cont-tab').click(function(event){
  event.preventDefault();
  $('#cont').css('display', 'block');
  $('#repo').css('display', 'none');
  $('#pa').css('display', 'none');

  $('#cont-tab').css('padding-bottom', '0.3em').css('border', '.1em solid #B2B2B2').css('border-bottom', 'none');
  $('#rep-tab').css('padding-bottom', '.1em').css('border', 'none');
  $('#pa-tab').css('padding-bottom', '.1em').css('border', 'none');
});

//////// Contributions Tab /////////

//////// Repository Tab ////////////
var repositories = repos.map(function(el){
  return el.name;
});
var repoLink = repos.map(function(el){
  return el.html_url;
});

var repoArray = [];

for(var i = 0; i < repositories.length; i++){
  repoArray += ["<li><a href=" +
                repoLink[i] +
                ">" +
                repositories[i] +
                "</a><div>" +
                 "type " +
                 "0" +
                 "<span class='size mega-octicon octicon-star'></span>" +
                 "0" +
                 "<span class='size mega-octicon octicon-git-branch'></span>" +
                 "</div></li><hr>"];
}

$('#repo').html(repoArray);

//////// Public Activity Tab /////
