function loadScript(url){
    var script = document.createElement('script');
    script.type = "text/javascript";
    document.body.appendChild(script);
}

function loadSciptString(code){
    var script = document.createElement('script');
    script.type = "text/javascript";
    try{
        script.appendChild(document.createTextNode(code));
    }catch(ex){
        script.text = code;
    }
    document.body.appendChild(script);
}