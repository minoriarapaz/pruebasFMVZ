(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.dia6 = function() {
	this.initialize(img.dia6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,849,606);


(lib.figura3a = function() {
	this.initialize(img.figura3a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2174,1022);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.botoninvisible = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("ArTLUQksksAAmoQAAmnEsksQEsksGnAAQGoAAEsEsQEsEsAAGnQAAGoksEsQksEsmoAAQmnAAksksg");
	this.shape.setTransform(102.4,102.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.8,204.8);


(lib._00egg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.dia6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._00egg, new cjs.Rectangle(0,0,849,606), null);


(lib.MCfase4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
		
		var back = regresar.bind(this);
		
		this.botonBack.addEventListener("click", back);
		function regresar() {
			this.gotoAndPlay(16);
			console.log("desde 1");
			this.botonBack.removeEventListener("click", back);
		}
	}
	this.frame_24 = function() {
		this.parent.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(9).call(this.frame_24).wait(1));

	// grafica
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAMIAAgXIAVAAIAAAXg");
	this.shape.setTransform(155.675,610.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_1.setTransform(146.425,606.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgHgEIgQgFIgPgEQgPgEgHgDQgMgIAAgOQgBgQAMgKQAMgKAUAAQAZAAAMAPQAIAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgMALQgLALgYAAQgZAAgLgLg");
	this.shape_2.setTransform(134.95,606.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_3.setTransform(126.4,606.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgKgHgEQgHgEgMgBQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgEgBgHQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAEQAGAGAIgBQALABAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_4.setTransform(116.275,606.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA6IAAgQIBDhSIg+AAIAAgRIBYAAIAAAQIhDBRIBFAAIAAASg");
	this.shape_5.setTransform(104.325,606.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_6.setTransform(96.5,604);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_7.setTransform(91.675,604);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgKgHgEQgHgEgMgBQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgEgBgHQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAEQAGAGAIgBQALABAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_8.setTransform(83.375,606.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoArQgEgJgBgPIAAhNIAUAAIAABLQAAAJADAGQAFAKAOAAQASAAAHgSQAEgJAAgQIAAg5IATAAIAAByIgSAAIAAgRQgDAGgGAFQgLAJgOAAQgYAAgJgQg");
	this.shape_9.setTransform(70.8,606.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgHgEIgQgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgYAAgLgLg");
	this.shape_10.setTransform(59.35,606.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_11.setTransform(51.4,604);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKA6IgqhzIAWAAIAeBdIAghdIAVAAIgsBzg");
	this.shape_12.setTransform(43.45,606.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgHAQgDIAegDQAGgCADgEIABgHQAAgKgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgEgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAEAAALQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_13.setTransform(551.275,582.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgHAQgDIAegDQAGgCADgEIABgHQAAgKgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgEgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAEAAALQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_14.setTransform(532.975,582.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgvA5IAAgPIBDhSIg+AAIAAgRIBYAAIAAAQIhDBRIBFAAIAAARg");
	this.shape_15.setTransform(521.025,582.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgIACgFAHQgFAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIATAAIAAAQQAIgKAJgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_16.setTransform(509.55,582.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_17.setTransform(497.225,582.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_18.setTransform(488.8,580);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA6A7IAAhPQgBgMgGgEQgFgEgJAAQgLAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAJgFALAAQAXAAAIARQAEAJABAPIAABMg");
	this.shape_19.setTransform(477.25,582.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_20.setTransform(461.875,582.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgLgHgGQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIALQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAXgNAKQgNALgUAAQgWAAgNgQg");
	this.shape_21.setTransform(450.475,582.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgHAQgDIAegDQAGgCADgEIABgHQAAgKgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgEgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAEAAALQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_22.setTransform(432.925,582.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKBPIAAg/Ig8heIAaAAIAsBMIAthMIAaAAIg8BeIAAA/g");
	this.shape_23.setTransform(421.05,580);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAMIAAgXIAVAAIAAAXg");
	this.shape_24.setTransform(404.775,586.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_25.setTransform(395.525,582.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA6A7IAAhPQgBgMgFgEQgGgEgJAAQgLAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQAOAAAIAHQAEAEAEAHQAGgJAJgEQAJgFALAAQAWAAAJARQAEAJABAPIAABMg");
	this.shape_26.setTransform(380.4,582.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAIgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJAAANIAABBg");
	this.shape_27.setTransform(368.2,582.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_28.setTransform(357.725,582.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_29.setTransform(345.225,580.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_30.setTransform(333.325,582.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABLQAAAFAEACIAIACIADAAIAEgBIAAAPIgHACIgIAAQgNAAgEgGg");
	this.shape_31.setTransform(324.175,580.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgLgHgGQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIALQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAXgNAKQgNALgUAAQgWAAgNgQg");
	this.shape_32.setTransform(315.825,582.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_33.setTransform(304.025,582.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_34.setTransform(289.525,580);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_35.setTransform(280.875,582.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_36.setTransform(268.375,580.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_37.setTransform(253.55,582.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_38.setTransform(246.85,580);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABLQAAAFAEACIAIACIADAAIAEgBIAAAPIgHACIgIAAQgNAAgEgGg");
	this.shape_39.setTransform(241.275,580.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_40.setTransform(235.3,582.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgHAQgDIAegDQAGgCADgEIABgHQAAgKgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgEgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAEAAALQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_41.setTransform(225.175,582.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgyBSIAAifIATAAIAAAPQAGgIAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAkgUARQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_42.setTransform(212.975,584.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgHAQgDIAegDQAGgCADgEIABgHQAAgKgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgEgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAEAAALQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_43.setTransform(194.675,582.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgHAQgDIAegDQAGgCADgEIABgHQAAgKgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgEgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAEAAALQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_44.setTransform(176.375,582.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_45.setTransform(167.625,580);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_46.setTransform(162.775,580);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_47.setTransform(154.125,582.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_48.setTransform(145.1,582.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAIgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJAAANIAABBg");
	this.shape_49.setTransform(137.8,582.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgHAQgDIAegDQAGgCADgEIABgHQAAgKgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgEgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAEAAALQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_50.setTransform(127.675,582.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_51.setTransform(115.85,582.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_52.setTransform(104.125,582.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_53.setTransform(91.625,580.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_54.setTransform(73.625,582.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgtBEQgPgPAAgZIAUAAQABANAFAJQAKAPAZAAQAMAAAJgDQATgHAAgRQAAgNgIgFQgIgGgRgEIgUgFQgUgEgIgFQgPgKAAgTQAAgWAOgNQAOgOAbAAQAXAAARAMQARAMAAAaIgVAAQgBgMgFgHQgJgNgWAAQgSAAgIAIQgIAIAAALQAAALAJAGQAHADAVAFIAVAFQAQAEAIAFQAPAMgBAVQABAagUALQgSALgYAAQgcAAgRgPg");
	this.shape_55.setTransform(60.2,580.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeA3QgNgIgHgOQgHgOAAgTQAAgcAPgRQAPgQAbAAQARAAAOAHQANAIAHAOQAHAOAAASQAAAdgPARQgQAQgbAAQgRAAgNgHgAgSgaQgGAJAAARQAAASAGAJQAGAJAMAAQANAAAGgJQAGgJAAgSQAAgRgGgJQgGgJgNAAQgMAAgGAJg");
	this.shape_56.setTransform(76.625,556.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgvABQAAgeAPgQQAQgQAbAAQAVAAAQAIIgKAZIgOgFQgGgCgHAAQgZAAAAAkQAAAjAZAAQAKAAAHgDQAJgCAIgGIAAAcQgIAGgJABQgHACgNAAQg3AAAAg9g");
	this.shape_57.setTransform(64.3,556.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQBUIAAh3IAgAAIAAB3gAgRhDQAAgQARAAQASAAAAAQQAAAIgFAFQgEADgJABQgRgBAAgQg");
	this.shape_58.setTransform(55.175,554.15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag1BPIAAicIAyAAQAbAAAPAMQAPAMAAAZQAAAZgQAMQgQAOgcAAIgOAAIAAA4gAgUgDIALAAQAOAAAIgHQAHgGAAgMQAAgLgGgGQgGgFgNAAIgPAAg");
	this.shape_59.setTransform(45.425,554.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAA0RMAAAAok");
	this.shape_60.setTransform(396,398.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(134,53,53,0.749)").s().p("Eg1VAMtIAA5ZMA93AAAMAs0AAAIAAZZg");
	this.shape_61.setTransform(341.35,610.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).to({state:[]},1).wait(9));

	// boton
	this.botonBack = new lib.botoninvisible();
	this.botonBack.name = "botonBack";
	this.botonBack.setTransform(331.95,231.9,2.9753,2.4766,0,0,0,102.5,102.3);
	this.botonBack._off = true;
	new cjs.ButtonHelper(this.botonBack, 0, 1, 2, false, new lib.botoninvisible(), 3);

	this.timeline.addTween(cjs.Tween.get(this.botonBack).wait(15).to({_off:false},0).to({_off:true},1).wait(9));

	// HUEVO
	this.instance = new lib._00egg();
	this.instance.setTransform(188.15,220.85,0.76,0.76,0,0,0,234.4,172.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:234.5,regY:172.5,scaleX:1.3,scaleY:1.3,x:210.55,y:2.45},15,cjs.Ease.quadInOut).to({regX:234.4,regY:172.6,scaleX:0.76,scaleY:0.76,x:188.15,y:220.85},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-221.8,1103.7,913.0999999999999);


(lib.MCfase3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
		
		var back = regresar.bind(this);
		
		this.botonBack.addEventListener("click", back);
		function regresar() {
			this.gotoAndPlay(16);
			console.log("desde 1");
			this.botonBack.removeEventListener("click", back);
		}
	}
	this.frame_24 = function() {
		this.parent.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(9).call(this.frame_24).wait(1));

	// grafica
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAMIAAgXIAVAAIAAAXg");
	this.shape.setTransform(521.925,612.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_1.setTransform(512.8,607.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBDQgNgQAAgbQAAgcAOgRQAPgSAXAAQAXAAAPAPQAPAPAAAcQAAAcgNASQgOASgbAAQgYAAgOgQgAgZgIQgIAMAAATQAAATAIAMQAIAMARAAQATAAAHgOQAHgPAAgSQAAgQgFgJQgIgQgUAAQgRAAgIAOgAgTgzIATgfIAXAAIgbAfg");
	this.shape_2.setTransform(500.475,605.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_3.setTransform(492.05,605.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAJgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_4.setTransform(486.6,607.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_5.setTransform(476.125,607.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAWgNALQgNALgUAAQgWAAgNgQg");
	this.shape_6.setTransform(464.725,607.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_7.setTransform(450.625,605.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_8.setTransform(441.975,607.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkBRIgFgBIAAgSIAHACIAEAAQAFAAADgBIAEgFIAEgJIAFgLIgrh2IAXAAIAdBcIAfhcIAWAAIgSAyIgSAwQgRAsgGAKQgHAJgQAAg");
	this.shape_9.setTransform(424.4,609.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgMgLg");
	this.shape_10.setTransform(407.3,607.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_11.setTransform(395.575,607.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_12.setTransform(383.075,605.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_13.setTransform(374.95,605.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_14.setTransform(366.325,607.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAPIgHACIgIAAQgNABgEgIg");
	this.shape_15.setTransform(357.175,606.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgFAGgCAGQgCAGABALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_16.setTransform(348.15,607.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgIQgDgEgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_17.setTransform(336.175,607.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_18.setTransform(327.425,605.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgIQgDgEgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_19.setTransform(319.125,607.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_20.setTransform(304.275,605.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_21.setTransform(295.625,607.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_22.setTransform(283.125,605.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgGAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_23.setTransform(265.25,607.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnBDQgNgQAAgbQAAgcAOgRQAPgSAXAAQAXAAAPAPQAPAPAAAcQAAAcgNASQgOASgbAAQgYAAgOgQgAgZgIQgIAMAAATQAAATAIAMQAIAMARAAQATAAAHgOQAHgPAAgSQAAgQgFgJQgIgQgUAAQgRAAgIAOgAgTgzIATgfIAXAAIgbAfg");
	this.shape_24.setTransform(252.925,605.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_25.setTransform(244.5,605.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgGgEIgSgFIgOgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgYAAgMgLg");
	this.shape_26.setTransform(236.6,607.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgoArQgFgJABgPIAAhNIATAAIAABLQAAAJACAGQAGAKANAAQATAAAHgSQAEgJAAgRIAAg4IAUAAIAAByIgTAAIABgRQgEAHgFAEQgLAJgPAAQgYAAgJgQg");
	this.shape_27.setTransform(224.85,607.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKBQIAAhjIgQAAIAAgOIAQAAIAAgSQAAgMAEgGQAGgKATAAIAEAAIAEABIAAARIgEAAIgDAAQgJAAgBAEQgCAFAAATIATAAIAAAOIgTAAIAABjg");
	this.shape_28.setTransform(215.825,605.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgIQgDgEgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_29.setTransform(200.825,607.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_30.setTransform(192.075,605.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgIACgFAHQgFAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_31.setTransform(177.45,607.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_32.setTransform(165.125,607.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAWgNALQgNALgUAAQgWAAgNgQg");
	this.shape_33.setTransform(153.725,607.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgIQgDgEgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_34.setTransform(136.175,607.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA5A7IAAhPQABgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgDgFQgEgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgUAAIAAhyIAUAAIAAAQQAGgIAHgEQAJgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAIgFALAAQAYAAAIARQAFAJgBAPIAABMg");
	this.shape_35.setTransform(120.7,607.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_36.setTransform(108.5,607.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_37.setTransform(98.025,607.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgKBQIAAhjIgQAAIAAgOIAQAAIAAgSQAAgMAEgGQAGgKATAAIAEAAIAEABIAAARIgEAAIgDAAQgJAAgBAEQgCAFAAATIATAAIAAAOIgTAAIAABjg");
	this.shape_38.setTransform(88.975,605.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_39.setTransform(73.625,607.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgtBEQgPgPAAgZIAUAAQABANAFAJQAKAPAZAAQAMAAAJgDQATgHAAgRQAAgNgIgFQgIgGgRgEIgUgFQgUgEgIgFQgPgKAAgTQAAgWAOgNQAOgOAbAAQAXAAARAMQARAMAAAaIgVAAQgBgMgFgHQgJgNgWAAQgSAAgIAIQgIAIAAALQAAALAJAGQAHADAVAFIAVAFQAQAEAIAFQAPAMgBAVQABAagUALQgSALgYAAQgcAAgRgPg");
	this.shape_40.setTransform(60.2,605.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgrA1QgKgKAAgTQAAgTAOgIQANgJAagBIAVgBIAAgFQAAgSgTAAQgNAAgTAJIgLgWQAUgLAZAAQAYAAANAKQANALAAAVIAABPIgXAAIgHgQIAAAAQgJAKgIAEQgIAEgOAAQgSAAgKgJgAAIAFQgNAAgHAFQgHAFAAAKQAAANAQAAQAKAAAHgGQAHgHAAgLIAAgJg");
	this.shape_41.setTransform(321.875,557.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgmAuQgQgQAAgdQAAgdAPgRQAPgQAZAAQAaAAAOAOQAOAPAAAZIAAAPIhMAAQAAAOAIAIQAIAIANAAQALAAAJgCQAKgCALgFIAAAZQgJAEgKACQgKACgOAAQgcAAgQgQgAAZgMQgBgNgGgGQgGgHgKAAQgKAAgGAHQgGAGAAANIAtAAIAAAAg");
	this.shape_42.setTransform(309.175,557.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgrBEQgMgQAAgeQAAgcAMgRQANgQAVAAQAVAAANASIAAAAQgBgOAAgKIAAgmIAgAAIAAClIgZAAIgGgPIgBAAQgMARgWAAQgVAAgMgQgAgQgDQgGAJAAARQAAASAGAIQAGAJAKAAQANABAGgIQAGgHAAgRIAAgEQABgUgHgHQgFgIgOAAQgKAAgGAJg");
	this.shape_43.setTransform(295.35,555.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQBTIAAh2IAgAAIAAB2gAgRhDQAAgPARAAQASAAAAAPQAAAIgFAFQgEADgJAAQgRABAAgRg");
	this.shape_44.setTransform(285.425,555.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgeA3QgNgIgHgOQgHgOAAgTQAAgcAPgRQAPgQAbAAQARAAAOAHQANAIAHAOQAHAOAAASQAAAdgPARQgQAQgbAAQgRAAgNgHgAgSgaQgGAJAAARQAAASAGAJQAGAJAMAAQANAAAGgJQAGgJAAgSQAAgRgGgJQgGgJgNAAQgMAAgGAJg");
	this.shape_45.setTransform(275.275,557.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQBAQgJgKAAgUIAAg5IgQAAIAAgOIASgLIAKgZIAUAAIAAAaIAhAAIAAAYIghAAIAAA5QAAAHAEADQAEAEAGAAQAJAAAMgEIAAAYQgNAGgRAAQgTAAgJgKg");
	this.shape_46.setTransform(263.625,556.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAXA9IAAhFQAAgNgFgGQgEgHgLAAQgNAAgFAJQgHAJAAAVIAAA4IggAAIAAh3IAYAAIAFAQIACAAQAGgJAJgFQAJgEAMAAQAVAAALALQAKAMABAVIAABNg");
	this.shape_47.setTransform(251.75,557.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgrA1QgKgKAAgTQAAgTAOgIQANgJAagBIAVgBIAAgFQAAgSgTAAQgNAAgTAJIgLgWQAUgLAZAAQAYAAANAKQANALAAAVIAABPIgXAAIgHgQIAAAAQgJAKgIAEQgIAEgOAAQgSAAgKgJgAAIAFQgNAAgHAFQgHAFAAAKQAAANAQAAQAKAAAHgGQAHgHAAgLIAAgJg");
	this.shape_48.setTransform(237.525,557.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAgAAIAAClg");
	this.shape_49.setTransform(227.9,555.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgrA1QgKgKAAgTQAAgTAOgIQANgJAagBIAVgBIAAgFQAAgSgTAAQgNAAgTAJIgLgWQAUgLAZAAQAYAAANAKQANALAAAVIAABPIgXAAIgHgQIAAAAQgJAKgIAEQgIAEgOAAQgSAAgKgJgAAIAFQgNAAgHAFQgHAFAAAKQAAANAQAAQAKAAAHgGQAHgHAAgLIAAgJg");
	this.shape_50.setTransform(217.575,557.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgeA3QgNgIgHgOQgHgOAAgTQAAgcAPgRQAPgQAbAAQARAAAOAHQANAIAHAOQAHAOAAASQAAAdgPARQgQAQgbAAQgRAAgNgHgAgSgaQgGAJAAARQAAASAGAJQAGAJAMAAQANAAAGgJQAGgJAAgSQAAgRgGgJQgGgJgNAAQgMAAgGAJg");
	this.shape_51.setTransform(204.525,557.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAFAUIABAAQAGgKAIgGQAKgGALAAIALABIgCAfIgKgBQgQAAgIAIQgIAIAAANIAAA9g");
	this.shape_52.setTransform(193.825,557.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgeA3QgNgIgHgOQgHgOAAgTQAAgcAPgRQAPgQAbAAQARAAAOAHQANAIAHAOQAHAOAAASQAAAdgPARQgQAQgbAAQgRAAgNgHgAgSgaQgGAJAAARQAAASAGAJQAGAJAMAAQANAAAGgJQAGgJAAgSQAAgRgGgJQgGgJgNAAQgMAAgGAJg");
	this.shape_53.setTransform(181.425,557.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgvABQAAgeAPgQQAPgQAcAAQAVAAAQAIIgJAZIgPgFQgGgCgHAAQgZAAABAkQgBAjAZAAQAKAAAIgDQAIgCAHgGIAAAcQgHAGgIABQgIACgNAAQg3AAAAg9g");
	this.shape_54.setTransform(169.1,557.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgrA1QgKgKAAgTQAAgTAOgIQANgJAagBIAVgBIAAgFQAAgSgTAAQgNAAgTAJIgLgWQAUgLAZAAQAYAAANAKQANALAAAVIAABPIgXAAIgHgQIAAAAQgJAKgIAEQgIAEgOAAQgSAAgKgJgAAIAFQgNAAgHAFQgHAFAAAKQAAANAQAAQAKAAAHgGQAHgHAAgLIAAgJg");
	this.shape_55.setTransform(150.625,557.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAXA9IAAhFQAAgNgFgGQgEgHgKAAQgNAAgGAJQgHAJABAVIAAA4IgiAAIAAh3IAZAAIAFAQIACAAQAGgJAJgFQAJgEAMAAQAVAAAKALQAMAMAAAVIAABNg");
	this.shape_56.setTransform(137.15,557.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgrA1QgKgKAAgTQAAgTAOgIQANgJAagBIAVgBIAAgFQAAgSgTAAQgNAAgTAJIgLgWQAUgLAZAAQAYAAANAKQANALAAAVIAABPIgXAAIgHgQIAAAAQgJAKgIAEQgIAEgOAAQgSAAgKgJgAAIAFQgNAAgHAFQgHAFAAAKQAAANAQAAQAKAAAHgGQAHgHAAgLIAAgJg");
	this.shape_57.setTransform(122.925,557.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAFAUIABAAQAGgKAIgGQAKgGALAAIALABIgCAfIgKgBQgQAAgIAIQgIAIAAANIAAA9g");
	this.shape_58.setTransform(112.775,557.825);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWBGIgDAAIgFAMIgZAAIAAilIAhAAIAAAmIgCAYIACAAQALgSAWAAQAVAAAMARQAMARAAAbQAAAegMARQgNAPgVAAQgUAAgMgOgAgQgFQgGAGAAARIAAAEQAAATAGAIQAFAJAMAAQAKAAAGgJQAGgKAAgRQAAgSgGgIQgGgIgLgBQgLAAgFAIg");
	this.shape_59.setTransform(100.575,555.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AA6A9IAAhFQAAgNgEgGQgEgHgKAAQgMAAgGAJQgGAIAAASIAAA8IgfAAIAAhFQAAgNgFgGQgEgHgJAAQgNAAgGAJQgFAKAAAUIAAA4IghAAIAAh3IAZAAIAEAQIACAAQAFgJAJgEQAJgFAMAAQAaAAAKASIADAAQAEgJAKgEQAJgFAMAAQAUAAALAKQAKALAAAXIAABNg");
	this.shape_60.setTransform(82.475,557.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgmAuQgQgQAAgdQAAgdAPgRQAPgQAZAAQAaAAAOAOQAOAPAAAZIAAAPIhMAAQAAAOAIAIQAIAIANAAQALAAAJgCQAKgCALgFIAAAZQgJAEgKACQgKACgOAAQgcAAgQgQgAAZgMQgBgNgGgGQgGgHgKAAQgKAAgGAHQgGAGAAANIAtAAIAAAAg");
	this.shape_61.setTransform(65.225,557.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AA1BOIAAhKIAAgLIABglIAAAAIgpB6IgdAAIgmh6IgBAAIACAxIAABJIgeAAIAAibIAtAAIAmB2IAAAAIAnh2IAtAAIAACbg");
	this.shape_62.setTransform(48.375,556.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAs0IAAZp");
	this.shape_63.setTransform(469,447.375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(134,53,53,0.749)").s().p("Eg1VAMtIAA5ZMBJRAAAMAhaAAAIAAZZg");
	this.shape_64.setTransform(341.35,610.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).to({state:[]},1).wait(9));

	// boton
	this.botonBack = new lib.botoninvisible();
	this.botonBack.name = "botonBack";
	this.botonBack.setTransform(331.9,274.9,2.4766,2.4766,0,0,0,102.5,102.3);
	this.botonBack._off = true;
	new cjs.ButtonHelper(this.botonBack, 0, 1, 2, false, new lib.botoninvisible(), 3);

	this.timeline.addTween(cjs.Tween.get(this.botonBack).wait(15).to({_off:false},0).to({_off:true},1).wait(9));

	// HUEVO
	this.instance = new lib._00egg();
	this.instance.setTransform(188.15,220.85,0.76,0.76,0,0,0,234.4,172.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:234.5,regY:172.5,scaleX:1.3,scaleY:1.3,x:-78,y:21.05},15,cjs.Ease.quadInOut).to({regX:234.4,regY:172.6,scaleX:0.76,scaleY:0.76,x:188.15,y:220.85},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.8,-203.2,1103.7,895.2);


(lib.MCfase2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
		
		var back = regresar.bind(this);
		
		this.botonBack.addEventListener("click", back);
		function regresar() {
			this.gotoAndPlay(16);
			console.log("desde 1");
			this.botonBack.removeEventListener("click", back);
		}
		
		/*
		var maxframe = this.currentFrame;
		var rewind = rebobinar.bind(this);
		
		this.botonBack.addEventListener("click", irRebobinar.bind(this));
		
		
		function rebobinar() {
			
			maxframe--;
			this.gotoAndStop(maxframe);
			console.log("está rebobinando");
		
			if (this.currentFrame == 0) {
				this.removeEventListener("tick", rewind);
				console.log("estamos en el frame" + this.currentFrame);
				this.parent.gotoAndStop(1);
				
			}
		}
		
		function irRebobinar() {
			this.addEventListener("tick", rewind);
			console.log("llamaste a rebobinar");
		}*/
	}
	this.frame_24 = function() {
		this.parent.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(9).call(this.frame_24).wait(1));

	// grafica
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAMIAAgXIAVAAIAAAXg");
	this.shape.setTransform(458.225,130.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIATAAQAAAJAEAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgPAAQgMAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_1.setTransform(449.7,125.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAIQgDAEgBAJIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAOIgGACIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLABIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAFAIABQALgBAIgFQAQgHAAgSIAAgPQgDACgGACg");
	this.shape_2.setTransform(438.325,125.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5A7IAAhPQAAgMgFgEQgGgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgDgFQgEgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgUAAIAAhyIAUAAIAAAQQAGgIAHgEQAJgHAMAAQANAAAJAHQAEAEAEAHQAGgJAJgEQAJgFAKAAQAYAAAIARQAFAJgBAPIAABMg");
	this.shape_3.setTransform(422.85,125.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgMgLg");
	this.shape_4.setTransform(408.2,125.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_5.setTransform(400.25,123.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6A7IAAhPQAAgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgDgFQgEgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAIgFAMAAQAWAAAJARQAEAJAAAPIAABMg");
	this.shape_6.setTransform(388.7,125.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKASAAQALAAAHgFQAJgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAAMAPQAHAKABALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgZAAgLgLg");
	this.shape_7.setTransform(367.95,125.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAIQgDAEgBAJIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAOIgGACIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLABIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAFAIABQALgBAIgFQAQgHAAgSIAAgPQgDACgGACg");
	this.shape_8.setTransform(356.575,125.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_9.setTransform(347.825,123.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_10.setTransform(333.075,125.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_11.setTransform(320.575,123.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgFAGgCAGQgCAGABALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_12.setTransform(302.7,125.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBDQgNgQAAgbQAAgcAOgRQAPgSAXAAQAXAAAPAPQAPAPAAAcQAAAcgNASQgOASgbAAQgYAAgOgQgAgZgIQgIAMAAATQAAATAIAMQAIAMARAAQATAAAHgOQAHgPAAgSQAAgQgFgJQgIgQgUAAQgRAAgIAOgAgTgzIATgfIAXAAIgbAfg");
	this.shape_13.setTransform(290.375,123.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_14.setTransform(281.95,123.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgIQgGgHgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_15.setTransform(274.125,125.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAIQgDAEgBAJIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAOIgGACIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLABIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAFAIABQALgBAIgFQAQgHAAgSIAAgPQgDACgGACg");
	this.shape_16.setTransform(262.675,125.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgIQgGgHgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_17.setTransform(250.925,125.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_18.setTransform(242.9,123.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKBQIAAhiIgQAAIAAgQIAQAAIAAgSQAAgMAEgFQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDgBQgJAAgBAGQgCAEAAASIATAAIAAAQIgTAAIAABig");
	this.shape_19.setTransform(237.425,123.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_20.setTransform(231.95,123.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_21.setTransform(223.45,125.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoAqQgEgIAAgPIAAhNIATAAIAABMQAAAIACAFQAGALAOAAQASAAAHgSQAEgJAAgRIAAg4IATAAIAAByIgSAAIAAgRQgDAGgGAFQgLAJgOAAQgYAAgJgRg");
	this.shape_22.setTransform(211.1,125.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAIQgDAEgBAJIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAOIgGACIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLABIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAFAIABQALgBAIgFQAQgHAAgSIAAgPQgDACgGACg");
	this.shape_23.setTransform(193.175,125.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_24.setTransform(184.425,123.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_25.setTransform(169.675,125.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIATAAQAAAJAFAFQAHAKARAAQALAAAJgFQAIgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_26.setTransform(158.2,125.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_27.setTransform(146.475,125.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_28.setTransform(133.975,123.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_29.setTransform(122.2,125.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgrBJQgKgKAAgOQAAgQAKgJQAKgJAQgCIAegEQAGgBADgEIABgHQAAgKgHgEQgHgFgMAAQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAOIgGACIgHAAQgKAAgEgHQgDgEgBgHQgGAIgLAGQgKAGgNAAQgQAAgKgKgAANAYIgLACIgKACQgLABgFADQgJAFAAALQAAAJAGAEQAGAFAIAAQALAAAIgFQAQgHAAgSIAAgQQgDADgGABgAgWgzIAUgfIAXAAIgcAfg");
	this.shape_30.setTransform(110.225,123.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKA5IgqhxIAWAAIAeBcIAghcIAVAAIgsBxg");
	this.shape_31.setTransform(98.35,125.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_32.setTransform(89.85,125.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_33.setTransform(79.375,125.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgHgEIgQgFIgPgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAAMAPQAIAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgYAAgLgLg");
	this.shape_34.setTransform(67.9,125.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUBLQgGgEgGgIIAAAOIgSAAIAAidIATAAIAAA5QAGgIAJgEQAJgFAJAAQAWAAAOAPQANAPAAAcQAAAbgNASQgOASgXAAQgMAAgJgGgAgWgNQgKAKAAAWQAAAQAEAKQAIATAUAAQAPAAAIgMQAIgNAAgUQAAgTgIgKQgIgMgPgBQgMABgKAJg");
	this.shape_35.setTransform(56.525,123.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_36.setTransform(43.975,125.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKASQAHgBADgKQAAgEAAgEIAAgBIAAgBIgKAAIAAgYIAVAAIAAAWQABAMgGAJQgFAKgLACg");
	this.shape_37.setTransform(490,107.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgGgEIgSgFIgOgEQgPgEgHgDQgMgIAAgOQgBgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQgBgHgDgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAIAFQAEACAIACIAMADQAWAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgZAAgMgLg");
	this.shape_38.setTransform(481.5,101.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMgBQgPAAgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_39.setTransform(470.125,101.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_40.setTransform(461.35,99.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_41.setTransform(455.9,101.475);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMgBQgPAAgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_42.setTransform(445.775,101.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_43.setTransform(432.925,99.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgGAGgBAGQgCAGABALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_44.setTransform(421.15,101.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgoArQgFgJABgPIAAhNIATAAIAABMQAAAIACAGQAGAKANAAQATAAAHgSQAEgJAAgQIAAg5IAUAAIAAByIgTAAIABgRQgEAGgFAFQgMAJgOAAQgYAAgJgQg");
	this.shape_45.setTransform(408.8,101.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNAAQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_46.setTransform(397.425,101.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_47.setTransform(385.625,101.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIASAAQACAJADAFQAIAKASAAQAKAAAIgFQAJgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_48.setTransform(374.15,101.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_49.setTransform(357.05,101.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_50.setTransform(345.325,101.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_51.setTransform(336.925,99.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMgBQgPAAgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_52.setTransform(328.625,101.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_53.setTransform(319.25,101.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgUBLQgGgEgGgIIAAAPIgSAAIAAieIATAAIAAA6QAGgJAJgEQAJgFAJABQAWAAAOAOQANAPAAAcQAAAbgNASQgOASgXAAQgMAAgJgGgAgWgMQgKAJAAAVQAAARAEAKQAIATAUAAQAPAAAIgMQAIgNAAgVQAAgRgIgLQgIgMgPAAQgMAAgKAKg");
	this.shape_54.setTransform(309.125,99.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_55.setTransform(296.575,101.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJAAANIAABBg");
	this.shape_56.setTransform(287.55,101.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_57.setTransform(277.075,101.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNAAQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_58.setTransform(265.675,101.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQALAAAIgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_59.setTransform(248.5,101.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMgBQgPAAgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_60.setTransform(237.125,101.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_61.setTransform(228.375,99.45);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgoArQgFgJABgPIAAhNIATAAIAABMQAAAIACAGQAGAKANAAQATAAAHgSQAEgJAAgQIAAg5IAUAAIAAByIgTAAIABgRQgEAGgFAFQgMAJgOAAQgYAAgJgQg");
	this.shape_62.setTransform(219.7,101.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNAAQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_63.setTransform(208.325,101.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgLBRIAAhyIASAAIAABygAgVgxIAUgfIAXAAIgcAfg");
	this.shape_64.setTransform(199.925,99.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgGgEIgSgFIgOgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgYAAgMgLg");
	this.shape_65.setTransform(191.15,101.675);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_66.setTransform(179.425,101.675);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgKA6IgqhzIAWAAIAeBdIAghdIAVAAIgsBzg");
	this.shape_67.setTransform(167.9,101.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_68.setTransform(150.125,101.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNAAQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_69.setTransform(138.725,101.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgIACgGAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_70.setTransform(127.05,101.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_71.setTransform(118.5,99.45);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNAAQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_72.setTransform(110.675,101.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAIgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJAAANIAABBg");
	this.shape_73.setTransform(95.95,101.475);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMgBQgPAAgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_74.setTransform(85.825,101.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AA6A7IAAhPQgBgMgFgEQgGgEgJAAQgLAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQAOAAAIAHQAEAEAEAHQAGgJAJgEQAJgFALAAQAWAAAJARQAEAJABAPIAABMg");
	this.shape_75.setTransform(70.35,101.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgoArQgEgJgBgPIAAhNIAUAAIAABMQAAAIACAGQAGAKAOAAQASAAAHgSQAEgJAAgQIAAg5IATAAIAAByIgSAAIAAgRQgDAGgGAFQgLAJgOAAQgYAAgJgQg");
	this.shape_76.setTransform(54.95,101.75);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAHAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgZAAgLgLg");
	this.shape_77.setTransform(43.5,101.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgJgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHABQgKAAgEgIQgDgEgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLACgFACQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_78.setTransform(499.325,77.65);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAIgIQAIgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_79.setTransform(489.95,77.475);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgJgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHABQgKAAgEgIQgDgEgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLACgFACQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_80.setTransform(479.825,77.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgyBSIAAifIATAAIAAAPQAGgIAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_81.setTransform(467.625,79.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgKASQAGgBAEgKQABgFAAgDIAAgBIgBgCIgKAAIAAgXIAVAAIAAAWQAAALgFAKQgFAKgLACg");
	this.shape_82.setTransform(452.1,83.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgGgEIgSgFIgOgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgZAAgLgLg");
	this.shape_83.setTransform(443.6,77.675);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_84.setTransform(431.875,77.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_85.setTransform(419.375,75.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKARAAQALAAAJgFQAIgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgPAAQgMAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_86.setTransform(402.1,77.675);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgJgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHABQgKAAgEgIQgDgEgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLACgFACQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_87.setTransform(390.725,77.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_88.setTransform(381.35,77.475);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAPIgHACIgIAAQgNAAgEgGg");
	this.shape_89.setTransform(373.925,76.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_90.setTransform(364.775,77.625);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAcA7IAAhIQAAgKgEgHQgFgKgOAAIgKABQgHACgHAHQgFAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIASAAIAAAQQAIgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_91.setTransform(346.6,77.475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_92.setTransform(334.275,77.675);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgLgHgGQgGgIgNABQgSAAgIASQgFALAAAQQAAARAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAXgNAKQgNALgUAAQgWAAgNgQg");
	this.shape_93.setTransform(322.875,77.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgoAqQgFgIABgPIAAhNIATAAIAABLQAAAJACAGQAGAKANAAQATAAAHgSQAEgKAAgQIAAg4IAUAAIAAByIgTAAIABgRQgEAHgFAEQgMAJgOAAQgYAAgJgRg");
	this.shape_94.setTransform(311.05,77.75);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_95.setTransform(298.575,75.625);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_96.setTransform(286.675,77.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJAAANIAABBg");
	this.shape_97.setTransform(277.65,77.475);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgyBSIAAifIATAAIAAAPQAGgIAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_98.setTransform(267.525,79.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_99.setTransform(248.875,77.675);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKARAAQALAAAJgFQAIgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_100.setTransform(237.4,77.675);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgKASQAHgBADgKQAAgFABgDIAAgBIgBgCIgKAAIAAgXIAVAAIAAAWQABALgGAKQgFAKgLACg");
	this.shape_101.setTransform(222.7,83.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_102.setTransform(217.85,77.475);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_103.setTransform(207.375,77.625);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_104.setTransform(198.95,75.45);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJAAANIAABBg");
	this.shape_105.setTransform(193.5,77.475);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_106.setTransform(183.025,77.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAPIgHACIgIAAQgNAAgEgGg");
	this.shape_107.setTransform(173.875,76.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAAMAPQAIAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgZAAgLgLg");
	this.shape_108.setTransform(165.45,77.675);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_109.setTransform(153.725,77.625);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgyBSIAAifIATAAIAAAPQAGgIAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_110.setTransform(141.875,79.75);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgkBRIgFgBIAAgSIAHACIAEAAQAFAAADgBIAEgFIAEgJIAFgMIgqh1IAVAAIAeBcIAfhcIAWAAIgSAyIgSAwQgRAsgGAKQgGAJgSAAg");
	this.shape_111.setTransform(123.95,79.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_112.setTransform(109.3,77.475);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_113.setTransform(98.825,77.625);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_114.setTransform(90.4,75.45);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIASAAIAAAUQADgGAIgIQAIgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_115.setTransform(84.95,77.475);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_116.setTransform(74.475,77.675);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAPIgHACIgIAAQgNAAgEgGg");
	this.shape_117.setTransform(65.325,76.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgFAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_118.setTransform(56.3,77.475);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgJgHgFQgHgFgMAAQgPABgHAHQgDAGgBAIIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHABQgKAAgEgIQgDgEgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLACgFACQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_119.setTransform(44.325,77.65);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgMgLg");
	this.shape_120.setTransform(504.95,53.675);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAIQgDAEgBAJIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAOIgGACIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLABIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAFAIABQALgBAIgFQAQgHAAgSIAAgPQgDACgGACg");
	this.shape_121.setTransform(493.575,53.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_122.setTransform(484.825,51.45);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgoAqQgEgIAAgPIAAhNIATAAIAABMQAAAIACAFQAGALAOAAQASAAAHgSQAEgJAAgRIAAg4IATAAIAAByIgSAAIAAgRQgDAGgGAFQgLAJgOAAQgYAAgJgRg");
	this.shape_123.setTransform(476.15,53.75);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgRg");
	this.shape_124.setTransform(464.775,53.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgLBRIAAhyIASAAIAABygAgVgxIAUgfIAXAAIgcAfg");
	this.shape_125.setTransform(456.375,51.275);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAHAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgZAAgLgLg");
	this.shape_126.setTransform(447.6,53.675);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_127.setTransform(435.875,53.675);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgKA5IgqhxIAWAAIAeBcIAghcIAVAAIgrBxg");
	this.shape_128.setTransform(424.35,53.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgMgLg");
	this.shape_129.setTransform(407.3,53.675);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAIQgDAEgBAJIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAOIgGACIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLABIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAFAIABQALgBAIgFQAQgHAAgSIAAgPQgDACgGACg");
	this.shape_130.setTransform(395.925,53.65);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_131.setTransform(387.175,51.45);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_132.setTransform(372.425,53.675);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_133.setTransform(359.925,51.625);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgFAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_134.setTransform(342.05,53.475);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgnBDQgNgQAAgbQAAgcAOgRQAPgSAXAAQAXAAAPAPQAPAPAAAcQAAAcgNASQgOASgbAAQgYAAgOgQgAgZgIQgIAMAAATQAAATAIAMQAIAMARAAQATAAAHgOQAHgPAAgSQAAgQgFgJQgIgQgUAAQgRAAgIAOgAgTgzIATgfIAXAAIgbAfg");
	this.shape_135.setTransform(329.725,51.475);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_136.setTransform(321.3,51.45);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgRg");
	this.shape_137.setTransform(313.475,53.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAIQgDAEgBAJIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAOIgGACIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLABIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAFAIABQALgBAIgFQAQgHAAgSIAAgPQgDACgGACg");
	this.shape_138.setTransform(302.025,53.65);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_139.setTransform(293.25,51.45);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgRg");
	this.shape_140.setTransform(285.425,53.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgIACgGAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_141.setTransform(273.75,53.475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_142.setTransform(261.425,53.675);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_143.setTransform(252.4,53.475);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_144.setTransform(241.925,53.675);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgKBQIAAhiIgQAAIAAgQIAQAAIAAgSQAAgMAEgFQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDgBQgJAAgBAGQgCAEAAASIATAAIAAAQIgTAAIAABig");
	this.shape_145.setTransform(232.875,51.35);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_146.setTransform(227.4,51.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_147.setTransform(218.475,51.625);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgkBRIgFgBIAAgSIAHACIAEAAQAGAAACgCIAEgEIAEgJIAFgMIgrh1IAXAAIAdBdIAfhdIAWAAIgSAzIgSAvQgRAsgGAJQgHAKgQAAg");
	this.shape_148.setTransform(201.2,55.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgMgLg");
	this.shape_149.setTransform(184.1,53.675);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_150.setTransform(172.375,53.675);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAcA7IAAhIQAAgKgEgHQgFgKgOAAIgKABQgHACgHAHQgFAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIASAAIAAAQQAIgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_151.setTransform(160.3,53.475);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_152.setTransform(147.975,53.625);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_153.setTransform(139.55,51.45);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKARAAQALAAAJgFQAIgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_154.setTransform(131.65,53.675);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_155.setTransform(123.7,51.45);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgKA5IgqhxIAWAAIAeBcIAghcIAVAAIgrBxg");
	this.shape_156.setTransform(115.75,53.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_157.setTransform(107.85,51.45);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_158.setTransform(98.925,51.625);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_159.setTransform(84.1,53.475);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_160.setTransform(73.625,53.625);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("Ag6BPIAAidIBGAAQAVAAANAMQANAMgBAVQAAATgLANQgMAOgXAAIgxAAIAABCgAglgFIAqAAQAOAAAJgGQAJgGAAgQQAAgRgNgGQgHgEgMAAIgqAAg");
	this.shape_161.setTransform(60.75,51.45);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_162.setTransform(220.5,25.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgrA1QgKgKAAgTQAAgTAOgIQANgJAagBIAVgBIAAgFQAAgSgTAAQgNAAgTAJIgLgWQAUgLAZAAQAYAAANAKQANALAAAVIAABPIgXAAIgHgQIAAAAQgJAKgIAEQgIAEgOAAQgSAAgKgJgAAIAFQgNAAgHAFQgHAFAAAKQAAANAQAAQAKAAAHgGQAHgHAAgLIAAgJg");
	this.shape_163.setTransform(210.175,27.925);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAFAUIABAAQAGgKAIgGQAKgGALAAIALABIgCAfIgKgBQgQAAgIAIQgIAIAAANIAAA9g");
	this.shape_164.setTransform(200.025,27.825);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgWBGIgDAAIgFAMIgZAAIAAilIAhAAIAAAmIgCAYIACAAQALgSAWAAQAVAAAMARQAMAQAAAcQAAAegMARQgNAPgVAAQgUAAgMgOgAgQgFQgGAGAAARIAAAEQAAATAGAJQAFAIAMAAQAKAAAGgJQAGgKAAgRQAAgSgGgHQgGgJgLAAQgLgBgFAIg");
	this.shape_165.setTransform(187.825,25.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgmAuQgQgQAAgdQAAgdAPgRQAPgQAZAAQAaAAAOAOQAOAPAAAZIAAAPIhMAAQAAAOAIAIQAIAIANAAQALAAAJgCQAKgCALgFIAAAZQgJAEgKACQgKACgOAAQgcAAgQgQgAAZgMQgBgNgGgGQgGgHgKAAQgKAAgGAHQgGAGAAANIAtAAIAAAAg");
	this.shape_166.setTransform(174.075,27.925);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAFAUIABAAQAGgKAIgGQAKgGALAAIALABIgCAfIgKgBQgQAAgIAIQgIAIAAANIAAA9g");
	this.shape_167.setTransform(163.675,27.825);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgmAuQgQgQAAgdQAAgdAPgRQAPgQAZAAQAaAAAOAOQAOAPAAAZIAAAPIhMAAQAAAOAIAIQAIAIANAAQALAAAJgCQAKgCALgFIAAAZQgJAEgKACQgKACgOAAQgcAAgQgQgAAZgMQgBgNgGgGQgGgHgKAAQgKAAgGAHQgGAGAAANIAtAAIAAAAg");
	this.shape_168.setTransform(151.625,27.925);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgvABQAAgeAPgQQAQgQAbAAQAVAAAQAIIgJAZIgPgFQgHgCgGAAQgZAAAAAkQAAAjAZAAQAJAAAJgDQAHgCAJgGIAAAcQgJAGgHABQgJACgMAAQg3AAAAg9g");
	this.shape_169.setTransform(139.6,27.925);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgrA1QgKgKAAgTQAAgTAOgIQANgJAagBIAVgBIAAgFQAAgSgTAAQgNAAgTAJIgLgWQAUgLAZAAQAYAAANAKQANALAAAVIAABPIgXAAIgHgQIAAAAQgJAKgIAEQgIAEgOAAQgSAAgKgJgAAIAFQgNAAgHAFQgHAFAAAKQAAANAQAAQAKAAAHgGQAHgHAAgLIAAgJg");
	this.shape_170.setTransform(121.125,27.925);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_171.setTransform(111.5,25.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgrAyQgMgMAAgVIAAhNIAhAAIAABFQABANAEAGQAEAHAKAAQANAAAGgJQAHgKgBgTIAAg5IAiAAIAAB3IgaAAIgEgQIgCAAQgFAJgKAEQgJAFgMAAQgVAAgKgLg");
	this.shape_172.setTransform(100.9,28.05);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgvABQAAgeAPgQQAPgQAcAAQAVAAAQAIIgJAZIgPgFQgGgCgHAAQgZAAABAkQgBAjAZAAQAJAAAJgDQAHgCAIgGIAAAcQgIAGgHABQgJACgMAAQg3AAAAg9g");
	this.shape_173.setTransform(88.2,27.925);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgcBUIAAh3IAgAAIAAB3gAgegwIAAgDQATgVAHgLIAjAAIAAACIgTARIgUAQg");
	this.shape_174.setTransform(80.35,25.525);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgbA9QgJgCgJgEIAAgbQAKAFALADQAMACAJAAQAQAAAAgKQAAgEgCgCIgJgGIgOgHQgOgGgGgEQgGgEgEgHQgDgGAAgKQAAgQANgIQAMgJAWAAQAVAAAVAJIgKAYIgRgGQgHgDgJAAQgNAAAAAIQAAAEAEAEIAUAJQAOAGAHAFQAGAEAEAGQACAHAAAJQABASgNAKQgNAJgZAAQgNAAgJgBg");
	this.shape_175.setTransform(70.35,27.925);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgmAuQgQgQAAgdQAAgdAPgRQAPgQAZAAQAaAAAOAOQAOAPAAAZIAAAPIhMAAQAAAOAIAIQAIAIANAAQALAAAJgCQAKgCALgFIAAAZQgJAEgKACQgKACgOAAQgcAAgQgQgAAZgMQgBgNgGgGQgGgHgKAAQgKAAgGAHQgGAGAAANIAtAAIAAAAg");
	this.shape_176.setTransform(58.375,27.925);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgRBOIg2ibIAiAAIAdBcIAGATIACAPQABgKAHgYIAehcIAhAAIg1Cbg");
	this.shape_177.setTransform(45.15,26.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAALzIAA3l");
	this.shape_178.setTransform(359,262.55);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(134,53,53,0.749)").s().p("ACxOqMg4GAAAIAA9TMBqrAAAIAAdTg");
	this.shape_179.setTransform(341.35,93.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).to({state:[]},1).wait(9));

	// boton
	this.botonBack = new lib.botoninvisible();
	this.botonBack.name = "botonBack";
	this.botonBack.setTransform(331.9,450.95,2.4766,2.4766,0,0,0,102.5,102.3);
	this.botonBack._off = true;
	new cjs.ButtonHelper(this.botonBack, 0, 1, 2, false, new lib.botoninvisible(), 3);

	this.timeline.addTween(cjs.Tween.get(this.botonBack).wait(15).to({_off:false},0).to({_off:true},1).wait(9));

	// HUEVO
	this.instance = new lib._00egg();
	this.instance.setTransform(188.15,220.85,0.76,0.76,0,0,0,234.4,172.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:234.5,regY:172.5,scaleX:1.3,scaleY:1.3,x:184,y:216},15,cjs.Ease.quadInOut).to({regX:234.4,regY:172.6,scaleX:0.76,scaleY:0.76,x:188.15,y:220.85},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.8,-8.2,1103.7,787.8000000000001);


(lib.MCfase1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
		
		var back = regresar.bind(this);
		
		this.botonBack.addEventListener("click", back);
		function regresar() {
			this.gotoAndPlay(16);
			console.log("desde 1");
			this.botonBack.removeEventListener("click", back);
		}
		
		/*
		var maxframe = this.currentFrame;
		var rewind = rebobinar.bind(this);
		
		this.botonBack.addEventListener("click", irRebobinar.bind(this));
		
		
		function rebobinar() {
			
			maxframe--;
			this.gotoAndStop(maxframe);
			console.log("está rebobinando");
		
			if (this.currentFrame == 0) {
				this.removeEventListener("tick", rewind);
				console.log("estamos en el frame" + this.currentFrame);
				this.parent.gotoAndStop(1);
				
			}
		}
		
		function irRebobinar() {
			this.addEventListener("tick", rewind);
			console.log("llamaste a rebobinar");
		}*/
	}
	this.frame_24 = function() {
		this.parent.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(9).call(this.frame_24).wait(1));

	// grafica
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgjApQgMgPAAgYQAAgZANgQQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHANAAAPQAAARAHALQAHALAPAAQARAAAGgNQAHgNAAgPQAAgPgFgJQgHgPgSAAQgPAAgHANg");
	this.shape.setTransform(176.675,102.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgMBdIgEgBIAAgPQALAAADgCQACgCAAgJIAAh0IARAAIAAB2QAAAMgDAFQgHAKgQAAgAAAhHIAAgVIARAAIAAAVg");
	this.shape_1.setTransform(168.2,102.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ag0A2QgRgVAAggQAAgcAPgVQASgbAkAAQAlAAATAZQAOATAAAeQAAAfgQAVQgUAZgiAAQghAAgTgWgAgjgqQgOAPAAAdQAAAYAMAQQAMARAaAAQAaAAAMgTQALgSAAgXQAAgZgNgQQgNgPgXAAQgWAAgOAPg");
	this.shape_2.setTransform(159.075,100.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmBCbQhkAAAAhkIAAhtQAAhkBkAAIMDAAQBkAAAABkIAABtQAABkhkAAg");
	this.shape_3.setTransform(165.95,106.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

	// boton
	this.botonBack = new lib.botoninvisible();
	this.botonBack.name = "botonBack";
	this.botonBack.setTransform(355.45,374.95,3.0261,2.4766,0,0,0,102.5,102.3);
	this.botonBack._off = true;
	new cjs.ButtonHelper(this.botonBack, 0, 1, 2, false, new lib.botoninvisible(), 3);

	this.timeline.addTween(cjs.Tween.get(this.botonBack).wait(15).to({_off:false},0).to({_off:true},1).wait(9));

	// HUEVO
	this.instance = new lib._00egg();
	this.instance.setTransform(188.15,220.85,0.76,0.76,0,0,0,234.4,172.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:234.5,regY:172.5,scaleX:1.3,scaleY:1.3,x:186,y:101.45},15,cjs.Ease.quadInOut).to({regX:234.4,regY:172.6,scaleX:0.76,scaleY:0.76,x:188.15,y:220.85},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.8,-122.8,1103.7,787.8);


// stage content:
(lib.nemaprueba = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5];
	// timeline functions:
	this.frame_0 = function() {
		var uno = reproducir1.bind(this);
		
		
		this.bot1.addEventListener("click", uno);
		
		function reproducir1() {
			this.gotoAndStop(2);
			console.log("chalazas");
			/*this.miBoton.removeEventListener("click", repro);*/
			
		}
		
		var dos = reproducir2.bind(this);
		
		this.bot2.addEventListener("click", dos);
		
		function reproducir2() {
			this.gotoAndStop(3);
			console.log("area pelucida");
			/*this.botonAlbu.removeEventListener("click", albu);*/
			
		}
		
		var tres = reproducir3.bind(this);
		this.bot3.addEventListener("click", tres);
		function reproducir3() {
			this.gotoAndStop(4);
			console.log("area opaca");
			/*this.botonDisco.removeEventListener("click", disc);*/
			
		}
		
		var cuatro = reproducir4.bind(this);
		this.bot4.addEventListener("click", cuatro);
		function reproducir4() {
			this.gotoAndStop(5);
			console.log("area pelucida");
		}
		
		/*var cinco = reproducir5.bind(this);
		this.bot5.addEventListener("click", cinco);
		function reproducir5() {
			this.gotoAndStop(6);
			console.log("area opaca");
		}
		
		var seis = reproducir6.bind(this);
		this.bot6.addEventListener("click", seis);
		function reproducir6() {
			this.gotoAndStop(7);
			console.log("area opaca");
		}*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
		this.MC1.gotoAndPlay(1);
	}
	this.frame_3 = function() {
		this.stop();
		this.MC2.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		this.stop();
		this.MC3.gotoAndPlay(1);
	}
	this.frame_5 = function() {
		this.stop();
		this.MC4.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// boton
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgjApQgMgPAAgYQAAgZANgQQANgPAVAAQAVAAANANQAOAOAAAaQAAAXgMARQgMAQgZAAQgVABgNgPgAgWgbQgHANAAAPQAAARAHALQAHALAPAAQARAAAGgMQAHgOAAgPQAAgPgFgJQgHgPgSAAQgPAAgHANg");
	this.shape.setTransform(163.575,518.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AggAoQgMgPAAgWQAAgbANgPQAOgPATAAQASAAALAIQALAJADAVIgSAAQgBgKgGgGQgFgHgNAAQgPAAgIARQgEAKAAAPQAAAQAGAKQAHALANAAQALAAAHgGQAGgHACgMIASAAQgDAVgMAKQgMAJgSAAQgUAAgMgPg");
	this.shape_1.setTransform(153.225,518.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgIBIIAAhnIARAAIAABngAgIgzIAAgUIARAAIAAAUg");
	this.shape_2.setTransform(145.95,516.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Ag0BIIAAiPIA/AAQATAAAMALQALALAAATQAAARgKANQgKALgWAAIgsAAIAAA9gAghgEIAmAAQANAAAIgGQAIgFAAgOQAAgQgMgGQgGgDgLAAIgmAAg");
	this.shape_3.setTransform(137.475,516.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmBCbQhkAAAAhkIAAhtQAAhkBkAAIMDAAQBkAAAABkIAABtQAABkhkAAg");
	this.shape_4.setTransform(148.95,521.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_5.setTransform(536.625,79.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgnAuQgKgIAAgOQABgOAIgIQAKgHAOgCIAbgEQAHAAACgFIAAgGQABgJgHgEQgGgFgLAAQgNAAgHAIQgCAEgBAIIgRAAQAAgTAMgIQAMgHAQAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIADAAIACgBIAAANIgGACIgGAAQgJAAgEgGQgCgEgBgGQgGAHgKAFQgIAFgNAAQgOAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAGAEQAFAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_6.setTransform(529.05,81.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgYA2IAAhoIAQAAIAAASQACgGAHgHQAIgHALAAIACAAIADAAIAAATIgCgBIgDAAQgOAAgGAJQgHAIAAALIAAA8g");
	this.shape_7.setTransform(520.55,80.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgTBEQgFgEgFgHIAAANIgQAAIAAiPIARAAIAAA0QAGgHAIgEQAIgEAIAAQAUAAAMANQAMAOAAAZQAAAZgMAQQgMARgVAAQgLAAgJgGgAgUgLQgJAIAAAUQAAAPAEAJQAGARATAAQAOAAAHgLQAHgMAAgSQAAgRgHgKQgHgKgOAAQgLAAgJAJg");
	this.shape_8.setTransform(511.325,79.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AghApQgNgOAAgaQAAgYANgPQANgQAVAAQALAAALAFQAKAFAGAJQAFAHACALQACAHgBAPIhKAAQAAAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgFAHgEAEQgIAIgMADQgHABgGAAQgTAAgOgOgAAdgIQgBgLgDgHQgIgNgRAAQgLAAgHAJQgJAJAAANIA4AAIAAAAg");
	this.shape_9.setTransform(499.9,81.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgZA2IAAhoIARAAIAAASQACgGAHgHQAIgHAKAAIACAAIAFAAIAAATIgEgBIgDAAQgNAAgGAJQgHAIAAALIAAA8g");
	this.shape_10.setTransform(491.7,80.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AghApQgOgOAAgaQAAgYAOgPQANgQAWAAQALAAAKAFQALAFAFAJQAFAHACALQABAHAAAPIhKAAQAAAQAGAKQAIAJAOAAQANAAAIgJQAFgFACgHIARAAQgBAGgEAHQgDAHgGAEQgHAIgMADQgGABgHAAQgTAAgOgOgAAegIQgCgLgEgHQgHgNgQAAQgMAAgHAJQgJAJAAANIA5AAIAAAAg");
	this.shape_11.setTransform(482.15,81.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AggAoQgMgPAAgWQAAgbANgPQAOgPATAAQASAAALAIQALAJADAVIgSAAQgBgKgGgGQgFgHgNAAQgPAAgIARQgEAKAAAPQAAAQAGAKQAHALANAAQALAAAHgGQAGgHACgMIASAAQgDAVgMAKQgMAJgSAAQgUAAgMgPg");
	this.shape_12.setTransform(471.775,80.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgnAuQgKgIAAgOQAAgOAJgIQAKgHAPgCIAbgEQAFAAADgFIABgGQAAgJgHgEQgGgFgLAAQgOAAgGAIQgCAEgBAIIgRAAQAAgTAMgIQANgHAPAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAEAAIACgBIAAANIgGACIgFAAQgKAAgEgGQgCgEgBgGQgFAHgLAFQgJAFgLAAQgPAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAGAEQAFAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_13.setTransform(535.15,69.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_14.setTransform(527.225,67.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgkAnQgEgIAAgOIAAhGIASAAIAABFQgBAIADAFQAFAJAMAAQARAAAHgQQADgJAAgOIAAg0IARAAIAABoIgQAAIAAgQQgEAGgFAEQgJAJgNAAQgWAAgIgPg");
	this.shape_15.setTransform(519.3,69.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AggAoQgMgPAAgWQAAgbANgPQAOgPATAAQASAAALAIQALAJADAVIgSAAQgBgKgGgGQgFgHgNAAQgPAAgIARQgEAKAAAPQAAAQAGAKQAHALANAAQALAAAHgGQAGgHACgMIASAAQgDAVgMAKQgMAJgSAAQgUAAgMgPg");
	this.shape_16.setTransform(508.975,68.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgKBJIAAhnIARAAIAABngAgTgsIASgcIAVAAIgZAcg");
	this.shape_17.setTransform(501.325,66.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AggAtQgKgKgBgQIARAAQABAJAEAEQAGAJAQAAQAKAAAIgEQAHgFAAgIQAAgHgGgEIgPgFIgNgDQgOgEgGgDQgMgHAAgMQAAgPALgJQALgKASAAQAXAAALAOQAGAJAAAKIgRAAQAAgGgEgFQgGgGgOAAQgLAAgFADQgFAEAAAGQAAAHAHAEQAEADAIACIAKACQAUAFAGADQALAHAAAOQAAAOgLALQgLAKgWAAQgWAAgKgLg");
	this.shape_18.setTransform(493.375,69.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AghApQgNgOAAgaQAAgYANgPQANgQAWAAQALAAAKAFQAKAFAGAJQAFAHACALQACAHgBAPIhKAAQAAAQAGAKQAIAJAOAAQANAAAIgJQAFgFABgHIASAAQgBAGgEAHQgDAHgGAEQgHAIgMADQgHABgGAAQgTAAgOgOgAAdgIQgBgLgDgHQgIgNgQAAQgMAAgHAJQgJAJAAANIA4AAIAAAAg");
	this.shape_19.setTransform(482.7,69.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgJBIIg1iPIAWAAIAoB5IAph5IAWAAIg1CPg");
	this.shape_20.setTransform(471.825,67.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AolE0QiWAAAAiWIAAk7QAAiWCWAAIRLAAQCWAAAACWIAAE7QAACWiWAAg");
	this.shape_21.setTransform(502.45,81.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgjApQgMgPAAgYQAAgZANgQQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHANAAAPQAAARAHALQAHALAPAAQARAAAGgNQAHgNAAgPQAAgPgFgJQgHgPgSAAQgPAAgHANg");
	this.shape_22.setTransform(176.675,102.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgMBdIgEgBIAAgPQALAAADgCQACgCAAgJIAAh0IARAAIAAB2QAAAMgDAFQgHAKgQAAgAAAhHIAAgVIARAAIAAAVg");
	this.shape_23.setTransform(168.2,102.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("Ag0A2QgRgVAAggQAAgcAPgVQASgbAkAAQAlAAATAZQAOATAAAeQAAAfgQAVQgUAZgiAAQghAAgTgWgAgjgqQgOAPAAAdQAAAYAMAQQAMARAaAAQAaAAAMgTQALgSAAgXQAAgZgNgQQgNgPgXAAQgWAAgOAPg");
	this.shape_24.setTransform(159.075,100.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AmBCbQhkAAAAhkIAAhtQAAhkBkAAIMDAAQBkAAAABkIAABtQAABkhkAAg");
	this.shape_25.setTransform(165.95,106.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgnAuQgKgIAAgOQAAgOAJgIQAKgHAPgCIAbgEQAGAAACgFIABgGQAAgJgHgEQgGgFgLAAQgOAAgFAIQgDAEgCAIIgQAAQAAgTANgIQAMgHAPAAQASAAALAHQAMAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAEAAIACgBIAAANIgGACIgFAAQgKAAgEgGQgCgEgBgGQgFAHgLAFQgJAFgLAAQgPAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAGAEQAFAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_26.setTransform(581.85,538.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AghApQgNgOAAgaQAAgYANgPQANgQAVAAQAMAAAKAFQAKAFAGAJQAFAHACALQACAHgBAPIhKAAQAAAQAGAKQAIAJAOAAQANAAAIgJQAFgFABgHIASAAQgBAGgEAHQgDAHgGAEQgHAIgMADQgHABgGAAQgTAAgOgOgAAdgIQgBgLgDgHQgIgNgQAAQgMAAgHAJQgJAJAAANIA4AAIAAAAg");
	this.shape_27.setTransform(570.45,538.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AggA7QgNgOAAgZQAAgWALgQQAMgRAWAAQALAAAIAFQAEADAGAHIAAg1IARAAIAACPIgQAAIAAgOQgGAJgIAFQgJAEgJAAQgSAAgMgPgAgTgKQgIAKAAATQAAARAHALQAHAMAPAAQAMAAAIgLQAIgKAAgUQAAgTgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_28.setTransform(559.075,536.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgIBIIAAhnIARAAIAABngAgIgzIAAgUIARAAIAAAUg");
	this.shape_29.setTransform(551.7,536.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgjApQgMgOAAgZQAAgaANgPQANgQAVAAQAVAAANAOQAOANAAAaQAAAYgMARQgMARgZAAQgVAAgNgPgAgWgbQgHAMAAARQAAAQAHAMQAHALAPgBQARABAGgNQAHgOAAgPQAAgOgFgKQgHgPgSAAQgPAAgHANg");
	this.shape_30.setTransform(543.825,538.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AALBEQgMAAgDgGQgFgHAAgKIAAhEIgOAAIAAgOIAOAAIAAgeIAQAAIAAAeIARAAIAAAOIgRAAIAABDQAAAGAFACIAGABIADAAIADgBIAAAOIgGACg");
	this.shape_31.setTransform(535.5,536.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AAZA2IAAhBQAAgKgDgGQgFgJgMAAIgJABQgIACgFAHQgEAEgBAGQgCAFAAALIAAA2IgRAAIAAhoIAQAAIAAAPQAIgJAIgFQAIgEAJAAQAWAAAJAQQADAJAAAPIAABDg");
	this.shape_32.setTransform(527.3,538.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgnAuQgJgIAAgOQgBgOAKgIQAIgHAPgCIAcgEQAFAAACgFIACgGQgBgJgFgEQgHgFgLAAQgOAAgFAIQgEAEgBAIIgQAAQABgTAMgIQAMgHAQAAQARAAALAHQAMAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIADAAIAEgBIAAANIgHACIgGAAQgJAAgEgGQgCgEgBgGQgFAHgKAFQgKAFgMAAQgOAAgJgJgAAMACIgKACIgKABQgJACgFACQgIAFAAAKQAAAIAFAEQAGAEAIAAQAJAAAIgEQAOgHAAgQIAAgNIgIACg");
	this.shape_33.setTransform(516.4,538.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_34.setTransform(508.475,536.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgnAuQgKgIABgOQAAgOAJgIQAIgHAPgCIAbgEQAHAAABgFIABgGQAAgJgFgEQgHgFgLAAQgNAAgHAIQgDAEgBAIIgQAAQABgTAMgIQALgHARAAQARAAALAHQAMAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIACAAIAEgBIAAANIgHACIgGAAQgJAAgEgGQgCgEgBgGQgGAHgJAFQgKAFgMAAQgOAAgJgJgAAMACIgKACIgKABQgJACgFACQgIAFAAAKQAAAIAFAEQAGAEAIAAQAJAAAIgEQAOgHAAgQIAAgNIgIACg");
	this.shape_35.setTransform(500.9,538.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgjApQgMgOAAgZQAAgaANgPQANgQAVAAQAVAAANAOQAOANAAAaQAAAYgMARQgMARgZAAQgVAAgNgPgAgWgbQgHAMAAARQAAAQAHAMQAHALAPgBQARABAGgNQAHgOAAgPQAAgOgFgKQgHgPgSAAQgPAAgHANg");
	this.shape_36.setTransform(489.475,538.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgZA2IAAhoIARAAIAAASQACgGAHgHQAIgHAKgBIADAAIADABIAAASIgCAAIgEAAQgNAAgGAJQgHAIAAALIAAA8g");
	this.shape_37.setTransform(481.3,538.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgjApQgMgOAAgZQAAgaANgPQANgQAVAAQAVAAANAOQAOANAAAaQAAAYgMARQgMARgZAAQgVAAgNgPgAgWgbQgHAMAAARQAAAQAHAMQAHALAPgBQARABAGgNQAHgOAAgPQAAgOgFgKQgHgPgSAAQgPAAgHANg");
	this.shape_38.setTransform(471.725,538.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AggAoQgMgPAAgWQAAgbANgPQAOgPATAAQASAAALAIQALAJADAVIgSAAQgBgKgGgGQgFgHgNAAQgPAAgIARQgEAKAAAPQAAAQAGAKQAHALANAAQALAAAHgGQAGgHACgMIASAAQgDAVgMAKQgMAJgSAAQgUAAgMgPg");
	this.shape_39.setTransform(461.375,538.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgnAuQgKgIAAgOQABgOAIgIQAKgHAOgCIAbgEQAHAAABgFIABgGQABgJgHgEQgGgFgLAAQgNAAgHAIQgCAEgBAIIgRAAQAAgTAMgIQAMgHAQAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIACAAIADgBIAAANIgGACIgGAAQgJAAgEgGQgCgEgBgGQgGAHgKAFQgIAFgNAAQgOAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAFAEQAGAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_40.setTransform(564.15,526.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AAZA2IAAhCQAAgJgDgGQgEgKgNAAIgJACQgIACgFAHQgFAFAAAFQgCAGAAAJIAAA3IgRAAIAAhoIAQAAIAAAPQAHgKAJgEQAIgDAJAAQAXAAAIAPQADAJAAAPIAABDg");
	this.shape_41.setTransform(552.85,526.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgnAuQgKgIABgOQAAgOAJgIQAIgHAPgCIAbgEQAHAAABgFIABgGQAAgJgFgEQgHgFgLAAQgOAAgFAIQgEAEgBAIIgQAAQABgTAMgIQAMgHAQAAQARAAALAHQAMAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIADAAIAEgBIAAANIgHACIgGAAQgJAAgEgGQgCgEgBgGQgFAHgKAFQgKAFgMAAQgOAAgJgJgAAMACIgKACIgKABQgJACgFACQgIAFAAAKQAAAIAFAEQAGAEAIAAQAJAAAIgEQAOgHAAgQIAAgNIgIACg");
	this.shape_42.setTransform(541.95,526.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgYA2IAAhoIAQAAIAAASQACgFAHgIQAIgIALABIABAAIAFAAIAAATIgEgBIgCAAQgOAAgGAJQgHAIAAAMIAAA7g");
	this.shape_43.setTransform(533.45,526.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgTBEQgFgEgFgHIAAANIgQAAIAAiPIARAAIAAA0QAGgHAIgEQAIgEAIAAQAUAAAMANQAMAOAAAZQAAAZgMAQQgMARgVAAQgLAAgJgGgAgUgLQgJAIAAAUQAAAPAEAJQAGARATAAQAOAAAHgLQAHgMAAgSQAAgRgHgKQgHgKgOAAQgLAAgJAJg");
	this.shape_44.setTransform(524.225,524.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AA0A2IAAhIQAAgLgFgDQgFgEgIgBQgKABgIAGQgHAIAAAQIAAA8IgRAAIAAhEQAAgKgDgGQgEgGgLgBQgJAAgJAIQgIAIAAAUIAAA3IgRAAIAAhoIARAAIAAAPQAGgIAFgEQAJgFALAAQANAAAHAFQADAEAEAHQAGgJAIgEQAIgDAKAAQAVAAAHAPQAEAIAAAOIAABFg");
	this.shape_45.setTransform(510.125,526.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AghApQgNgOgBgaQABgYANgPQAOgQAUAAQAMAAAKAFQALAFAFAJQAFAHACALQACAHAAAPIhMAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgEAHgFAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAegIQgCgLgDgHQgIgNgRAAQgKAAgJAJQgIAJgBANIA6AAIAAAAg");
	this.shape_46.setTransform(496.15,526.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AAyBIIAAhUIAAgOIABgWIgpB4IgTAAIgph4IAAAEIABAQIAAAQIAABUIgTAAIAAiPIAcAAIApB5IAoh5IAcAAIAACPg");
	this.shape_47.setTransform(482.4,524.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ArZE0QiWAAAAiWIAAk7QAAiWCWAAIWzAAQCWAAAACWIAAE7QAACWiWAAg");
	this.shape_48.setTransform(521.25,539.925);

	this.bot2 = new lib.botoninvisible();
	this.bot2.name = "bot2";
	this.bot2.setTransform(503.4,79.55,1.0376,0.6345,0,0,0,102.8,102.5);
	new cjs.ButtonHelper(this.bot2, 0, 1, 2, false, new lib.botoninvisible(), 3);

	this.bot3 = new lib.botoninvisible();
	this.bot3.name = "bot3";
	this.bot3.setTransform(520.2,540.1,1.012,0.757,0,0,0,102.6,102.8);
	new cjs.ButtonHelper(this.bot3, 0, 1, 2, false, new lib.botoninvisible(), 3);

	this.bot4 = new lib.botoninvisible();
	this.bot4.name = "bot4";
	this.bot4.setTransform(149.7,526.55,0.8355,0.4342,0,0,0,102.7,103);
	new cjs.ButtonHelper(this.bot4, 0, 1, 2, false, new lib.botoninvisible(), 3);

	this.bot1 = new lib.botoninvisible();
	this.bot1.name = "bot1";
	this.bot1.setTransform(167.35,107.15,0.8559,0.416,0,0,0,102.7,102.5);
	new cjs.ButtonHelper(this.bot1, 0, 1, 2, false, new lib.botoninvisible(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bot1},{t:this.bot4},{t:this.bot3},{t:this.bot2},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(4));

	// Capa_1
	this.instance = new lib.figura3a();
	this.instance.setTransform(-74,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(4));

	// HUEVO
	this.instance_1 = new lib._00egg();
	this.instance_1.setTransform(262.7,275.15,0.76,0.76,0,0,0,332.5,244);

	this.MC1 = new lib.MCfase1();
	this.MC1.name = "MC1";
	this.MC1.setTransform(0,-6,1,1,0,0,0,0,-6);

	this.MC2 = new lib.MCfase2();
	this.MC2.name = "MC2";
	this.MC2.setTransform(0,-6,1,1,0,0,0,0,-6);

	this.MC3 = new lib.MCfase3();
	this.MC3.name = "MC3";
	this.MC3.setTransform(0,-6,1,1,0,0,0,0,-6);

	this.MC4 = new lib.MCfase4();
	this.MC4.name = "MC4";
	this.MC4.setTransform(0,-6,1,1,0,0,0,0,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.MC1}]},2).to({state:[{t:this.MC2}]},1).to({state:[{t:this.MC3}]},1).to({state:[{t:this.MC4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(976,500,1124,522);
// library properties:
lib.properties = {
	id: 'C91C0BABA5EC434E8F6AD1DABE3ADEA1',
	width: 2100,
	height: 1000,
	fps: 24,
	color: "#990000",
	opacity: 1.00,
	manifest: [
		{src:"images/dia6.png?1764026496355", id:"dia6"},
		{src:"images/figura3a.png?1764026496355", id:"figura3a"}
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
an.compositions['C91C0BABA5EC434E8F6AD1DABE3ADEA1'] = {
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