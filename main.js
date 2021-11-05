const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartButton = document.getElementsByClassName("like-glyph")
let heartButtons = [...heartButton]

heartButtons.map(button => {
  button.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      if (button.innerHTML === EMPTY_HEART) {
        button.innerHTML = FULL_HEART
        button.className = 'activated-heart'
      } else if (button.innerHTML === FULL_HEART) {
        button.innerHTML = EMPTY_HEART
        button.className = 'activated-heart'
      }
    })
    .catch(() => {
      let element = document.getElementById("modal");
      element.classList.remove("hidden");
      setTimeout(() => {
      element.classList.add('hidden')
      }, 3000)
    })
  })
})

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
