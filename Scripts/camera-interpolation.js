// Set the initial index for the camera positions array
let currentIndex = 0;

// Function to interpolate between two values using an easing function
function interpolate(startValue, endValue, progress, easing) {
  const easingFn = easings[easing];
  return easingFn(progress) * (parseFloat(endValue) - parseFloat(startValue)) + parseFloat(startValue);
}

// Easing functions
const easings = {
  linear: (t) => t,
  easeInOutQuad: (t) => t<.5 ? 2*t*t : -1+(4-2*t)*t
  // Add more easing functions as needed
};

// Define the camera positions array (funcArr)
const funcArr = [
  function () {
                mv2.cameraOrbit = '90deg 90deg 0.002481m'
                mv2.cameraTarget = '-0.06967m 0.017m 0.0452m' 
                mv2.fieldOfView = '60deg'
            },

            function () {
                mv2.cameraOrbit = '90deg 90deg 0.0198m'
                mv2.cameraTarget = '-0.08m 0.02m 0.03m'
                mv2.fieldOfView = '60deg'
            },

            function () {
                mv2.cameraOrbit = '90deg 90deg 0.0198m'
                mv2.cameraTarget = '-0.08m 0.02m 0.02m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '90deg 90deg 0.0198m'
                mv2.cameraTarget = '-0.08m 0.02m 0.01m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '90deg 90deg 0.0198m'
                mv2.cameraTarget = '-0.08m 0.02m 0m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '90deg 90deg 0.0198m'
                mv2.cameraTarget = '-0.08m 0.02m -0.01m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '0deg 90deg 0.01074m'
                mv2.cameraTarget = '-0.05458m 0.017m 0m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '-90deg 90deg 0.03453m'
                mv2.cameraTarget = '-0.03m 0.017m 0m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '90deg 90deg 0.03453m'
                mv2.cameraTarget = '-0.05m 0.017m 0.03m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '180deg 90deg 0.03453m'
                mv2.cameraTarget = '-0.04m 0.02m 0.04m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '180deg 90deg 0.03453m'
                mv2.cameraTarget = '-0.02m 0.02m 0.04m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '270deg 90deg 0.01417m'
                mv2.cameraTarget = '-0.02m 0.02m 0.03m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '450deg 90deg 0.03574m'
                mv2.cameraTarget = '-0.02m 0.02m 0m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '360deg 90deg 0.03574m'
                mv2.cameraTarget = '-0.01m 0.02m -0.02m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '360deg 90deg 0.03574m'
                mv2.cameraTarget = '0.01m 0.02m -0.02m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '270deg 90deg 0.03574m'
                mv2.cameraTarget = '0.02m 0.02m -0.01m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '90deg 90deg 0.03574m'
                mv2.cameraTarget = '0m 0.02m 0.04m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '180deg 90deg 0.03574m'
                mv2.cameraTarget = '0.01m 0.02m 0.04m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '180deg 90deg 0.03574m'
                mv2.cameraTarget = '0.04m 0.02m 0.04m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '270deg 90deg 0.03574m'
                mv2.cameraTarget = '0.05m 0.02m 0.04m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '450deg 90deg 0.03574m'
                mv2.cameraTarget = '0.03m 0.02m 0m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '360deg 90deg 0.03574m'
                mv2.cameraTarget = '0.04m 0.02m -0.02m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '360deg 90deg 0.03574m'
                mv2.cameraTarget = '0.06m 0.02m -0.02m'
                mv2.fieldOfView = '60deg'
            },
            function () {
                mv2.cameraOrbit = '270deg 90deg 0.006974m'
                mv2.cameraTarget = '0.06232m 0.017m -0.003316m'
                mv2.fieldOfView = '60deg'
            },
  // Define additional camera positions and targets in the same manner
  // ...
];

// Set the duration and easing function for the interpolation
const duration = 1000; // Adjust the duration as needed
const easing = 'easeInOutQuad'; // Adjust the easing function as needed

// Function to interpolate and set the camera position and target
function setCameraPosition(index, modelViewer) {
  const positionFn = funcArr[index];

  // Call the position function to get the camera position and target
  positionFn();

  // Calculate the distance between the current and next camera positions
  const currentPos = modelViewer.cameraOrbit;
  const nextPos = mv2.cameraOrbit;
  const distance = Math.abs(parseFloat(nextPos.split(' ')[0]) - parseFloat(currentPos.split(' ')[0]));

  // Interpolate the camera position and target
  interpolateCamera(currentPos, nextPos, distance, duration, easing, modelViewer);
}

// Function to interpolate the camera position and target
function interpolateCamera(currentPos, nextPos, distance, duration, easing, modelViewer) {
  const startTime = performance.now();

  function updateCameraPosition(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const interpolatedPos = interpolate(currentPos, nextPos, progress, easing);

    // Update the camera position in the model viewer
    modelViewer.cameraOrbit = interpolatedPos;

    if (progress < 1) {
      // Continue interpolating until reaching the end of the duration
      requestAnimationFrame(updateCameraPosition);
    } else {
      // Snap to the next camera point when the interpolation is complete
      modelViewer.cameraOrbit = nextPos;
    }
  }

  // Start the interpolation animation
  requestAnimationFrame(updateCameraPosition);
}

// Function to handle scroll event
function handleScroll(event, modelViewer) {
  const delta = Math.sign(event.deltaY);

  // Increment or decrement the current index based on the scroll direction
  currentIndex += delta;

  // Wrap the index within the range of available camera positions
  if (currentIndex < 0) {
    currentIndex = funcArr.length - 1;
  } else if (currentIndex >= funcArr.length) {
    currentIndex = 0;
  }

  // Set the camera position and target based on the current index
  setCameraPosition(currentIndex, modelViewer);
}

// Attach the scroll event listener to the document
document.addEventListener('wheel', (event) => handleScroll(event, document.getElementById('modelViewer')));

// Set the initial camera position and target
setCameraPosition(currentIndex, document.getElementById('modelViewer'));
