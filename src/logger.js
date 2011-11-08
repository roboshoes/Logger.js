var Logger = (function(_document) {
    
    var node = null;
    
    // ======================
    // PUBLIC
    // ======================
    var log = function() {
        writeToNode(arguments);
    }
    
    var forcelog = function() {
        show();
        log.apply(this, arguments);
    }
    
    var hide = function() {
        writeToNode(arguments);
    }
    
    var hide = function() {
        node.style.display = "none";
    }
    
    var show = function() {
        node.style.display = "block";
    }
    
    // ======================
    // PRIVATE
    // ======================
    var init = function() {
        
        node = _document.createElement("div");
        
        var style = node.style;   
        style.background = "rgba(0, 0, 0, 0.8)";
        style.position = "fixed";
        style.top = 0;
        style.left = 0;
        style.padding = "2px 4px";
        style.color = "white";
        style.fontSize = "11px";
        style.fontFamily = '"Courier New", Consolas, monospace, sans-serif';
        style.display = "block";
        style.maxWidth = "300px";

        if (_document.body) document.body.appendChild(node);
        else _document.addEventListener("DOMContentLoaded", onDOMComplete);
        
        log("o_o");
    }
    
    var writeToNode = function(values) {
        logString = "";
        
        for (var i = 0; i < values.length; i++) {
            if (i > 0) logString += " ";
            logString +=  values[i];
        }
        
        node.innerHTML = logString;  
    }
    
    var onDOMComplete = function() {
        _document.body.appendChild(node);
    }
    
    init();
    
    // ======================
    // EXPORT API
    // ======================
    return {
        log: log,
        forceLog: forcelog,
        
        hide: hide,
        show: show
    }
    
})(document);
