jQuery(document).ready(function ($) {
  // vars
  

  var leftAd = $('.leftAd'),
  rightAd = $('.rightAd'),
  car = $('.car'),
  leftWheel = $('.left-wheel'),
  rightWheel = $('.right-wheel'),
  backImg = $('.back-img'),
  leftTopTitle = $('.leftTopTitle'),
  leftBottomTitle = $('.leftBottomTitle'),
  rightTopTitle = $('.rightTopTitle'),
  learnMore = $('.learnMore'),
  star = $('.star'),
  lights = $('.lights');
  
  leftWheel.addClass('rotate');
  rightWheel.addClass('rotate');
    
  var carStart = TweenMax.to(car, 3, {x:700, ease:new SlowMo(-0.4, 1.4), onComplete:wheelStop});
  
  function wheelStop() {
leftWheel.removeClass('rotate');
rightWheel.removeClass('rotate');
}
  
  var floatLeft = TweenMax.fromTo(leftAd, 1, {x:-350}, {x:0, onComplete:adLeftFlight});
  
    function adLeftFlight() {
  TweenMax.to(leftAd, 1, {bezier:[{x:0, y:0}, {x:-150, y:300}], ease:Power1.easeInOut, delay:2});
    }
  
 
var floatRight = TweenMax.fromTo(rightAd, 1, {x:350}, {x:0, onComplete:adRightFlight});
  
   function adRightFlight() {
   TweenMax.to(rightAd, 1, {bezier:[{x:0, y:0}, {x:150, y:-200}], ease:Power1.easeInOut, delay:2});
}
  
     var floatContainer = new TimelineMax();
  
   var floatAds = floatContainer.add(floatLeft, "0").add(floatRight,"0");


  var carInCircle = new TimelineMax();

  
    var carNextStart = TweenMax.fromTo(car, 2, {x:-350}, {x:200, onStart:wheelNextStop, onComplete:wheelStop});
  
  
  function wheelNextStop() {
  if (leftWheel.hasClass('rotate')) {
      leftWheel.addClass('rotate');
} else {
      leftWheel.addClass('rotate');
}
    
    if (rightWheel.hasClass('rotate')) {
      rightWheel.addClass('rotate');
} else {
      rightWheel.addClass('rotate');
}
    
  }
  

     var circle = TweenLite.to(backImg, 1, {className:"+=borderRadius"});
  
  var titleTopLeft = TweenMax.fromTo(leftTopTitle, 1, {x:-350}, {x:0, ease:Back.easeOut.config(2)});
  
  var titleBottomLeft = TweenMax.fromTo(leftBottomTitle, 1, {x:-350}, {x:0, ease:Back.easeOut.config(2)});
  
  var titleTopRight = TweenMax.fromTo(rightTopTitle, 1, {x:350}, {x:0, ease:Back.easeOut.config(2)});
  
  var buttonBottom = TweenMax.fromTo(learnMore, 1, {y:350}, {y:0});
  
  var titlesFrame = new TimelineMax();
  
     titlesFrame.add(titleTopLeft, "0").add(titleBottomLeft, "0.5").add(titleTopRight, "0.5").add(buttonBottom, "0.5"); 

 carInCircle.add(carNextStart, "0").add(circle, "2");
  
  var starRotate = new TimelineMax({repeat:-1, yoyo:false});
  
var rotateWrapper = starRotate.to(star, 0.5, {scale:1}).to(star, 0.5, {rotation:"+=360"}, "-=0.5").to(star, 0.5, {scale:0}).to(star, 0.5, {delay:3.5, scale:0});
  

  var lightsRotate = new TimelineMax({repeat:-1, yoyo:false});
 
  
  
  var lightsWrapper =  lightsRotate.to(lights, 0.5, {opacity:1}).to(lights, 0.4, {x:130}, "-=0.4").to(lights, 0.2, {opacity:0}).to(lights, 0.2, {x:0, delay:4});
 
 
        // whole animation
  var wholeAnimation = new TimelineMax();
  
  wholeAnimation.add(carStart, "0").add(floatAds, "3").add( carInCircle, "6").add( titlesFrame, "8.5").add(rotateWrapper, "10.5").add(lightsWrapper, "11.5");
  
  

 
  //end JQ
  });