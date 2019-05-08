var config = {
  apiKey: "AIzaSyC-AGxmMxnH3AfGgzS35YtPUHFCCr5EXFU",
  authDomain: "leaderboard-flappy-bird.firebaseapp.com",
  databaseURL: "https://leaderboard-flappy-bird.firebaseio.com",
  projectId: "leaderboard-flappy-bird",
  storageBucket: "leaderboard-flappy-bird.appspot.com",
  messagingSenderId: "361881628520"
};
firebase.initializeApp(config);

var database = firebase.database();

var top1Points = database.ref("top1/points");
var top2Points = database.ref("top2/points");
var top3Points = database.ref("top3/points");

var top1Name = database.ref("top1/name");
var top2Name = database.ref("top2/name");
var top3Name = database.ref("top3/name");

var pos1Points = 0;
var pos2Points = 0;
var pos3Points = 0;

var pos1Name = '';
var pos2Name = '';
var pos3Name = '';

var user = prompt("Introduce tu nombre");
var saveScore = true;

if (user == null || user == '') {
  saveScore = false;
  alert("Tu puntuación no se guardará");
}

//POINTS
top1Points.on('value', function(snapshot) {
    console.log(snapshot.val());
    pos1Points = snapshot.val();
});
top2Points.on('value', function(snapshot) {
    console.log(snapshot.val());
    pos2Points = snapshot.val();
});
top3Points.on('value', function(snapshot) {
    console.log(snapshot.val());
    pos3Points = snapshot.val();
});

//NAMES
top1Name.on('value', function(snapshot) {
    console.log(snapshot.val());
    pos1Name = snapshot.val();
    updateScore()
});
top2Name.on('value', function(snapshot) {
    console.log(snapshot.val());
    pos2Name = snapshot.val();
    updateScore()
});
top3Name.on('value', function(snapshot) {
    console.log(snapshot.val());
    pos3Name = snapshot.val();
    updateScore();
});

function updateScore() {
  document.getElementById("top1").innerHTML = pos1Name + ' - ' + pos1Points;
  document.getElementById("top2").innerHTML = pos2Name + ' - ' + pos2Points;
  document.getElementById("top3").innerHTML = pos3Name + ' - ' + pos3Points;
}

function checkPos() {
  if (saveScore) {
    if (score > pos1Points) {
      setTop('top3', pos2Points, pos2Name)
      setTop('top2', pos1Points, pos1Name)
      setTop('top1', score, user);
    } else if (score > pos2Points) {
      setTop('top3', pos2Points, pos2Name)
      setTop('top2', score, user);
    } else if (score > pos3Points) {
      setTop('top3', score, user);
    }
  }
}

function setTop(top, points, user) {
  database.ref(top).set({
    name: user,
    points: points
  });
  updateScore();
}
