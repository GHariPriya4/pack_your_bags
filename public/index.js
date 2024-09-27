


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {

  // Get the popup element
  var popup = document.querySelector('.popup');

  // Get the close button
  var closeButton = document.querySelector('.popup-close');

  // When the close button is clicked, hide the popup
  closeButton.onclick = function() {
    popup.style.display = 'none';
  };

  // When the user clicks outside the popup, hide it
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  };
});

// Show the popup after a delay of 5 seconds (5000 milliseconds)
setTimeout(function() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'block';
}, 5000);


var introPictures = document.querySelectorAll(".intro-picture");

introPictures.forEach(function(introPicture) {
  introPicture.addEventListener("click", function() {
    window.open("/india.html", "_blank");
  });
});

const downloadButton = document.querySelector(".Download-button2");

downloadButton.addEventListener("click", function() {
  window.open("https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gclid=Cj0KCQjw_r6hBhDdARIsAMIDhV_UstSbtsP4As1QJ-rYiwqJgIoPgh26W1kwNvmb39UvtBmfXNdmrBoaAlDuEALw_wcB&gclsrc=aw.ds");
});



var video = document.getElementById("myVideo");
  video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
  }, false);

  // Select all links with hashes
var links = document.querySelectorAll('a[href*="#"]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Get the target element and its position
    var target = document.querySelector(this.getAttribute('href'));
    var targetPosition = target.offsetTop;

    // Smooth scroll to the target element
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
}















































// window.addEventListener('DOMContentLoaded', function() {
//   var bodyContent = document.getElementById('body');
//   var contentPosition = bodyContent.getBoundingClientRect().top;
//   var screenPosition = window.innerHeight / 2;
  
//   if (contentPosition < screenPosition) {
//     bodyContent.classList.add('appear');
//   }
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var popup = document.querySelector('.popup');
//   var closeButton = document.querySelector('.popup-close');
//   closeButton.onclick = function() {
//     popup.style.display = 'none';
//   };
//   window.onclick = function(event) {
//     if (event.target == popup) {
//       popup.style.display = 'none';
//     }
//   };
// });



// window.onload = function() {
//   var popup = document.querySelector('.popup');
//   console.log(popup);
//   var closeButton = document.querySelector('.popup-close');
//   closeButton.onclick = function() {
//     popup.style.display = 'none';
//   };
//   window.onclick = function(event) {
//     if (event.target == popup) {
//       popup.style.display = 'none';
//     }
//   };
// };


