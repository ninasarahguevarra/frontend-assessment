var globalFunc = {
  pageOnloadAnim: function(){
    var homeWrapper = document.getElementsByClassName('home-wrapper');
    homeWrapper[0].classList.add("show");
  },
  productOnloadAnim: function(){
      var child = document.getElementById('test').children;
      for (var i = 0; i < child.length; i++) {
        var delay = 1 + (.4 * i) + "s";
        child[i].style.animationDelay = delay;
        child[i].classList.add('fadeUp2');
        // console.log(delay);
      }
  },
  bannerParallax: function(){
    var y = window.scrollY;
    var parSpeed = y * 0.3;
    var parallax = document.getElementById("parallax");
    parallax.style.top = parSpeed + "px";
  }
}

document.onscroll= function(){
  globalFunc.bannerParallax();
}

window.onload = function(){
  globalFunc.pageOnloadAnim();
  globalFunc.productOnloadAnim();
};


// preloader once done
Pace.on('done', function() {
	// totally hide the preloader especially for IE
	setTimeout(function() {
		$('.pace-inactive').hide();
	}, 500);
});
