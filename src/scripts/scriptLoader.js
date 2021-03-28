// Source: https://humanwhocodes.com/blog/2009/07/28/the-best-way-to-load-external-javascript/

defaultInitializer = () => {
    console.log('scriptLoader.js: no initializer function passed');
}

function scriptLoader(url, callback = defaultInitializer) {

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
