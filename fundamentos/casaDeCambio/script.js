const handleRates = ({ rates }) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach(([currency, rates]) => {
    renderRates(currency, rates);
  });
};

const renderRates = (currency, rates) => {
  const ul = document.getElementById('currency-list');
  const li = document.createElement('li');
  li.innerText = `${currency}: ${rates}`;
  ul.appendChild(li);
};
