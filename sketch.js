var img;
var song;
var diameter; 
var bugs=[];
var Counter = 0;
H = 600;
W = 600

var scl = 1.2
var scl2= .4
function preload(){
  song = loadSound('assets/star.mp3');
}
function setup() {
  angleMode(DEGREES);
  colorMode(HSB,80,100,100)
  createCanvas(1000, 800);
  frameRate(20)
  noStroke()
  img = loadImage("assets/castle.jpg");
  img2= loadImage("assets/tink.png")
  song.play()
  for (var i=0; i<100; i++) {
    bugs.push(new Jitter());
  }
   system = new ParticleSystem(createVector(width/2, 50));
}



function draw() {
  background(0);
  textSize(18);
  fill(0,100,100);
  noStroke()
  image(img,width/2-scl*img.width/2,0, img.width * scl, img.height * scl);
  image(img2,mouseX,mouseY,img2.width*scl2,img.height*scl2)
  ChangeXY(width/2,height/2,30);
  ChangeXY(width/4, height/4,0);
  ChangeXY(.75*width,.75*height,0);
  
  fill(255)
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
  Counter += 4;
}


// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}



function ChangeXY(CentX,CentY, phase) {
  var Amp= .6*width/2;
  var Angle = 0;
  var x0 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y0 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle = 30;
  var x1 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y1 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle = 60;
  var x2 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y2 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle = 90;
  var x3 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y3 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle = 120;
  var x4 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y4 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle = 150;
  var x5 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y5 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle= 180;
  var x6 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y6 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle= 210;
  var x7 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y7 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle= 240;
  var x8 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y8 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle= 270;
  var x9 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y9 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle= 300;
  var x10 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y10 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle= 330;
  var x11 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y11 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);
  
  Angle= 360;
  var x12 =  CentX+cos(Angle)*SineWave(Counter,0,Amp,1,phase);
  var y12 =  CentY+sin(Angle)*SineWave(Counter,0,Amp,1,phase);

  fill(0,100,100), ellipse(x0, y0, 20, 20);
  fill(10,100,100),ellipse(x1, y1, 20, 20);
  fill(20,100,100),ellipse(x2, y2, 20, 20);
  fill(30,100,100),ellipse(x3, y3, 20, 20);
  fill(40,100,100),ellipse(x4, y4, 20, 20);
  fill(50,100,100),ellipse(x5, y5, 20, 20);
  fill(60,100,100), ellipse(x6, y6, 20, 20);
  fill(70,100,100), ellipse(x7, y7, 20, 20);
  fill(80,100,100), ellipse(x8, y8, 20, 20);
  fill(95,100,100), ellipse(x9, y9, 20, 20);
  fill(85,100,100), ellipse(x10, y10, 20, 20);
  fill(75,100,100), ellipse(x11, y11, 20, 20);
  fill(65,100,100), ellipse(x12, y12, 20, 20);
}



function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(2, 3);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 3, 3);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(createVector(mouseX, mouseY)));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
   
   
