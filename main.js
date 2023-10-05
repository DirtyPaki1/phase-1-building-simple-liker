// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Select the empty heart element
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

// When a user clicks on an empty heart
const emptyHeart = document.getElementById("empty-heart");
emptyHeart.addEventListener("click", () => {
  // Invoke mimicServerCall to simulate making a server request
  mimicServerCall()
    .then(() => {
      // When the "server" returns a success status
      // Change the heart to a full heart
      emptyHeart.classList.add("full-heart");
      // Add the .activated-heart class to make the heart appear red
      emptyHeart.classList.add("activated-heart");
    })
    .catch(() => {
      // When the "server" returns a failure status
      // Display the error modal by removing the .hidden class
      errorModal.classList.remove("hidden");
      // Display the server error message in the modal
      const errorMessage = document.getElementById("modal-message");
      errorMessage.textContent = "Server Error";
      // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
});

// When a user clicks on a full heart
const fullHeart = document.getElementById("full-heart");
fullHeart.addEventListener("click", () => {
  // Change the heart back to an empty heart
  fullHeart.classList.remove("full-heart");
  // Remove the .activated-heart class
  fullHeart.classList.remove("activated-heart");
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
