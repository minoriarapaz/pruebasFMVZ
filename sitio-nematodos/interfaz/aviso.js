(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"aviso_atlas_1", frames: [[0,0,100,119]]}
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



(lib.manocursor = function() {
	this.initialize(ss["aviso_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.pointer = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.manocursor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pointer, new cjs.Rectangle(0,0,100,119), null);


(lib.hojablanca = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#1E90FF").ss(3,1,1).p("ATivnIAAfPAzhPoIAA/P");
	this.shape.setTransform(125,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFAFA").s().p("AzhPoIAA/PMAnDAAAIAAfPg");
	this.shape_1.setTransform(125,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hojablanca, new cjs.Rectangle(-1.5,-1.5,253,203), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333334").s().p("AC5BfQgPgDgegIQg+gQhOgOQgvgIhggOQhEgLgqAEIAAgEQAEgnAcgfQAbggAngKQAXgGAnACQAoADA1AJQAlAGAqAKQA8APAeAPQAwAZAWAlQAPAbAAAgQgPAIgKACQgLACgLAAQgLAAgLgBg");
	this.shape.setTransform(286.875,260.7941);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3AAbAMAAAg1/MBuBAAAMAAAA1/g");
	mask.setTransform(352.075,172.775);

	// Capa_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8394CA").s().p("AgTABIgEgJQAJgSAKgDQAIgDAUAJQgRAJgBAPQgBAKAGATIgJABQgZAAAEgeg");
	this.shape_1.setTransform(133.875,37.5768);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4763A6").s().p("AgZADQgDgHALgCQANgEAIABQANACAKAJIgoAHIgDABQgHAAgCgHg");
	this.shape_2.setTransform(131.3429,24.1007);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4763A6").s().p("AgcBFQgFgGgPgIQgNgGgCgGQgCgHAJgKQANgNACgGIADgPQABgIgDgIQgGAAgFAFIgIAJQgGAGgIgEQgDgCAAgDQgBgDACgDQAFgHACgQQACgSAEgGQAkgMALAEQALAEARAhQAFAJADAAQAVgBALAZQAGANAJgFQAEgBAAgEIAAgJIAAgGQABgEADgCIABArQgCAZgNAQIgdAFQgHgTABgKQACgQAQgJQgTgJgKADQgKADgHASQgIAKgCAZIAAAHQgBAEgEABIgCABQgFAAgFgHg");
	this.shape_3.setTransform(131.7146,33.8577);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7686BF").s().p("AADBlQgEgBgGgHQgZgdgggPQgXgMALgVQAQghgEgsQgDgmAmgBQAAAGgJALQgIAKACAIQgEAHgCARQgCAQgFAIQgCACABAEQAAADADACQAIADAGgFIAIgJQAFgGAGABQADAHgBAJIgDAOQgCAGgNANQgJALACAHQACAFANAHQAPAHAFAGQAGAJAFgCQAEgBABgEIAAgIQACgYAIgLIAEALQgFAiAkgFIAdgFIAAAFIggANQgTAIgMAHQgIAEgEAAIgCAAg");
	this.shape_4.setTransform(129.9105,33.7333);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6577B3").s().p("AAtBgIAAgFQANgRACgYIgBgsQgDACgBADIAAAGIAAAJQAAAFgEACQgJAEgGgNQgLgYgVAAQgDAAgEgJQgSgggLgEQgLgFgkAMQgCgIAIgKQAJgLAAgGQAOgFAZgOQAXgJAUAMQAXANARAUQASAUADATQADATgGAhQgIAugBAKQAAAFgIAAIgOAAgAgmhLQgLACADAIQADAIAJgCIAogHQgJgKgNgCIgEAAQgIAAgKADg");
	this.shape_5.setTransform(133.4079,31.0024);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8394CA").s().p("AgIAAQABgJAKABQAGABAAAHQAAAKgJAAQgKgBACgJg");
	this.shape_6.setTransform(146.4583,46.1457);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8394CA").s().p("AgKABQgBgHAKgCQAIgCAEAKQAAAIgJABIgDABQgHAAgCgJg");
	this.shape_7.setTransform(135.1902,13.6324);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DFE0E4").s().p("AgJABQgBgIAKgBQAHgBADAJQgBAJgIAAQgIAAgCgIg");
	this.shape_8.setTransform(128.2205,52.6398);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8394CA").s().p("AAAAMQgMAAABgMQABgKAKgBQAMACAAAKQgBALgJAAIgCAAg");
	this.shape_9.setTransform(148.6724,26.879);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8394CA").s().p("AAbAkQgJgLgSgLIgcgSQgXgQAIgVIAIAJQAFAGAFACQAxAZAWAlQgDAEgEAAQgGAAgGgGg");
	this.shape_10.setTransform(124.3468,42.2976);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8394CA").s().p("Ag4ATIA3gaQAfgNAbgBIgCAKQgLANgpAMQgaAIgRAAQgKAAgGgDg");
	this.shape_11.setTransform(135.675,44.2174);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8394CA").s().p("AgPAtQADgNgBgGQgBgPADgRIAGghQADgTASgBIgBAwQgBAagHAVIgEAMQgCAIgEAEQgMgEAAgLg");
	this.shape_12.setTransform(120.375,29.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8394CA").s().p("ABYA8QABgnAIgUQACgDgBgFQgBgFgDgCQgIgIgWgeQgSgYgQgLQgdgUgcALIhUAfIABgIQAAgFACgBQAggWANgGQAbgNAXADQA+AIAhAuQArA+gSBCQgEAOgGAeQgCAKgNAAQAEgRACgqg");
	this.shape_13.setTransform(133.676,29.7227);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4763A6").s().p("AgbCEQgWglgygaQgFgCgFgGIgIgJIAAgYQAFgEADgIIAEgNQAGgTACgbIAAgwIAFgFIBUgfQAdgMAdAUQAPALASAYQAXAeAIAIQACACABAGQABAFgBADQgIAVgBAlQgCAqgFARIgEAFQgcAAggAOIg2AbIgKgBgAgIhuQgZAOgOAFQgmABADAmQAEAsgQAgQgLAWAXALQAgAQAZAcQAGAHAFABQAFABAJgFQALgHATgIIAggNIAOABQAIAAAAgFQABgKAIguQAGghgDgTQgDgTgSgVQgRgTgXgOQgMgGgMAAQgKAAgJAEg");
	this.shape_14.setTransform(131.72,32.8901);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6577B3").s().p("AhTgHQgLgRALgKQAHgIAPALQAvAhBQALIAOAEIAGABQADABAAAEQAAAHgKABIgkAFQgVADgPgDQgKACgKAAQgsAAgagtg");
	this.shape_15.setTransform(57.7625,127.4153);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8394CA").s().p("AgCABIACgDQAAAAAAAAQAAAAAAAAQABABABAAQAAAAABABIgCADg");
	this.shape_16.setTransform(380.9,251.57);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8394CA").s().p("AgGAAQAAgEAGAAQAHAAAAAEQAAAEgHABQgGgBAAgEg");
	this.shape_17.setTransform(433.35,262.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6577B3").s().p("AAAgCIACAFIgDAAg");
	this.shape_18.setTransform(131.175,57.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7686BF").s().p("AgCABIACgDIADACIgCADg");
	this.shape_19.setTransform(42.45,57.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7686BF").s().p("AgCABIACgDQAAAAAAAAQAAAAAAAAQABABABAAQAAAAABABIgCADg");
	this.shape_20.setTransform(62.95,18.67);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7686BF").s().p("AgCgDQAEgFAJgDQAAAJgHAFQgEAEgKAFQADgKAFgFg");
	this.shape_21.setTransform(52.15,36.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6577B3").s().p("AgKAZIgWgLQgJgHgBgIQgBgKAHgEQAWgPANAJIAVARQANAIAKAGQgQAPgeAAIgHAAg");
	this.shape_22.setTransform(144.0868,50.605);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6577B3").s().p("AgFAlQgZgLgMgfIACgZQABgJALAAQAIgBACAGQAQAqAtAVQgPAMgPAAQgJAAgJgEg");
	this.shape_23.setTransform(125.675,55.2363);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7686BF").s().p("Ag+CyQgCgGgIABQgLAAgCAKIgBAZQgXgFgUgUIggglIgRgTQgJgKgLgGQgugbAcgtQAMgUgCgTQgCgpAQgsQAGgRgDgOQgHgdARgUQAQgUAegBQANgBAKgHQAdgTAVgHQAcgKAcADQAGABAHgDIANgHQAYgOAXATQALAJARAKIAcARQAhAVATAdQARAbARASQAVAXgGAbQgCAKABAQIADAZQABAxgPAcQgGAOgEAeQgDAdgIAOQgFALgFABQgKgFgNgKIgWgQQgOgKgWAQQgHAEACAJQABAKAIAGIAWALQgUAYghALQgVAGgpAEIgDgGIgCAHQgCAEgHABQgugWgPgrgAgTCzQgJABAAAJQACAIAJAAQAIgBABgJQgDgIgGAAIgCAAgACaB7QgCAIAKABQALAAAAgKQAAgHgHgCIgCAAQgJAAgBAKgAgbiUQgNAGghAWQgCABAAAFIgBAIIgFAFQgSAAgEAUIgGAhQgDASACAPQAAAGgCAMQAAALALAEIAAAYQgIAVAXAQIAdATQASALAJALQAMALAHgJIAKABQARAGAqgLQAqgMALgPIACgJIAEgFQANAAACgKQAGgdAEgOQAThCgsg+Qghgvg/gIIgJAAQgRAAgWALgACuhGQgBANANAAQAKABABgMQABgLgMgCQgLABgBAKgAAwjTQgKADACAIQACAKALgCQAJgCAAgJQgEgIgHAAIgDAAg");
	this.shape_24.setTransform(130.1485,33.8652);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8394CA").s().p("AgGAPQgXgPgEgMQgEgKADgDQADgCAKADIAPAFQAHACAGAAQASgCAFAMQADAHADAPQAAAKgIACIgEAAQgMAAgSgMg");
	this.shape_25.setTransform(118.7808,111.3986);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8394CA").s().p("AAJAdQgTgHgIgEQgQgIAFgUQgDgSAHgDQAGgDAQAGQAYAJAHAJQAGAJgFATQgCAKgEADQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgFgEg");
	this.shape_26.setTransform(119.4977,119.1159);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8394CA").s().p("AgdA1QgBgCgBgHQgCgTAIgTQAFgIAPgXQACgFAEgCIAKgPQAFgKAIAEQAJAEAAAeIAAAKQAAAOgUAYQgSAYgPACIgDAAQgEAAgCgCg");
	this.shape_27.setTransform(627.031,145.9483);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8394CA").s().p("AgwA9QgEgEAEgGIAHgIQAIgOANgdQAMgZAQgNQAPgMAagOQAEAHgDAHIgGALQgXAtghArQgHAJgGABIgMAFIgEABQgEAAgDgEg");
	this.shape_28.setTransform(631.0981,161.6558);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4763A6").s().p("AAPALQATgtAVhXQAVA9gnBKQgkBFg+AnQAvgrAdhEg");
	this.shape_29.setTransform(107.7311,120.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4763A6").s().p("AhqBTIAFgKQAdgyAfggQAlgoAsgWIAOgGQAHgEACgHIAtgGQiABOhSBvQgGgFACgHg");
	this.shape_30.setTransform(622.585,164.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8394CA").s().p("AgjA6QgDgBAAgDQgBgEAAgLIAbhaQABgFAFgCQAEgBADACIAeAMQANAFgFALQgOAfgJAOQgQAYgUANIgGAFIgFABIgEgBg");
	this.shape_31.setTransform(116.9714,129.5679);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8394CA").s().p("AgFA/QgWgagPglQgKgYgNgvQgCgGAEgCQADgBAFACQA+AaA0AlQAJAHgCAMIgFAlQgGAfgTAGQgGACgGAAQgQAAgNgRg");
	this.shape_32.setTransform(587.6632,139.1866);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8394CA").s().p("AAMBqQgGgBgHgMIgPgXQgJgMgJgIQgqghAMglQgEggALgrQADgIADgCQAEgBAHAGQBBA1AkA7QAHAMAAAJQgBAKgKAJQgTAQgMAZQgHANgGAAIgBAAg");
	this.shape_33.setTransform(609.9183,139.4438);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7686BF").s().p("AgBAAIABgDIACADIgCAEg");
	this.shape_34.setTransform(640.05,141.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7686BF").s().p("AgDACQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAFAAIADABIgFACIgDAAg");
	this.shape_35.setTransform(458.3833,105.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7686BF").s().p("AAAAEQgDgBgBgDIAEgEIAFAEQABAFgFAAIgBgBg");
	this.shape_36.setTransform(228.6632,125.0571);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7686BF").s().p("AgGABQgBgDAHgBQAGgBABAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgFABQgGAAgBgEg");
	this.shape_37.setTransform(221.9241,126.0917);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7686BF").s().p("AgQABIAAgBIAhAAIAAABg");
	this.shape_38.setTransform(440.625,104.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7686BF").s().p("AgLAAQALgIAMAIQgGAEgGAAQgFAAgGgEg");
	this.shape_39.setTransform(225.675,125.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7686BF").s().p("AgLAAQALgIAMAIQgGAEgGAAQgFAAgGgEg");
	this.shape_40.setTransform(552.575,264.5625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7686BF").s().p("AgDACQgBgEAEgJQAEAGABAFIgCAMQgGgEAAgGg");
	this.shape_41.setTransform(639.7972,138.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7686BF").s().p("AgVABIAAgBIArAAIAAABg");
	this.shape_42.setTransform(536.575,265.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7686BF").s().p("AgRgBQAKgFAJACIAQAEIgBAFg");
	this.shape_43.setTransform(536.8,103.4109);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7686BF").s().p("AgRgBQAMgDAHAAQAJABAIAEQgMAEgGAAIgBAAQgJAAgIgGg");
	this.shape_44.setTransform(454.15,105.0767);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7686BF").s().p("AgrABIABgBIBXAAIAAABg");
	this.shape_45.setTransform(490.8,257.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7686BF").s().p("AgdADQAMgIARAEIAeAEg");
	this.shape_46.setTransform(447.725,104.626);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7686BF").s().p("AAdgHIABAHIg7AIQAZgPAhAAg");
	this.shape_47.setTransform(233.975,124.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7686BF").s().p("AgagEQAagDAbANQgjAAgSgKg");
	this.shape_48.setTransform(543.3,104.5993);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7686BF").s().p("AgsgCIBZAAIgsAEIgMABQgTAAgOgFg");
	this.shape_49.setTransform(545.15,265.1548);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7686BF").s().p("AgrABQAPgCAcgBQAfAAANgCIgsAHIgRACQgPAAgLgEg");
	this.shape_50.setTransform(189.175,117.4645);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7686BF").s().p("Ag9AEQAagGAjgBIA9AAIABAHg");
	this.shape_51.setTransform(477.85,256.9875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7686BF").s().p("AgaAAQgFgEgJgIIgRgPQAjgHAbANQAVAJAYAYIAGAGQADADgBADQgCAFgFAAIgJAAIgKABQghAAgZgeg");
	this.shape_52.setTransform(134.4125,101.1564);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7686BF").s().p("Ag/AsQgFgCAEgMQACgHAFgpQACgOAGgGQAHgHAOADIApAKQAZAHARgBQAQAAgFAYIgDAPQgEAJgLAAQgkgBg+AVQgIACgEAAIgBAAg");
	this.shape_53.setTransform(647.6344,147.4411);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7686BF").s().p("AA7BHIgJgJQgOgKgTgWQgVgagJgHIg/hDQA2gNAwAlQAxAkACA3IAAAPQgBAJgGADIgFACQgDAAgDgDg");
	this.shape_54.setTransform(164.6875,105.5014);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEFEFE").s().p("AgBAAIABgBIABABIABAAIgCACIgBgCg");
	this.shape_55.setTransform(127.175,83.3317);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7686BF").s().p("AgHAFQAGgJAJAAQgBAGgEACIgFABIgFAAg");
	this.shape_56.setTransform(595.525,198.0583);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7686BF").s().p("AgvAbQgCgDgEgBIgIgBQAMgmANgIQAMgHAiAKQAOAEAaAKQAPAFgDANQgCANgOgCQgPgBgfAEQgUADgOAAIgNgBg");
	this.shape_57.setTransform(638.525,169.8349);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7686BF").s().p("AihB2ICAhtIAsgnQAbgZAUgOQAfgVASgJQAdgOAagEQgjAWgyAvQg7A2gXARQgxAkhSAzQgNAIgJAAIgDAAg");
	this.shape_58.setTransform(612.525,185.7852);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6577B3").s().p("AiBBkQAcgOAsggQAOgKADgKQADgLgHgOQgJgRADgHQADgHAUgHQA6gTAsgYQANgGACgGIAogUQAAAJgJAIQgaAUg6A7QgzAygjAZQgcAVgmAPIgGACQgFAAgDgFg");
	this.shape_59.setTransform(112.95,89.1113);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8394CA").s().p("AhsgSIgGgHQgDgEADgEQACgDAFABIAJABQA6AQBJACIANABQAGgBAEgFQAMACASgDIAegEQgEAagMANQgNANgfAGQgUAEgUAAQhGAAg2g2g");
	this.shape_60.setTransform(72.8058,122.7815);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7686BF").s().p("AjgJKQgugbgogrQgggigkg1QhSh9gZidQgTh6APhtQANhmAriAQAIgWAQgWQAKgOAWgYQB0iCDFhjIAMgEQgLAPgXARQgeAVgHAHQgYAXgIALQAKgBARgKQAPgJALABQhQAqg2BJQguBAggBeQALgKAbgbQAYgYAQgNQACAKgEAIQgCAEgIAHQgRAQgWAaIgkAsQgPARgHAdQgFAQgGAhQgHAgACArIAwhUQAFAGgCAFIgEAIIgXAxIgVAxQgLAaABAfQAAASAHAnQAMA/ARAuQAVA5AiAqQBdBzCOAFQCBAEBWhTQAIgIADgFQAEgIgCgJQgDgIgHgEQgFgCgLgCQgxgJgQgEQgkgJgcgMQg5gbgrgwIgFgGQgCgDACgEQAEgGAKADIA7ASQA5AOAhACQAzAEAqgNIAFgBIAEgCQAHgEARgGQAOgHACgNQABgNgJgLQgGgGgPgKQgLgIgPgWQgOgWAHgNQAFgIALAAIATACQAIABANAFIAVAIQBwAfB3gZIAUgBQgCAGgNAGQgsAYg7ATQgUAHgDAHQgDAHAJASQAHAOgEALQgDAKgNAKQgsAggcAOQg0AYgvgOQAUAMAcgCQAbgCBngVQgSAzgsAvQhUBYiJAbIgLAEQgEAGgHAAIgMAAQhJgDg7gPIgIgCQgGAAgCADQgDAEAEAEIAGAGQBEBHBggTQAegHANgNQANgMAEgcIBVgdQgLAQgWA5QgSAugXAXQgvAvhRAOQgiAHghAAQhVAAhNgsgAjkHoQgLAKALARQAgA5A7gNQAPADAVgDIAkgFQAKgBAAgHQAAgEgDgBIgGgBIgOgEQhRgLgvgiQgJgGgGAAQgEAAgDADg");
	this.shape_61.setTransform(72.2862,75.1368);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7686BF").s().p("AHEGQIisgFQhggDhLgHQj2gYiPgTQjmgglGg/IrDiJIgJgDQgCgGgFgCIgKgEQgygRhWgWQhlgZgkgLQgygPgQgFQglgOgZgSIgHgFQgEgDADgFQABgDAFgBIAHABQBoAGA0AEQBRAHA8AIQBJAICRATQA3AGBsAKIEjAeIBkALQA7AGApACIBHAGIBGAFQAhABCPAJQBrAHBEgBIAIACQAAAHgJAAQiAAChngLQgTgCgigBQgmAAgQgCQgugEhXgEQhcgFgqgDQgwgEhHgHIh2gNQgHgBgFAGQCiAhDMAZQB7APD3AXQGIAkFigDIAAAKIjwABQgtAAhLgDIh5gEQg0AAhFgFIh6gJIjugTIgBAHIBwAWICrAfQBkARBHALQApAGA5AGIBiAKQBsAMCNACID5AAQAzgBBDgGIB1gMQCKgOCDgeQCtglCOg9QBqguBPgoQBhgwBOg1QCqhxBhi3IAKgUQAHgLAKgEQgsCihxCQQiWC+kIB+QiwBUjYArQh3AYiGAMQiKAOiBAAIguAAgAqdCbQAAAEAHABQAHgBAAgDQAAgFgHAAQgHAAAAAEgAykAwIgCAEIAEABIACgEIgEgCIAAABg");
	this.shape_62.setTransform(499.6979,246.5481);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8394CA").s().p("AkUIyQiOgFhdhzQgigqgVg5QgRgugMg/QgHgnAAgSQgBggALgaIAVgxIAXgxIAEgIQACgFgFgGIgwBUQgCgrAHggQAGggAFgQQAHgdAPgRIAkgsQAWgaARgQQAIgHACgEQAEgIgCgKQgQANgYAYQgbAbgLAKQAgheAuhAQA2hJBQgqQgLgBgPAJQgRAKgKABQAIgLAYgXQAHgHAegVQAXgRALgPQByg9ClgUQCFgQB3ARQBZAMA6AWQBLAdA0A2QA+BBARBWQAQBXgjBSQgVAyglAyQgcAlgwAxQgSATgoAiQgnAhgSATQgDADgMADQgKADgCAHIgoAUIgUABQh3AZhwgfIgUgIQgNgFgIgBIgTgCQgLAAgFAIQgHANAOAWQAPAWALAIQAPAKAGAGQAJALgBANQgCANgOAHQgRAGgHAEIgEACIgFABQgqANgzgEQghgCg6gOIg7gSQgKgDgEAGQgCAEACADIAFAGQArAwA6AbQAcAMAkAJQAQAEAxAJQALACAFACQAHAEADAIQACAJgEAIQgDAFgIAIQhRBPh5AAIgOAAgAEbncQgVAIgcATQgKAHgNAAQgeABgRAUQgQAVAGAcQADAPgFAQQgQAtACAoQABAVgLATQgcAuAuAaQAKAGAKAKIAQAUIAgAlQAUATAXAFQAMAgAZALQAaAJAXgRQAIgBACgEIAEAAQAqgEAVgHQAggKAVgYQAkACASgRQAFgCAGgLQAHgOAEgdQADgeAHgNQAOgcgBgyIgCgaQgCgPACgKQAGgcgUgWQgRgTgRgbQgTgdghgUIgdgSQgQgKgLgJQgXgSgYANIgNAHQgIAEgHgBIgOgBQgVAAgVAHgAoWgQIAEACIACgEIgEgCIgCAEgAm1jkQgGAGgDALQALgFAFgFQAGgGABgJQgJADgFAFgAlHmZIgCADIAEACIACgEIgEgCIAAABg");
	this.shape_63.setTransform(95.6632,59.4427);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6577B3").s().p("EArwALJQgWglgpgcQgagTg1gYQg9gchUgTIiWgdQiGgZi3gYQg7gIiZgNQh1gKirgGQiagFjZAAIlzACQg+ABhfAFIieAJQg2AChRAHImIAfQibAOhNAFIpGAuQiyAPhaAFIi6AKIh+AFIh9AFQiHAIiRgFQjAgHh/gUQjRggiihBQmGidhxmDQgkh/ADh5QAHjdBvixQAFgIAGgBQgsCBgNBmQgOBtATB7QAZCcBSB8QAjA1AhAjQAoArAtAaQBrA+B8gYQBRgPAvguQAXgXASgvQAVg4ALgRQA6gYA+g8QABAVgJAZQgDAHgQAhQg6B2hMBFQgVATgkAYIg6ApIgMAIQgHAGABAHQACAJAHAEIAPAGQAvATAlACQAtADAogTQAOgHAMADQAOAEAJAQQAMAXAYAHQAXAHAagMQA0gXAkgtQAfgmAXg7QANgjAJgPQAKBJgXAyQgLAXgKAmQgJAjAOATQAMAQAhAGQB8AXB+gCIB/ABQBOAAAwgBQC4gIBogLIBXgGQBugGCTgNQAxgFBkgGIDRgTIFYgeIB9gLIBhgJQA+gEAkgGQAugGBcgFIBygJQBJgFApgFQAVgCAqAAQArgBAVgCQAmgFBCAAQBMAAAdgCQBHgFBgABICnABQCcACCaANQC1AQCVAWQCOAVDJAiQBMANAeADQA8AIAwgCIAqgGQBCgHAsA0QAkAqA/gEQBHgFADhYQAAgTAGgXQAHgXAKgQIADAsQABAbACANQAHA2ATA8QAFAPAIACQAIACAPgIQAMgIAPgPIAYgZQAZgYAegBQASgBAWgIIAmgQIARgHQAKgDAIABQgBAHgIAFIgNAFQhSApg8BoIgGALQgBAGAGAFQgOAnAYAaIhYBGQgHAGgDAAIgBABQgFAAgFgIg");
	this.shape_64.setTransform(322.4347,115.6607);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7686BF").s().p("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");
	this.shape_65.setTransform(357.9683,140.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8394CA").s().p("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");
	this.shape_66.setTransform(405.2571,190.5556);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AEYFnQgLgBgKgGIlIiiQhIglgRgKQgygdgggfQhGhFgGhHQgGhDAxhUQAqhJBhhIQAKgIAKADIgZA2QgOAfgGAZQgHAhAHAkQAFAcAPAkQgQA5AeAtQAUAcA3AoQAmAcA6AgIBkA1QBWAxAvAuQAXAXALAdQAKAYgJAMQgHAJgSAAIgJgBg");
	this.shape_67.setTransform(150.6412,309.5778);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AR4EPQiQgDi1gRQiygQi6gbQiugZjygsQiagdk2g9QhzgXmghNIgsgHQgYgEgSgGQAEgsgTgiQgTgggogTQhPgmhHAzQgRAMgOAWIgWAnQgJgGgMgCIgVgCQhjgJgxgEQhUgFhAADQi/AJhxATQi1AeiXA1QhrAkhvA5IgLAGQgIADgGAAQAMgkAugjQAvgkBAghQAtgXBLghQEHhyFEgeQE8gdFkBGQBZASCdAcID1AtQCzAiFmBIQFkBEDFAcQDXAeDYASQDfASDOgCQDugBDMglQC1ggCWg3QCng7CMhcIAEgCQgCAOgLALIgWASQhdBShzA+QjABsjxA5QhlAXigAVQibAUi/AAIhugCg");
	this.shape_68.setTransform(406.5,276.3414);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4763A6").s().p("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");
	this.shape_69.setTransform(358.3712,166.0893);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("EArsAMRIgtgZQgxgbhAgTQgugOhIgNQh3gXidgZQg3gJhOgJIiFgPQgggEg0gDIhVgFQi9gOkCgBInAACQhIAAhiAFIirAJQhJAEiOALIkOAYIzDBfIg1ADIg0ABIiaAHQiVAHjBgDQiSgCiygVQi5gXimg6Qj8hYiSijQhth6g2iVIgRgyIgDgJQgCgEgGAAIAAnfQALgIAFgRQAFgUADgJQBIjECpiKQAPgNALACQguBHgKARQicEVBDE9QBDE5D6C7QBoBOCFA0QBxAsCTAeQDIAqErADQDNADFHgSQCGgIBpgIIHYglIEfgWIEVgYQCrgPBsgIQEQgUC6gFQGBgKGSAMQE3AKE0AvQB9ATA+ALQBoATBRAWQB2AfBIBAQAXAUgBAPQgBAPgYATQg1AphYArQgKgXgZgQg");
	this.shape_70.setTransform(299.7021,118.6117);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,704.2,345.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Au4TJMAAAgmRIdxAAMAAAAmRg");
	mask_1.setTransform(95.3,122.475);

	// Capa_3
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CD7862").s().p("AgQhHQAwBHgWBHQgCg/gYhPg");
	this.shape_71.setTransform(160.7635,23.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CD7862").s().p("AilBgQATh5BDhFQBChDB4gaQASgEAXgDQATgBABANQAAAJgFAFQgGAFgIgCQhSgLg9AvQgpAggzBQQgxBMgGB2IgBAIQgBAFgHAFQgXgxAIgyg");
	this.shape_72.setTransform(50.4083,29.9214);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CD7862").s().p("AlJAtIgBgJICYgfQA0gKBmgZQBagUBDACQA0ACAkAGQAwAHAmARIASAHQAJAGgFALQgFAJgJgDIgQgKQhigphwASQg0AIhcATQhkAVgsAIIhBAKIgaACQgVAAgSgEg");
	this.shape_73.setTransform(132.4758,76.6506);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B15246").s().p("ALqI2QgJgBgEgIIgDgQQgTh/iHhOQh/hJh5AXQg7ALhcAaIiWAnQiVAkh/gGQkfgNijjRQgJgLgKgBQAAgPgIgQIgQgdQhYiuBQi5QBIiiCdg8QCNg3CoBAQBGAbBPA2QAhAWBmBQQBqBRALAHQBEAuBBAMQBXARA/g1QBEg6gRhlQgUh0hkg0Qhog0h7A1IgPAHQgKAFgMgCQA1gtBJgPQCRghBuBtIALAKQAGAEAHABQABANAJAQIAPAaQBBCThLB2QgIANAAALQgXAFgDAWQgNAAgJAGQhPA3hbgBQhOgBhfgrIgngQQgEgJgLgGQgMgFgGgEQgTgMhyhOQhQg3g5gcQhUgog7gJQhPgLhGAlQhcAxgXBvQgWBvBDBPQAKAMALABQABAWAUAQQALAJAZAPQBMA7CCAJQBWAGBmgSQBAgLB2gfQCygvCFAKQCKALBiBMQBrBUATCJQAHAugBAeQgCAqgTAgIgIAOQgFAHgIAAIgBAAgADnCdQhmAag0ALIiXAfIABAIQAcAGAlgDIBAgKQAsgIBkgVQBdgUA0gJQBwgSBiArIAQAJQAJAEAFgKQAFgLgJgGIgSgHQgmgRgwgIQgkgFg0gCIgPgBQg+AAhRASgAmfnZQgYADgSAEQh5AahBBDQhEBFgTB6QgHAyAWAxQAHgFACgFIABgJQAGh1AxhNQAzhQAqggQA9gvBRALQAIACAGgFQAGgFgBgJQAAgMgRAAIgCAAgAIlkRQAWhIgxhHQAZBPACBAg");
	this.shape_74.setTransform(106.871,57.8271);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A04F48").s().p("AgNANQAEgWAVgEIACACQgKARgPAIg");
	this.shape_75.setTransform(160.725,46.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D2877C").s().p("AgbABIAwgSIAGABQgBAIgOAIQgMAHAAALg");
	this.shape_76.setTransform(128.85,36);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A04F48").s().p("AgbCsQAAgLAIgNQBKh2g/iSIgQgaQgJgQAAgNIABgCQBABLACBnQACBng9BCg");
	this.shape_77.setTransform(164.7281,28.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A04F48").s().p("AhAAbQhOgRg9goIADgFIAnAQQBfAqBOABQBbABBPg2QAIgGANAAIABABQhPBGhsAAQgmAAgrgJg");
	this.shape_78.setTransform(139.05,51.8158);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D2877C").s().p("AhzAjQATguAvgbIBQgtQAxgcAfgVQAPgBAFAJQgNATgYARIgsAbQgbAQgaANQhvAxAHBzIgXABQgCg6ARgog");
	this.shape_79.setTransform(103.9895,60.8702);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A04F48").s().p("AkzC3QhDhQAWhuQAXhvBcgxQBGglBPAMQA7AIBSApQA5AcBRA3QB0BOASAKQAGAEAMAGQALAGAEAIIgEAFIgPgDQgFgJgPABQgZgZgrgbQgwgegYgRQg/grgtgZQg9ghg5gQQh8gkhaBGQhaBGAHB+QACAjASAlQALAVAcAqIgBABQgLgBgKgMg");
	this.shape_80.setTransform(83.1766,42.9887);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D2877C").s().p("AAaBKQhwhhiBgtQgtgQgcgiQA1AXBtAmQBdAlA0A0QALALASAOQBLA4BOghQAagLARgBQAZgBAUAQQgYgBgdAIQgMADgnAPQgbALgaAAQg3AAgzgtg");
	this.shape_81.setTransform(78.6,155.5308);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D2877C").s().p("AkGBgQAMgOAEgMQArh4CNgBQByAAB8g1QBAgaAuAPQgnAHgyAUIhWAkQhJAfhfgBQg+gBgnAWQgsAYgYA2QgJAUgLAKQgPAOgYAAIAXgZg");
	this.shape_82.setTransform(95.5,114.9539);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5D4655").s().p("AjPBkQAQhmBngdQCPgoBnhPQAXgRAPgHQAXgLAXADQhjBIgzAgQhYA3hNAQQhiATgTBlQgGAbgJAQQgMAUgYAHQAZgdAJg2g");
	this.shape_83.setTransform(166.375,142.2019);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D2877C").s().p("ABDDAQgngJgdghQgeghgCgnQgDggAGghQAMhCggg7QgYgtgmgLQgngMguAZIgHAEQgEACgEgDQAKgWAcgMQAbgMAdAFQAsAJAgAlQAfAkAKA0QAEAYgDAlIgCA9QABA6AuAeQAvAdA0gZQAsgVAAgpQABgWgMgRQgKgNgUgMIgMgEQgIgDgCgIQArgIAeArQAfArgeAxQgTAdgnAQQgZAJgXAAQgNAAgNgDg");
	this.shape_84.setTransform(43.6938,163.6673);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D2877C").s().p("Ai1CUQgXgMgMgVQgTghADgoQADgpAYgaQA5hABNASQASAEAXANIAlAUQAjAQAaAFQAiAHAfgIQAvgNAUggQAUghgJgwIgDgRQAZAVAAAkQAAAkgYAdQgdAjgqALQgkAJgxgIQgagEgegOIg2gbQg2gZguAeQgvAeABA7QABA2AmAPQAtASAjgmIAFgIIAFgJIAHAHQgMAzg4AHIgIAAQgTAAgTgKg");
	this.shape_85.setTransform(124.9601,125.579);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5D4655").s().p("ADhB3QADgFAAgDQAGg3gqghQgpghg7AMQg7ANgwAsQg1AxhCgKQg4gIgggwQggguAPg3QAHgbAVgRQAUgSAagCQA3gGAZA2IgHgBQhNg4gkA3QgTAcAKApQAJAoAfAUQAcATAfAAQAgAAAcgTQAlgdATgNQBSgzBPAXQAyAOAXAxQAVAwgYAgQgHgBAAgFg");
	this.shape_86.setTransform(24.4115,103.0244);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A04F48").s().p("AqXDLQgji1BoiXQBjiTCjgeQCDgYCNA/QBBAcBJAzQApAcBWBDICNBmQBDAnAzAGQBZAKA0g8QA0g7gVhYQgWhahKguQhKguheATQhWAShJA9IgKAIQgGADgGgGQgEgFACgGIAHgJQBRhdBxgaQB/gcBoBOQAlAcAPAZIgBABQgHAAgHgFIgKgKQhuhsiSAgQhJAQg1AtQANABAKgEIAOgIQB7g1BoA1QBlAzATB0QASBmhFA4Qg/A1hXgQQhAgNhFgtQgLgGhphRQhohQgggWQhOg3hHgbQinhAiOA3QidA9hHCiQhRC3BZCwIAPAcQAIARABAOIgCACQg0hEgThig");
	this.shape_87.setTransform(94.1344,36.8534);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A04F48").s().p("AK9EKQgTgEgCgWQgMh4h9hQQh8hNiDAWQg9AKhtAfQh0Ahg1AKQiHAahtgFQiAgGhugyQiXhEhLh4IABgBQAKABAJALQCjDQEfANQB/AGCWgkICVgnQBcgZA7gLQB5gXB/BIQCHBOATB/IADAQQAEAIAJABQAIAAAGgHIAIgOQATggACgqQABgegHguQgTiIhrhUQhihMiKgLQiFgKiyAvQh2AfhAALQhmAShWgGQiCgJhMg7QgZgPgLgJQgUgQgBgWIABgBQA/A/BGAcQA0AUA+AGQAxAEBDgEIAXgBQBAgGBcgXICagmQBogXBQgBQBjgCBVAdQB+AsBGBmQBGBmgJCAQgEA2gZAiQgHAKgFADQgGAEgGAAIgFgBg");
	this.shape_88.setTransform(110.8763,89.2017);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CD7862").s().p("ABBFiQhZgWg0hNQg0hNANhWQANhOBRhAQBThDBLAQQA8ANAtA7QAwA9gMA9IgSgmQgKgVgIgOQgohChAgJQg1gHg2AnQg0AngVA8QgRAxAWAyQAWAyAxAeQBIArBpgWQA8gMAxgVQCNg8geiTQgYh1g6hWQg5hVhQgYQhRgXheApQhWAmhUBaQh3B/hpBFQgnAbgYANQgkAUghAKIgSAEQgLACgKgEQBlgxBhhbQA8g6Blh6QA9hJBBgrQBJgxBWgOQCggbB0CCQBzCDAUC7QAIBFgYA4QgZA7g4AmQh+BViFAAQg1AAg1gNg");
	this.shape_89.setTransform(95.3407,208.2738);

	var maskedShapeInstanceList = [this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,190.6,245), null);


(lib.textos = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AJvkrIDeAAACGhjIBNAAADRDIIASAAACtAAICuAAAEcDIICVAAADAjHIDqAAAENhjIA+AAAJIhjIEFAAAL3BkIBWAAAMiDIIArAAAIlBkICYAAAHYjHIF0AAAGUAAIFdAAAHoDIID7AAAGFhjICJAAAEDkrIEpAAAtMAAIAzAAAtMDIIBvAAAtMBkIBbAAAjkkrIDrAAAp5krIFZAAApxhjIDaAAApmjHIDsAAAp2DIIEGAAApnAAICYAAAjehjIErAAAiOjHIDzAAAAEDIIA5AAAg9BkIBmAAAhLAAIDBAAAk2DIIDkAAAm9BkIFIAAAmVAAIDKAAAlehjIBDAAAlRjHICAAAAq3BkIDAAAArfAAIA+AAAs5hjICOAAAtMjHICnAAAi5EsIC/AAAo/EsIFNAAAtMEsIBRAAArBEsIBIAAAEIEsIB7AAABAEsICOAAAB3DIIAgAAABjBkIGJAAABJkrIBxAA");
	this.shape.setTransform(84.5,365.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(3,1,1).p("AJvkrIDeAAACGhjIBNAAADRDIIASAAACtAAICuAAAEcDIICVAAADAjHIDqAAAENhjIA+AAAJIhjIEFAAAL3BkIBWAAAMiDIIArAAAIlBkICYAAAHYjHIF0AAAGUAAIFdAAAHoDIID7AAAGFhjICJAAAEDkrIEpAAAtMAAIAzAAAtMDIIBvAAAtMBkIBbAAAjkkrIDrAAAp5krIFZAAApxhjIDaAAApmjHIDsAAAp2DIIEGAAApnAAICYAAAjehjIErAAAiOjHIDzAAAAEDIIA5AAAg9BkIBmAAAhLAAIDBAAAk2DIIDkAAAm9BkIFIAAAmVAAIDKAAAlehjIBDAAAlRjHICAAAAq3BkIDAAAArfAAIA+AAAs5hjICOAAAtMjHICnAAAi5EsIC/AAAo/EsIFNAAAtMEsIBRAAArBEsIBIAAAEIEsIB7AAABAEsICOAAAB3DIIAgAAABjBkIGJAAABJkrIBxAA");
	this.shape_1.setTransform(84.5,145);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(3,1,1).p("AJIkrIEFAAAJvnzIDeAAACGkrIBNAAAENkrIA9AAADAmPIDqAAADRAAIARAAAFXBkIByAAACaDIIFDAAAEcAAICVAAACtjHICuAAAL3hjIBWAAAMiAAIArAAAIlhjICYAAAMzDIIAaAAAIWDIIDjAAALUBkIB5AAAHYmPIF0AAAGUjHIFcAAAICBkICYAAAHoAAID7AAAGFkrICJAAAEDnzIEpAAAMuGQIAfAAAMGEsIBHAAAKDGQIBvAAADvGQIARAAACkEsIBcAAAE5GQIAiAAAE6EsIBXAAAGUGQIC4AAAHYEsID1AAAjekrIErAAAiOmPIDzAAAjknzIDrAAApxkrIDaAAApmmPIDsAAAopnzIEJAAAp7BkIBrAAAnRBkIBJAAAoqDIICEAAAp2AAIEGAAApnjHICYAAAAEAAIA5AAAg9hjIBmAAAhLjHIDBAAAivDIIA+AAAg3DIIAkAAAAeDIIBCAAAi0BkIDDAAAluDIICFAAAlHBkIBZAAAk2AAIDjAAAm9hjIFIAAAmVjHIDKAAAlekrIBDAAAlRmPICAAAAtMjHIAzAAAtMAAIBvAAAtMhjIBbAAAtMBkICIAAAtMEsIBbAAAtMH0IA0AAAjyH0IBpAAAhQH0IBAAAAjjEsIE0AAAlpEsIA6AAAnlEsIBEAAAoNH0IDlAAApSGQICwAAAloGQICiAAArgH0ICZAAAtMGQIC+AAAq3EsICOAAAtMDIIDbAAAq3hjIDAAAArfjHIA+AAAs5krICOAAAtMmPICnAAAtMnzICxAAAAmH0ICtAAAhzGQIEeAAABiBkIC+AAAB3AAIAgAAABjhjIGJAAABJnzIBwAA");
	this.shape_2.setTransform(84.5,50);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(86.95,259.2,0.1446,0.1446,0,0,0,352.4,172.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CC9999","#FFFFFF"],[0,1],-2.3,112.4,-2.3,-43.2).s().p("AqGG7QhkgBAAhjIAAqsQAAhlBkABIUNAAQBkgBAABlIAAKsQAABjhkABg");
	this.shape_3.setTransform(85.3061,256.29,0.843,0.9573);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#468DF7").s().p("ArgJdQhkAAAAhkIAAvxQAAhkBkAAIXBAAQBkAAAABkIAAPxQAABkhkAAg");
	this.shape_4.setTransform(85.3276,250.9935,0.843,0.843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textos, new cjs.Rectangle(-1.5,-1.5,172,398.5), null);


(lib.gusanos2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(90.05,69.95,0.7346,0.7346,90,0,0,95.2,122.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gusanos2, new cjs.Rectangle(0,0,180,140), null);


(lib.imagenampl = function(mode,startPosition,loop,reversed) {
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
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(26));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27508C").s().p("AhEiKICJCKIiJCLg");
	this.shape.setTransform(196.5932,68.5663,0.6835,0.6835);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#99FFFF").ss(2,1,1).p("ALAAAIhjAAAIjAAIizAAAGSAyIggAAAJkAyIiYAAAoAAAIhoAAAqeAAIghAAAodBkIg7AAAqQBkIgvAAAooAyIiXAAADKAAIhNAAAEzAAIgvAAAkuAAIiYAAAiiAyIhYAAAmmBkIg/AAAkyAyIi8AAAixBkIi7AAAC8BkIhEAAADZAyIjiAAAA+BkIi1AAAhDAyIglAAABEAAIk4AAAl1hjIlKAAAHfBkIjrAAAE4AyIglAA");
	this.shape_1.setTransform(81.55,155.95);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(103.3,72.25,0.2311,0.2311,0,0,0,352.2,172.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CC9999","#FFFFFF"],[0,1],-2.3,112.4,-2.3,-43.2).s().p("AqGG7QhkgBAAhjIAAqsQAAhlBkABIUNAAQBkgBAABlIAAKsQAABjhkABg");
	this.shape_2.setTransform(100.6629,67.6681,1.3471,1.5298);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#27508C").s().p("Au6DmQgyAAAAgyIAAlnQAAgyAyAAId1AAQAyAAAAAyIAAFnQAAAygyAAg");
	this.shape_3.setTransform(100.65,158.35);

	this.instance_1 = new lib.gusanos2();
	this.instance_1.setTransform(97.25,67.6,0.9335,0.9335,0,0,0,90,70);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#99FFFF").ss(2,1,1).p("AIjAAIizAAALAAAIhjAAAJkAyIiYAAAGSAyIggAAAqeAAIghAAAoAAAIhoAAAooAyIiXAAAqQBkIgvAAAodBkIg7AAAEzAAIgvAAADKAAIhNAAAkuAAIiYAAAixBkIi7AAAkyAyIi8AAAmmBkIg/AAAiiAyIhYAAADZAyIjiAAAC8BkIhEAAABEAAIk4AAAhDAyIglAAAA+BkIi1AAAl1hjIlKAAAE4AyIglAAAHfBkIjrAA");
	this.shape_4.setTransform(81.55,155.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_4},{t:this.shape},{t:this.instance_1}]},59).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.4,181.4);


// stage content:
(lib.aviso = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pointer();
	this.instance.setTransform(345.05,50.55,0.5798,0.5798,0,0,0,50,59.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({x:165,y:138.5},15,cjs.Ease.quadOut).wait(2).to({regX:50.2,regY:59.7,scaleX:0.4791,scaleY:0.4791,x:165.05,y:138.55},0).wait(3).to({regX:50,regY:59.6,scaleX:0.5798,scaleY:0.5798,x:165,y:138.5},0).wait(2).to({x:330.45},13,cjs.Ease.quadInOut).wait(25).to({x:279.75,y:97.8},7).wait(9).to({regY:59.7,scaleX:0.48,scaleY:0.48,x:280.15,y:98.2},0).wait(2).to({regY:59.6,scaleX:0.5798,scaleY:0.5798,x:279.75,y:97.8},0).wait(31).to({x:327.35,y:87.4},5).to({_off:true},1).wait(16));

	// FlashAICB
	this.instance_1 = new lib.imagenampl();
	this.instance_1.setTransform(150.05,116.8,0.7408,0.7408,0,0,0,100.7,90.7);
	this.instance_1.alpha = 0.3984;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({regX:100.8,scaleX:1.302,scaleY:1.302,x:150.25,y:90.65,alpha:1},10,cjs.Ease.quadInOut).wait(79).to({regX:100.7,scaleX:1.3636,scaleY:1.3636,x:150.1,y:87.45},0).to({alpha:0},5).to({_off:true},1).wait(16));

	// FlashAICB
	this.instance_2 = new lib.textos();
	this.instance_2.setTransform(150,179.05,1,1,0,0,0,84.5,155);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},19).to({y:-1.95},21,cjs.Ease.quadInOut).to({_off:true},35).wait(101));

	// Capa_2
	this.instance_3 = new lib.hojablanca();
	this.instance_3.setTransform(150,100,1,1,0,0,0,125,100);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},19).to({_off:true},60).wait(101));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-58.4,374.1,479.5);
// library properties:
lib.properties = {
	id: '97E159DCCC0E4087922A975264E5A9B8',
	width: 300,
	height: 200,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/aviso_atlas_1.png?1778016545495", id:"aviso_atlas_1"}
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
an.compositions['97E159DCCC0E4087922A975264E5A9B8'] = {
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