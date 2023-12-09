// JavaScript using Web Animations API
function animatePage() {
  // Trigger image animation first
  animateImage();

  // After a delay, trigger the text animations
  setTimeout(() => {
    animateText();
  }, 1500); // 1500ms delay

  // After a longer delay, trigger the container and description animations
  setTimeout(() => {
    animateContainer();
  }, 2000); // 2000ms (2 seconds) delay
}

function animateText() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');

  // Create animation for text1
  text1.animate(
    [
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ],
    {
      duration: 1000,
      fill: 'forwards'
    }
  );

  // Create animation for text2 with a delay
  setTimeout(() => {
    text2.animate(
      [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 1000,
        fill: 'forwards'
      }
    );
  }, 1000); // 1000ms (1 second) delay
}

function animateContainer() {
  const container = document.querySelector('.container');
  const description = document.querySelector('.description');

  // Create animation for container
  container.animate(
    [
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ],
    {
      duration: 1500,
      fill: 'forwards'
    }
  );

  // Create animation for description with a delay
  setTimeout(() => {
    description.animate(
      [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 1500,
        fill: 'forwards'
      }
    );
  }, 800); // 800ms delay
}

function animateImage() {
  const profileImg = document.querySelector('.profileImg');

  // Create animation for image
  profileImg.animate(
    [
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ],
    {
      duration: 1000,
      fill: 'forwards'
    }
  );
}

// Call the animation function when the page loads
window.onload = function () {
  // Simulate loading time with a setTimeout
  setTimeout(function () {
    // Hide the loading container
    document.querySelector('.loading-container').style.display = 'none';

    // Display the body content
    document.body.style.display = 'block';

    // Call the animation function
    animatePage();

    // Display the footer
    document.querySelector('footer').style.display = 'block';
  }, 800); // Adjust the timeout duration (in milliseconds) as needed
};
