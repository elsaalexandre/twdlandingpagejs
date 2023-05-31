var dots = [],
    mouse = {
     //x:0,
     //y:0,
     x: window.innerWidth / 2,
     y: window.innerHeight / 2,
     //x: 500,
     //y: 350,
    };

class Dot {
  constructor() {

    var imagelogo = document.getElementById("imagelogo");
    var rect = imagelogo.getBoundingClientRect();
    //this.x = 0;
    //this.y = 0;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    //this.x = rect.right + 45;
    //this.y = rect.bottom + 33;
    //this.x = rect.left + 99;
    //this.y = rect.top + 19;

    this.node = (function () {
      var n = document.createElement("div");
      n.className = "worm";
      n.style.zIndex = 0;
      document.body.appendChild(n);
      return n;
    } ());
  }
  
  draw() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  }
}

for (var i = 0; i < 100; i++) {
 var d = new Dot();
 dots.push(d);
}

function draw() {

 var x = mouse.x,
     y = mouse.y;
 
 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .9;
   y += (nextDot.y - dot.y) * .9;

 });
}

addEventListener("mousemove", function(event) {

 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

function animate() {
 draw();
 requestAnimationFrame(animate);
}

animate();
