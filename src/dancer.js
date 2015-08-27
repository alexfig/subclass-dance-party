// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  return new Dancer(top,left,timeBetweenSteps);
};

var Dancer = function(top, left, timeBetweenSteps){
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.top = top;
    this.left = left;
    this.step();
    this.setPosition(this.top, this.left);

    //from https://css-tricks.com/snippets/javascript/random-hex-color/
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.$node.css({'border-color' : randomColor});
};

Dancer.prototype.step = function(){
// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
  var context = this;
  setTimeout(function(){context.step();}, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    'top': top,
    'left': left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function(top,left){
  this.top = top;
  this.left = left;
  var styleSettings = {
    'top': top,
    'left': left
  };
  this.$node.animate(styleSettings);
}