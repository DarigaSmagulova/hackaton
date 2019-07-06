//added strict mode to address following error message, "Uncaught SyntaxError: Unexpected token u in JSON at position 0."   'use strict';

const app = document.getElementById("root");

//add API related image
const weather = document.createElement("img");
weather.src =   "weather.jpg";

const container = document.createElement("div");
container.setAttribute("class", "container");

//method to append the logo image and container div to the app root.
app.appendChild(weather);
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', "https://api.vk.com/method/wall.get?access_token=71300f8771300f8771300f87b8715b89eb7713071300f872c10d522066d06d00e1dcbd2&v=5.101&owner_id=227313260");
if (!xhr) {
  throw new Error('CORS not supported');
}

    xhr.send();