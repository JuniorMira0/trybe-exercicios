const selectEstados = document.querySelector("#select-estados");
let stateOptions = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "SP",
  "TO",
];

function CREATE_STATE_OPTIONS() {
  for (let i = 0; i < stateOptions.length; i += 1) {
    const options = document.createElement("option");
    options.innerText = stateOptions[i];
    options.value = stateOptions[i];
    selectEstados.appendChild(options);
  }
}
CREATE_STATE_OPTIONS();
