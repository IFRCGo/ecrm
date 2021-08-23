window.onload = function(){
  let params = new URLSearchParams(location.search);
  let profile = params.get('profile');
  console.log(profile)
  var all = $(".hide").map(function(){
    return this;
  }).get();
  for(i=0; i < all.length; i++){
    console.log()
    if($(all[i]).hasClass(profile)){
      console.log("hiding it")
      $(all[i]).hide()
    }
  }
}