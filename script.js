function updateDateTime() {
  const now = new Date();

  // Day and month names
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Get the day and month names
  const year = now.getFullYear();
  const day = dayNames[now.getDay()];
  const month = monthNames[now.getMonth()];

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  console.log(`Today is ${day}, ${month} ${now.getDate()}, ${year}. Time: ${hours}:${minutes}:${seconds}`);

  const ampm = hours >= 12 ? 'PM' : 'AM';

  const timeString = ``;
  const dateString = `${day} ${month} ${year} ${hours % 12 || 12}:${minutes}:${seconds} ${ampm}`;

  document.getElementById('date').textContent = dateString;
}

setInterval(updateDateTime, 1000);
updateDateTime();
function predictChild() {
  const momName = document.getElementById('momname').value.trim();
  const dadName = document.getElementById('dadname').value.trim();
  const predictionElement = document.getElementById('prediction');
  const childImage = document.getElementById('childImage');

  if (!momName || !dadName) {
    predictionElement.textContent = 'Please enter both Mom and Dad names.';
    childImage.style.display = 'none';
    return;
  }

  const combinedLength = momName.length + dadName.length;

  let prediction;
  if (combinedLength % 2 === 0) {
    prediction = {
      name: "Boy",
      img: 'images/boy.jpg'
    };
  } else {
    prediction = {
      name: 'Girl',
      img: 'images/girl.jpg'
    };
  }

  predictionElement.textContent = `Predicted: ${prediction.name}`;
  childImage.src = prediction.img;
  childImage.style.display = 'block';
}

// Attach event listeners for keypress
document.getElementById('momname').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    predictChild();
  }
});

document.getElementById('dadname').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    predictChild();
  }
});