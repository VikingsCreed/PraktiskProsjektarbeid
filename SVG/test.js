
function splitScroll() {
var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
}

splitScroll();


/*<script id="rendered-js">
   var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function (el, i) {return i * 250;},
  direction: 'alternate',
  loop: true });
      //# sourceURL=pen.js
</script>