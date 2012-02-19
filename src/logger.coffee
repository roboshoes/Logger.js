root = exports ? this
node = null

init = ->
  node = document.createElement "div"
  
  style = node.style
  style.background = "rgba(0, 0, 0, 0.8)"
  style.position = "fixed"
  style.top = 0
  style.left = 0
  style.padding = "2px 4px"
  style.color = "white"
  style.fontSize = "11px"
  style.fontFamily = '"Courier New", Consolas, monospace, sans-serif'
  style.display = "block"
  style.maxWidth = "300px"
  
  if document.body 
    onDOMComplete()
  else 
    document.addEventListener "DOMContentLoaded", onDOMComplete

  Logger.log "o_o"

wirteToNode = (values) ->
  node.innerHTML = values.join " "
  
onDOMComplete = ->
  document.body.appendChild node


root.Logger =

  log: (values...) ->
    wirteToNode values
    
  show: ->
    node.style.display = "block"
    
  hide: -> 
    node.style.display = "none";
    
  forcelog: (values...) ->
    Logger.show()
    Logger.log values


init()
