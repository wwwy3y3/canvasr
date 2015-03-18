var Q= require('q');
var Canvas= require('canvas');
var fs= require('fs');
var Image = Canvas.Image;

/*
Canvasr.readFile(filepath).resize({width,height}).writePng(filePath).then()
*/

var Canvasr= function (params) {
	var self= this;
	return self;
}

Canvasr.prototype.readFile = function(filePath) {
	var self= this;
	self.imgSrc= filePath;
	return self;
};

Canvasr.prototype.resize = function(params) {
	var self= this;
	var width= params.width;
	var height= params.height;
	var img= new Image();

	var deferred= Q.defer();
	img.onerror = function(err) {
        deferred.reject(err);
    };

    img.onload = function() {
        var ratioWidth= Math.min(img.width, width) / Math.max(img.width, width);
        var ratioHeight= Math.min(img.height, height) / Math.max(img.height, height);
        if(ratioWidth && ratioHeight)
        	var ratio= Math.min(ratioWidth, ratioHeight);
        else
        	var ratio= ratioWidth || ratioHeight;

        var w = Math.round(ratio * img.width, 0);
        var h = Math.round(ratio * img.height, 0);
        var canvas = new Canvas(w, h);
        var ctx = canvas.getContext("2d");
        ctx.scale(ratio, ratio);
        ctx.drawImage(img, 0, 0);
        self.canvas= canvas;
        deferred.resolve(self);
    };

    img.src = self.imgSrc;
    return deferred.promise;
};

Canvasr.prototype.crop = function(params) {
	var self= this;
	var width= params.width;
	var height= params.height;
	var x= params.x;
	var y= params.y;
	var img= new Image();

	var deferred= Q.defer();
	img.onerror = function(err) {
        deferred.reject(err);
    };

    img.onload = function() {
        var w = img.width;
        var h = img.height;
        var canvas = new Canvas(width, height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
        self.canvas= canvas;
        deferred.resolve(self);
    };

    img.src = self.imgSrc;
    return deferred.promise;
};

Canvasr.prototype.writePng = function(filePath) {
	var self= this;
	var canvas= self.canvas;

	// stream
	var deferred= Q.defer();
    /*
    var out = fs.createWriteStream(filePath);
    var stream = canvas.pngStream();

    stream.on('data', function(chunk){
      out.write(chunk);
    });

    stream.on('end', function(){
      deferred.resolve(self);
    });

    stream.on('error', function (err) {
        deferred.reject(err);
    })*/
    
    canvas.toBuffer(function(err, buf){
        if(err) return deferred.reject(err);
        fs.writeFileSync(filePath, buf);
        deferred.resolve(self);
    });
    return deferred.promise;
};

module.exports= Canvasr;