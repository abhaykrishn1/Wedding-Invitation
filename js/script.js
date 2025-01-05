/**
 * @author Abhay Krishna <abhaykrishn1@gmail.com>
 */

// Sakura falling animation
(function($) {
    "use strict";
        $('.sakura-falling').sakura();
})(jQuery);

// // Play music on any click
// document.addEventListener('click', function() {
//     const audio = document.getElementById("my_audio");
//     if (audio) {
//         audio.volume = 0.5;
//         audio.play().catch(function(error) {
//             console.log("Audio play failed:", error);
//         });
//     }
// });
// Audio control functions
const playAudio = () => {
    const audio = document.getElementById("my_audio");
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(function(error) {
            console.log("Audio play failed:", error);
        });
    }
};

// Play audio after 3 seconds
setTimeout(() => {
    playAudio();
}, 3);

// Also play on click anywhere in the document
document.addEventListener('click', () => {
    playAudio();
});

// Add event listener for when the audio ends
document.getElementById("my_audio")?.addEventListener('ended', () => {
    // Restart the audio when it ends (for looping)
    playAudio();
});

// Add a loading check to ensure audio is ready
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById("my_audio");
    if (audio) {
        audio.load(); // Preload the audio file
    }
});

// Countdown timer
const countDownDate = new Date("Feb 20, 2025 18:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const timeDisplay = document.getElementById("time");
    if (timeDisplay) {
        if (distance < 0) {
            clearInterval(timer);
            timeDisplay.innerHTML = "<div class='end-msg'>Wishing the lovely couple a happy married life! ❤️</div>";
        } else {
            timeDisplay.innerHTML = `
                <div class='container'>
                    <div class='days block'>${days}<br>Days</div>
                    <div class='hours block'>${hours}<br>Hours</div>
                    <div class='minutes block'>${minutes}<br>Minutes</div>
                    <div class='seconds block'>${seconds}<br>Seconds</div>
                </div>
            `;
        }
    }
}, 1000);

// Prevent download of invitation card if link is empty
document.querySelector('.download-invite').addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Invitation card will be available soon!');
    }
});

// Console message
console.log(
    '%c Save the Date: 20th February, 2025! ',
    'background: #674ea7; color: white; font-size: 24px; font-weight: bold; padding: 8px;'
);