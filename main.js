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
// var picture = user.avatar_url;
//
// $('#pic').html("<img src=picture alt='Grady'");
