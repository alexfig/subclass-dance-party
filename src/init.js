$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.floor(Math.random() * (800 - 200)) + 100
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineup").on("click", function(event){
    var spacing = 30;
    var left = 0;
    var top = 250;

    for(var i =0; i < window.dancers.length; i++){
      dancers[i].lineup(top, left + spacing);
      left += spacing + dancers[i].$node.width();
    }
  });

  $(".conga").on("click", function(event){
    for(var i =0; i < window.dancers.length; i++){
      dancers[i].conga(i * 500, i);
    }
  });
});