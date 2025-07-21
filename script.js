const quotes = [
  "Do something today that your future self will thank you for.",
  "Success is not in what you have, but who you are.",
  "Push yourself, because no one else is going to do it for you.",
  "The secret of getting ahead is getting started.",
  "It always seems impossible until it is done.",
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

// показать случайную цитату при загрузке страницы
window.onload = newQuote;
