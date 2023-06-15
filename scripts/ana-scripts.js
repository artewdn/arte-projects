// VALIDATION MESSAGE
function validateAccess() {
  let keyword = document.getElementById("keyword").value;
  let validKeywords = ["ana romadhona", "ana romadona", "anna romadhona", "anna romadona", "ana", "anna", "arte"]; // Array of valid keywords

  if (keyword.trim() === "") {
    alert("Please enter your name.");
  } else if (validKeywords.includes(keyword.toLowerCase())) {
    playSong();
    document.getElementById("container").style.display = "none"; // Hide the container
    document.getElementById("content").style.display = "block"; // Show the content
    showSongPlayer();
  } else {
    alert(`
    Invalid name. Access denied.
    This page is not for you!
    Try again.`);
  }
}

  // PLAY SONG
  function playSong() {
    let song = document.getElementById("song");
    song.play();
  }


  function showSongPlayer() {
    var songPlayer = document.getElementById("songPlayer");
    songPlayer.style.display = "block";
  }

  function pauseSong() {
    var song = document.getElementById("song");
    song.pause();
  }




// RUNNING BUTTON
const evilButton = document.getElementById('evil-button');
const OFFSET = 100;

evilButton.addEventListener('click', () => {
  alert('I am really sad :(')
  window.close()
} )


document.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;
  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10, buttonBox.y + verticalOffset / verticalDistanceFrom * 10
    )
  }
})

function setButtonPosition(left,top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = evilButton.getBoundingClientRect();

  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET
  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET
  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET
  }

  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}


// BUTTON TOGGLED
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    //button.classList.add('is-toggled');
    turnOffPreviousButton();
    // before turning this button ON, check if there's already a button that's turned ON and turn it OFF.
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled')
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}



// HAPPY POPUP
function showAlert() {
  var alertPopup = document.getElementById("alertPopup");
  alertPopup.style.display = "block";
  setTimeout(function() {
    alertPopup.style.display = "none";
  }, 20000); // Hide after 20 seconds
}

function closeAlert() {
  var alertPopup = document.getElementById("alertPopup");
  alertPopup.style.display = "none";
}

// HANDLE KEY
function handleValidateKeyDown(event) {
  if (event.key === 'Enter') {
    validateAccess();
}
}

/*
// TYPING TEXT

const text = `From the very first day our paths crossed, you have brought boundless joy and love into my life.

I want to spend every moment cherishing and building our future together.

Will you make me the happiest person in the world?`; // Replace with your desired text
    
const typingTextElement = document.getElementById("typing-text");
    let charIndex = 0;

    function type() {
      if (charIndex < text.length) {
        typingTextElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust the typing speed by changing the timeout value
      } else {
        typingTextElement.style.borderRight = "none"; // Remove the cursor style
      }
    }

    type();
*/