const countrySelect = document.getElementById("countrySelect");
const result = document.getElementById("result");

// Country flags (ISO 3166-1 alpha-2 country codes used in flag URLs)
const countryFlags = {
  "Kenya": "https://flagcdn.com/w320/ke.png",
  "Nigeria": "https://flagcdn.com/w320/ng.png",
  "South Africa": "https://flagcdn.com/w320/za.png",
  "Egypt": "https://flagcdn.com/w320/eg.png",
  "Ghana": "https://flagcdn.com/w320/gh.png",
  "Ethiopia": "https://flagcdn.com/w320/et.png",
  "Tanzania": "https://flagcdn.com/w320/tz.png",
  "Uganda": "https://flagcdn.com/w320/ug.png",
  "Morocco": "https://flagcdn.com/w320/ma.png",
  "Algeria": "https://flagcdn.com/w320/dz.png"
};

countrySelect.onchange = function () {
  const selectedCountry = this.value;

  if (selectedCountry && countryFlags[selectedCountry]) {
    const flagURL = countryFlags[selectedCountry];
    result.innerHTML = `
      You selected: <strong>${selectedCountry}</strong><br>
      <img src="${flagURL}" alt="${selectedCountry} flag" width="160" style="margin-top:10px; border:1px solid #ccc; border-radius:8px;">
    `;
  } else {
    result.innerHTML = "";
  }
};
