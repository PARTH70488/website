document.addEventListener("DOMContentLoaded", function() {
  var body = document.body;

  // Hide the footer initially
  var footer = document.getElementById('myFooter');
  footer.classList.add('hide-footer');

  // Start logo animation
  var logo = document.querySelector('.logo');
  logo.classList.add('animate-logo');

  // Calculate the delay for starting background color transition (50% of animation duration)
  var animationDuration = 3000; // Duration of logo animation in milliseconds (adjust as needed)
  var delay = animationDuration / 2;

  // Delay the start of background color transition
  setTimeout(startBackgroundColorTransition, delay);

  function startBackgroundColorTransition() {
      var duration = 3000; // Duration of transition in milliseconds (adjust as needed)
      var startTime = performance.now();
      var startColor = [0, 0, 0]; // Black
      var endColor = [255, 255, 255]; // White

      function updateBackgroundColor() {
          var currentTime = performance.now();
          var elapsedTime = currentTime - startTime;
          var progress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1
          var currentColor = [];

          // Calculate the current color based on the progress
          for (var i = 0; i < 3; i++) {
              currentColor[i] = Math.round(startColor[i] + (endColor[i] - startColor[i]) * progress);
          }

          // Set the background color of the body
          body.style.backgroundColor = 'rgb(' + currentColor.join(',') + ')';

          // Continue updating the background color until the duration is reached
          if (progress < 1) {
              requestAnimationFrame(updateBackgroundColor);
          } else {
              // Show the footer gradually after color update animation completes
              showFooterGradually();
          }
      }

      // Start updating the background color when animation is at 50%
      updateBackgroundColor();
  }

  // Function to show the footer gradually
  function showFooterGradually() {
      var opacity = 0;
      var interval = 20; // Adjust interval as needed for smoothness
      var duration = 500; // Duration of transition in milliseconds (adjust as needed)
      var increment = interval / duration;

      footer.style.opacity = opacity;
      footer.classList.remove('hide-footer');

      var timer = setInterval(function() {
          opacity += increment;
          footer.style.opacity = opacity;

          if (opacity >= 1) {
              clearInterval(timer);
              footer.style.opacity = 1;
          }
      }, interval);
  }
});
