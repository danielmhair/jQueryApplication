$(document).ready(function() {
	$.ajax({
	  url: 'https://www.khanacademy.org/api/v1/badges',
	  type: "GET",
	  success: function(data) {
		if (data != null) {
			return data;
		}
		else {
			return new Array();
		}
	  },
	  error: function(data) {
		$("#badges").html("<h3>Sorry, unable to retrieve the current badges at this time.</h3>");
	  },
	  dataType: 'jsonp'
	}).done(function(data) {
		console.log(data);
		var badgesElement = document.getElementById("badges");
		emptyChildren(badgesElement);
        data.forEach(function(badge) {
			
			var div = document.createElement('div');
			div.className = "col-md-4 badge";
			
			var p = document.createElement('p');
			p.innerHTML = badge.description;
			
			var a = document.createElement('a');
			a.href = badge.absolute_url;
			
			var img = document.createElement('img');
			img.src = badge.icons.small;
			
			badgesElement.appendChild(div);
			div.appendChild(a);
			a.appendChild(p);
			a.appendChild(img);
		});
    });
});

var emptyChildren = function(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}