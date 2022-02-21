const fetchCurrency = async () => {
  const result = await fetch(`https://api.exchangerate.host/latest?base=BRL`);
  const data = await result.json();
  handleRates(data);
};
