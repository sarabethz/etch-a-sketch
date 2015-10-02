var boxLength;
var containerLength = 550;
var num1;
var num1a;
var num2;
var num2a;
var num3;
var num3a;
var addedLineWidth;
$(document).ready(function() {
  createGrid(25);
  $("#defaultSetting").click(function(){
    clearGrid();
    num1=prompt("Enter the number of columns in your grid 1-60");
    num1a=parseInt(num1);
    createGrid(num1a);
   defaultSettingEffect();
  });
  $("#lightenUp").click(function(){
    clearGrid();
    num2=prompt("Enter the number of columns in your grid 1-60");
     num2a=parseInt(num2);
     createGrid(num2a);
     lightenUpEffect();
  });
  $("#randomColor").click(function() {
    clearGrid();
    num3=prompt("Enter the number of columns in your grid 1-60");
    num3a=parseInt(num3);
    createGrid(num3);
    randomColorEffect();
  });
});

function createGrid(numb){
  containerLength=550;
  containerLength=containerLength-(numb*2);//shorten the container to make up for the 2px for each squares sides
  boxLength=(containerLength/numb);//numb based on user input used to find length of individual squares
  boxLength=Math.trunc(boxLength*10000)/10000;

//loop that creates and then puts the squares into the container
  for (var i=0; i<(numb*numb);i++){
  var $new=$('<div style="display:block; float:left; width:'+boxLength+'px; height:'+boxLength+'px; border:1px solid black;"></div>');
  $new.addClass('square');
  $("#container").append($new);

  };
};
//get rid of old squares to make way for the new ones
 function clearGrid(){
 $('.square').remove();
};
//when the mouse is over a square it will turn red
function defaultSettingEffect(){
  $('.square').mouseover(function(){
    $(this).addClass("defaultSettingEffect");
  });
};
//when the
function lightenUpEffect(){
  
  $('.square').mouseover(function(){
      var squareOpacity=$(this).css('opacity');
      if (squareOpacity>0){
          $(this).css('opacity',squareOpacity -.25);
      };
  });
};
function randomColorEffect(){
 $('.square').mouseover(function(){
   //beautifully simple rgb random color generator on from Sam Deering http://www.sitepoint.com/generating-random-color-values/
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
   $(this).css("background-color", hue);
});
};
