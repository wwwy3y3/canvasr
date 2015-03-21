# canvasr
node-canvas api 

# api
## resize({ width: width, height: height })
``` javascript
var cvr= new Canvasr();
cvr.readFile(testPng)
   .resize({
   		width: 200,
   		height: 200
   })
   .then(function (cvr) {
   		return cvr.writePng(__dirname+'/himym-200.png');
   })
   .done(function () {
   		console.log(fs.statSync(__dirname+'/himym-200.png'))
   }, function (err) {
   		throw err;
   })
```
## crop({ x: x, y: y, width: width, height: height })
``` javascript
var cvr= new Canvasr();
cvr.readFile(testPng)
   .crop({
   		x: 100,
   		y: 100,
   		width: 200,
   		height: 200
   })
   .then(function (cvr) {
   		return cvr.writePng(__dirname+'/himym-cropped.png');
   })
   .done(function () {
   		console.log(fs.statSync(__dirname+'/himym-cropped.png'))
   }, function (err) {
   		throw err;
   })
```