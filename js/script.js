var body = document.querySelector("body");
var selectMood = document.querySelector("#moods");

selectMood.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (mood === "sad") {
    body.classList.remove("happy");
    body.classList.add("sad");
    body.classList.remove("passionate");
  } else if (mood === "passionate") {
    body.classList.remove("happy");
    body.classList.remove("sad");
    body.classList.add("passionate");
  }
});
