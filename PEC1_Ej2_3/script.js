const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencySelect = document.getElementById('currency-one');
const currencySymbol = document.getElementById('currency-symbol');

let ticketPrice = +movieSelect.value;
let currentCurrency = 'USD';
let exchangeRate = 1;

// Fetch exchange rates and update the DOM
function calculate() {
  const selected_currency = currencySelect.value;

  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[selected_currency];

      Array.from(movieSelect.options).forEach(option => {
        const basePrice = +option.value;
        const convertedPrice = (basePrice * rate).toFixed(2);

        option.textContent = `${option.textContent.split('(')[0]} (${convertedPrice} ${selected_currency})`;
      });

      const selectedSeatsCount = count.innerText;
      total.innerText = (selectedSeatsCount * ticketPrice * rate).toFixed(2);
      currencySymbol.innerText = `${selected_currency}`;
    });
}

// Save selected movie index, price and currency
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
    localStorage.setItem('selectedCurrency', currencySelect.value);
  }

// Update count and calculates the currency conversion
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;

  calculate();
}

// Get data from Local Storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  const savedCurrency = localStorage.getItem('selectedCurrency');
  if (savedCurrency !== null) {
    currencySelect.value = savedCurrency;
  }

  const savedMoviePrice = localStorage.getItem('selectedMoviePrice');
  if (savedMoviePrice !== null) {
    ticketPrice = +savedMoviePrice;
  }

  calculate();
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Currency select event
currencySelect.addEventListener('change', () => {
    currentCurrency = currencySelect.value;
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
    calculate();
  });

// Initial count and total set
populateUI();
updateSelectedCount();
