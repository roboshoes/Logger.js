Logger.js
=========

Description
-----------

Logger.js is a very simple utiliy to create a small logging panel on the top left corner of the window. 
It's purpose it really to log data like mouse touch positions other constantly changing values without
having to go the console, which I feel a really unconfortable on mobile devices.

Also it provides a possibility to trace info without changing the height of the browser on iDevices.

Usage
-----

To use it simply add it in the header like any other *libary* and it provides simple methods, such as:

`Logger.log("coordinates", valueX, valueY);`
Self explanatory. It takes any amound of paramters and chains them using space.

`Logger.hide();`
Hides the logging panel.

`Logger.show();`
Guess what.

`Logger.forceLog("something");`
In case the logger is currently hidden it shows the logger in addition to the normale Logger.log behavior.

