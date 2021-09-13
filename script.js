const API_ENDPOINT = "https://icanhazdadjoke.com/";
const XHR = new XMLHttpRequest();


function getJoke() {
	XHR.open("GET", API_ENDPOINT);
	XHR.setRequestHeader('Accept', 'application/json');
	XHR.responseType = 'json';
	XHR.onload = function(){
		console.log('success', XHR.response.joke);
		
		var joke = XHR.response.joke; 
		document.getElementById("p").innerHTML=joke;
	}
	XHR.onerror = function(){
		console.log('An error occured');
	}
	XHR.send();
	
}

function Next() {
	getJoke();	
}

function showJoke() {
	document.getElementById('joke').innerHTML = XHR.response.joke;
}






