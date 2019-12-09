var globalFunc = {
	getJason: function(){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
		    var myArray = JSON.parse(this.responseText);

				for (var i = 0; i < myArray.length; i++) {
					var jsonData = myArray[i];
					// console.log(jsonData);

					// setting attr
					function setAttributes(el, attrs) {
					  for(var key in attrs) {
					    el.setAttribute(key, attrs[key]);
					  }
					}
					// for nav-bar tabs
					var nav = document.getElementById("section-tabs");
					var li = document.createElement("li");
					var a = document.createElement("a");
					var span = document.createElement("span");
					span.innerHTML = jsonData.title;
					setAttributes(a, {"href": "#section-" + i, "data-toggle": "tab", "role": "tab"});
					if (i === 0) {
						a.className = "active";
					}
					a.appendChild(span);
					li.appendChild(a);
					nav.appendChild(li);


					// for tab content and accordion
					var accordion = document.getElementById("accordion");
					var card = document.createElement("div");
					var cardHeader = document.createElement("div");
					var aHeader = document.createElement("a");
					var cardContent = document.createElement("div");
					var cardBody = document.createElement("div");

					card.className= "card tab-pane fade";
					card.setAttribute("role", "tabpanel");
					card.id = "section-" + i;
					cardHeader.className = "card-header";
					aHeader.className = "collapsed";
					setAttributes(aHeader, {"href": "#section-0" + i, "data-toggle": "collapse"});
					cardContent.id = "section-0" + i;
					cardContent.className = "collapse";
					cardContent.setAttribute("data-parent","#accordion");
					cardBody.className = "card-body";
					cardBody.innerHTML = jsonData.content;
					if (i === 0) {
						card.className = "card tab-pane fade show active";
						aHeader.classList.remove("collapsed");
						cardContent.classList.add("show");
					}

					aHeader.innerHTML = jsonData.title;
					cardHeader.appendChild(aHeader);
					card.appendChild(cardHeader);
					card.appendChild(cardContent);
					cardContent.appendChild(cardBody);
					accordion.appendChild(card);
				}
	  	}
		};
		xmlhttp.open("GET", "data.json", true);
		xmlhttp.send();

	},

	animation: function(){
		var mainWrapper = document.getElementById('main-wrapper');
    mainWrapper.classList.add("show");
	},

};

window.onload = function(){
	globalFunc.getJason();
	globalFunc.animation();

};

// preloader once done
Pace.on('done', function() {
	// totally hide the preloader especially for IE
	setTimeout(function() {
		$('.pace-inactive').hide();
	}, 500);
});
