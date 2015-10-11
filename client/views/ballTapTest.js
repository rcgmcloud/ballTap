Template.ballTapTest.rendered = function (){
  // var context;
  // var x=100;
  // var y=100;
  // var dx=0.5;
  // var dy=0.5;

  //   context = myCanvas.getContext('2d');
  //   context.beginPath();
  //   context.fillStyle="#0000ff";
  //   // Draws a circle of radius 50 at the coordinates 100,100 on the canvas
  //   context.arc(100,100,20,0,Math.PI*2,true); context.closePath();
  //   context.fill();

  //   context.onclick = function () {
  //     alert("You ball tapped me!");
  //   };

  //   setInterval(draw,10);

  //   function draw()
  //     {
  //       context.clearRect(0,0, 500,400);
  //       context.beginPath();
  //       context.fillStyle="#0000ff";
  //       // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  //       context.arc(x,y,20,0,Math.PI*2,true);
  //       context.closePath();
  //       context.fill();
  //       x+=dx;
  //       y+=dy;

  //       // Boundary Logic
  //       if( x<0 || x>500) dx=-dx;
  //       if( y<0 || y>400) dy=-dy;
  //       x+=dx;
  //       y+=dy;
  //     }

  function makeNewPosition(){
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];
  }

  function animateDiv(){
    var newq = makeNewPosition();
    var posb = makeNewPosition();
    var posc = makeNewPosition();
    var posd = makeNewPosition();
    $('.a').animate({ top: newq[0], left: newq[1] }, function(){
      // animateDiv();
    });
    $('.b').animate({ top: posb[0], left: posb[1] }, function(){
      // animateDiv();
    });
    $('.c').animate({ top: posc[0], left: posc[1] }, function(){
      // animateDiv();
    });
    $('.d').animate({ top: posd[0], left: posd[1] }, function(){
      // animateDiv();
    });
  }

  Meteor.setInterval(animateDiv,500);
  // animateDiv();
};


Template.ballTapTest.events ({
  'click #myCanvas': function (evt, tmpl) {
    console.log(evt);
  },

  'click .ball': function (evt, tmpl) {
    var width = $(evt.toElement).css("width");
    var size = parseInt(width) - 20;

    console.log(width);

    $(evt.toElement).css("width", size);
    $(evt.toElement).css("height", size);
  }
});