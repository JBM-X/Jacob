{
  window.location.href = 'https://wa.me/+254746599745';  // Your WhatsApp number
});

document.getElementById('paymentBtn').addEventListener('click', function() {
  window.location.href = 'tel:+254746599745'; // Mobile payment redirection
});

window.onload = function() {
  // Device info
  const deviceName = navigator.userAgent;
  document.getElementById("device-info").innerHTML = "Device: " + deviceName;

  // Current time
  const currentDate = new Date();
  document.getElementById("current-time").innerHTML = "Current Time: " + currentDate.toLocaleString();

  // Geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  getElementById("location-info").innerHTML = "Location: Latitude " + latitude + "°, Longitude " + longitude + "°";
    }, function() {
      document.getElementById("location-info").innerHTML = "Location: Not available";
    });
  } else {
    document.getElementById("location-info").innerHTML = "Location: Geolocation is not supported by this browser.";
  }
};