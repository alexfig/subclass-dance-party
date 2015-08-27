var makeFlippingDancer = function(top, left, timeBetweenSteps){
  return new FlippingDancer(top, left, timeBetweenSteps);
}
var FlippingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$image = $('<img src="p.gif" height="167" width="101" align="middle">');
  this.$node.append(this.$image);
  this.$node.addClass('flipping-dancer');
  var context = this;
  this.$node.on("mouseover", function(e){
  
  // -> removing the class
  $(this).on('webkitAnimationEnd', function() {
    context.$node.removeClass("bounce-once");
    context.$image.removeClass("flip-once");
  });
    

  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    context.$node.offsetWidth = context.$node.offsetWidth;
    context.$image.offsetWidth = context.$image.offsetWidth;
  
  // -> and re-adding the class
    context.$node.addClass("bounce-once");
    context.$image.addClass("flip-once");
});

};

FlippingDancer.prototype = Object.create(Dancer.prototype);
FlippingDancer.prototype.constructor = FlippingDancer;
FlippingDancer.prototype.step = function(){
    
};