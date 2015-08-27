var makeSpinnyDancer = function(top, left, timeBetweenSteps){
  return new SpinnyDancer(top, left, timeBetweenSteps);
}
var SpinnyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny-dancer');

};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;
SpinnyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var context = this;
    this.$node.show();
    this.$node.css({'-webkit-animation' : 'spin ' + this.timeBetweenSteps/500 + 's infinite'});
};