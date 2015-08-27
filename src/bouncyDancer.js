var makeBouncyDancer = function(top, left, timeBetweenSteps){
  return new BouncyDancer(top, left, timeBetweenSteps);
}
var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('bouncy-dancer');

};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);

    var context = this;
    this.$node.show();
    this.$node.css({'-webkit-animation' : 'bounce ' + this.timeBetweenSteps/500 + 's infinite'});
};