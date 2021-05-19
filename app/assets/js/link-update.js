// // running on https://www.example.com?name=n1&name=n2
// let params = new URLSearchParams(location.search);
// params.get('name') # => "n1"
// params.getAll('name') # => ["n1", "n2"]

var linkUpdate = function(){
  console.log("updating links")
  var params = new URLSearchParams(location.search);
  var profile = params.get('profile');
  if(params.has('profile')){
    $("a.keep-params").attr('href', function(i, h) {
      console.log(i)
      return h + "?profile=" + profile;
    });
  } 
};
linkUpdate();
