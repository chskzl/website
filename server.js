var http = require("http");
var fs = require("fs");
var path = require("path");

process.chdir('public');

var cache = {};

function requestHandler(request, response) {
	if (request.url == "/") {
		request.url = "/index.html";	
	}
	if (request.url == "/photos") {
		request.url = "/photos.html";	
	}
	if (request.url == "/contact") {
		request.url = "/contact.html";	
	}
	if (request.url == "/projects") {
		request.url = "/projects.html";	
	}
	if (request.url == "/cv") {
		request.url = "/cv.html";	
	}

	if (fs.existsSync(process.cwd() + request.url))	{
		if (cache[process.cwd() + request.url]) {
			response.status = 200;
			response.write(cache[process.cwd() + request.url]);
			return response.end();
		}

		fs.readFile(process.cwd() + request.url, function(error, data) {
			if (error) {
				throw error;
			}

			response.status = 200;

			switch(path.extname(request.url)) {
				case ".js":
       					contentType = "text/javascript";
      					break;
        			case ".css":
    				        contentType = "text/css";
				        break;
				case ".jpg":
				        contentType = "image/jpg";
      					break;
				case ".html":
					contentType = "text/html";
					break;  
			}

			cache[process.cwd() + request.url] = data;
			response.write(data);
			response.end();

		});
	}

	else {
		response.writeHead(404, {"Content-Type": "text/html"});

		if (cache["./404.html"]) {
			response.write(cache["./404.html"]);
			return response.end();
		}

		fs.readFile("./404.html", function(error, data) {
			if (error) {
				throw error;
			}
			response.write(data);
			response.end();
		})
	}
}

var server = http.createServer(requestHandler);
server.listen(80);
