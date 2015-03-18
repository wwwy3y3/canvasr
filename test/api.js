var Canvasr= require('../');
var cvr= new Canvasr();
cvr.readFile(__dirname+'/himym.png')
   .resize({
   		width: 200,
   		height: 200
   })
   .then(function (cvr) {
   		return cvr.writePng(__dirname+'/himym-200.png');
   })
   .done(function () {
   		console.log('ok')
   }, function (err) {
   		throw err;
   })