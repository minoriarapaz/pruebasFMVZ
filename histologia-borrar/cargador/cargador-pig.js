(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"cargador_pig_atlas_1", frames: [[0,31,129,29],[0,0,179,29],[0,62,129,29]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["cargador_pig_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["cargador_pig_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["cargador_pig_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.cargadorpig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxAyQgWgUAAgeQAAgcAWgWQAVgVAcABQAdgBAWAVQAUAWAAAcQAAAegUAUQgWAWgdAAQgcAAgVgWg");
	this.shape.setTransform(56.2,82.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxAyQgWgUAAgeQAAgcAWgWQAVgVAcABQAdgBAWAVQAUAWAAAcQAAAegUAUQgWAWgdAAQgcAAgVgWg");
	this.shape_1.setTransform(56.2,82.65);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(49.05,75.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(49.05,75.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(74.05,75.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:56.2}}]}).to({state:[{t:this.shape_1,p:{x:56.2}},{t:this.shape,p:{x:81.2}}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.shape_1,p:{x:106.2}},{t:this.shape,p:{x:131.2}}]},3).to({state:[{t:this.shape,p:{x:131.2}}]},3).to({state:[]},3).wait(3));

	// cerdoblanco
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#483D8B"],[0,1],-5.1,-18.5,-5.1,161.4).s().p("ADsHmQgIgCgJgDQgTgHgFgLQgIgPgIggQgIgkAEgNQAAgLgEgHIgGgMQgHgSAJg2IABgKQgeA0gaAaQgLALgCAqQgBAfADAXQABALANANQANAOABAIIhRAAIgPgQQgPgRgCgHQgDgLAGgbQAHgfAOgSQADgYgBgXIgCgjIgDgSQiuBZi6gjQgigHghgKQACAPAHAYQAMAjALARQAFAGAQANIAfAZQAqAhAAANIhIAAQgHABgMgFQgYgKgVgcQgWgcgYgxIgUgqIgPgUQgRgUgHgGQgFgDgEgOQgDgJgBgLIgFgEIgUAgQgNAUAAAJQgCAUALAmQAKAgAPAdQAKAWAZAbIAWAWIhyAAIgFgMQgGgPgDgSQgEgSgRgmIgXgwQgKgTgGgeQgHgnAKgVQANgcgQghQgJgRgagiIgFgHIgCgDQhAhWgIheQgEgyANg6IAFgQQgMgFgKAeQgGARgIAiQgEANgJATQgFARAEAZQAEAZgTAXQgJAKgKAHIgPgDQgQAOgHAIQgLAOgIAUQgLgbAQgnQAJgXARgaQAFgHAHgTQAGgRAIgIQAPgPALgSQAQgaAAgUQAAgXAIgRQAHgQAMgEQAJgEAbgdQAOgOALgOQAGgKAdgSQAegSAmgRQBfgtA8AAQAvAABzATIBTAMQAqAGAXAAQAwAABxgXQBtgXAegNQAggQAtgMQA4gQA+gIQA8gHAxAfQATALANAPQAMANADALQAZgCAdAUIAXAQQANALAHADQAOACA5AYIA2AXIB9ACIABgGQACgGAJAAQAQAJAIAoQAEAUABATIgGAAQgGABgEAGQglBJhoAxQglARgxAQIhIAVQhEBPhwA+QgwAagpAQQADAKgEAEQgDAEgPAvQgPArgCALQgCAIgSAoIgVAvQgCAEAAANQAAANADAPQAIAoAUATQAHAHAQAMQALAJAAAJg");
	this.shape_2.setTransform(99.0759,100.5019);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(24));

	// Capa_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(1,1,1).p("AvkvkIfJAAIAAfJI/JAAg");
	this.shape_3.setTransform(99.725,99.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AvkPlIAA/JIfJAAIAAfJg");
	this.shape_4.setTransform(99.725,99.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(99,99.1,101.5,101.4);
// library properties:
lib.properties = {
	id: 'F2ED7B4A5CED41B18974CB59BD846E6D',
	width: 200,
	height: 200,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cargador_pig_atlas_1.png", id:"cargador_pig_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F2ED7B4A5CED41B18974CB59BD846E6D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;