var makeHoveringDancer = function(top, left, timeBetweenSteps){
  return new HoveringDancer(top, left, timeBetweenSteps);
}
var HoveringDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  var min = Number.MAX_SAFE_INTEGER;
  var nearestNeighbor;
  for(var i=0; i < window.dancers.length; i++){
    var dist = Math.pow(Math.abs(dancers[i].top - top),2) + Math.pow(Math.abs(dancers[i].top - top),2);
    if(dist < min){
      min = dist;
      if(!(dancers[i] instanceof HoveringDancer))
        nearestNeighbor = dancers[i];
    }
  
  this.origin = nearestNeighbor.left + 'px ' + nearestNeighbor.top + 'px'; 
  this.left = nearestNeighbor.left - 30;
  this.top = nearestNeighbor.top - 30;

};

HoveringDancer.prototype = Object.create(Dancer.prototype);
HoveringDancer.prototype.constructor = HoveringDancer;
HoveringDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    
    var context = this;
    this.$node.show();
    this.$node.animate({'top' : this.top, 'left' : this.left}, 1000);
    this.$node.css({'-webkit-transform-origin': '40px 40px'}); /* Chrome, Safari, Opera */
    this.$node.css({'-webkit-animation' : 'hover ' + this.timeBetweenSteps/300 + 's linear infinite'});
};