document.addEventListener("DOMContentLoaded", () => {
  const countryList = document.getElementById("countryList");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const showListBtn = document.getElementById("showListBtn");

  function renderCountries(countries) {
    countryList.innerHTML = countries.map(country => `
      <div class="col">
        <div class="country-card text-center bg-white shadow" onclick="openCountry('${country.name}')">
          <img src="${country.flag}" alt="${country.name}" class="w-100"/>
          <div class="p-3">
            <h5 class="fw-bold">${country.name}</h5>
            <p class="text-muted small">eVisa • ${country.stay}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  showListBtn.addEventListener("click", () => {
    renderCountries(evisaCountries);
    showListBtn.style.display = "none";
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = evisaCountries.filter(c => c.name.toLowerCase().includes(query));
    
    if (query === "") {
      searchResults.innerHTML = "";
      return;
    }
    
    searchResults.innerHTML = `<div class="alert alert-info">Found ${filtered.length} countries</div>`;
    renderCountries(filtered);
  });
});

function openCountry(name) {
  const country = evisaCountries.find(c => c.name === name);
  if (!country) return;

  const details = `
    <div class="container py-5">
      <div class="row">
        <div class="col-md-8 mx-auto text-center">
          <img src="${country.flag}" alt="${name}" width="150" class="mb-4"/>
          <h1>${name} eVisa for Indians</h1>
          <div class="card mt-4">
            <div class="card-body">
              <h4>Visa Fee: ${country.fee}</h4>
              <h4>Processing Time: ${country.time}</h4>
              <h4>Stay Allowed: ${country.stay}</h4>
              <p class="mt-4">Apply at official government portal. Valid passport (6+ months) required.</p>
              <a href="#" class="btn btn-primary btn-lg">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const win = window.open("", "_blank");
  win.document.write(`
    <!DOCTYPE html><html><head><title>${name} Visa</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
    </head><body>${details}</body></html>
  `);
}