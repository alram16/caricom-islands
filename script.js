// CARICOM member states and official websites
const caricomCountries = [
  { name: "Antigua and Barbuda", website: "https://ab.gov.ag/" },
  { name: "Bahamas", website: "https://www.bahamas.gov.bs/" },
  { name: "Barbados", website: "https://www.gov.bb/" },
  { name: "Belize", website: "https://www.belize.gov.bz/" },
  { name: "Dominica", website: "https://dominica.gov.dm/" },
  { name: "Grenada", website: "https://gov.gd/" },
  { name: "Guyana", website: "https://www.guyana.gov.gy/" },
  { name: "Haiti", website: "https://www.haitilibre.com/" },
  { name: "Jamaica", website: "https://www.jis.gov.jm/" },
  { name: "Montserrat", website: "https://www.gov.ms/" },
  { name: "Saint Kitts and Nevis", website: "https://www.gov.kn/" },
  { name: "Saint Lucia", website: "https://www.govt.lc/" },
  { name: "Saint Vincent and the Grenadines", website: "https://www.gov.vc/" },
  { name: "Suriname", website: "https://www.gov.sr/" },
  { name: "Trinidad and Tobago", website: "https://www.gov.tt/" }
];

const islandGrid = document.getElementById('island-grid');

// Fetch flag from Rest Countries API (prefer svg, fallback to png)
async function getFlag(countryName) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`);
    const data = await response.json();
    const flag = data[0]?.flags?.svg || data[0]?.flags?.png || "";
    return flag;
  } catch (error) {
    console.error(`Error fetching flag for ${countryName}:`, error);
    return "";
  }
}

// Render all country cards (fetch flags in parallel for speed)
async function renderCountries() {
  islandGrid.innerHTML = '';
  const flagPromises = caricomCountries.map(c => getFlag(c.name));
  const flags = await Promise.all(flagPromises);

  caricomCountries.forEach((country, i) => {
    const flagUrl = flags[i] || "";
    const card = document.createElement('div');
    card.className = 'card';

    if (flagUrl) {
      card.innerHTML = `
        <img src="${flagUrl}" alt="Flag of ${country.name}">
        <h3>${country.name}</h3>
        <a href="${country.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
      `;
    } else {
      card.innerHTML = `
        <div class="no-flag">🏳️</div>
        <h3>${country.name}</h3>
        <a href="${country.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
      `;
    }

    islandGrid.appendChild(card);
  });
}

renderCountries();
