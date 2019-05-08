var bird;
var pipes = [];
var score = 0;
var endScreen = true;
var bestScore = 0;

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent('game');
  bird = new Bird();
  pipes.push(new Pipe());
}

function startGame(){
  if (bird.y == height || bird.y == 0){
    deletePipes();
    scoreboard();
    checkPos();
    score = 0;
    bird.resetBird();
    endScreen = true;
    resetGame();
  }

 	for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
      score++;
    }

    if (pipes[i].hits(bird)) {
      endScreen = true;
      scoreboard();
      checkPos();
      score = 0;
      deletePipes();
      bird.resetBird();
      resetGame();
    }
  }

  bird.update();
  bird.show();
  textSize(20)
  text(score, 20, 30)

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

function resetGame(){
  if (endScreen){
    textSize(30)
    textAlign(CENTER, CENTER)
    text('Best Score: ' + bestScore, width/2, height/2)
  	if (keyIsPressed || mouseIsPressed){
			endScreen = false;
    }
  } else {
 	startGame();
  }
}
function draw() {
  background(0);
	resetGame();
}

function deletePipes() {
  for (var j = pipes.length-1; j >= 0; j--) {
    pipes.splice(j, 1);
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

function touchStarted(){
	bird.up();
}

function scoreboard(){
  if (score > bestScore){
    bestScore = score;
  }
}

