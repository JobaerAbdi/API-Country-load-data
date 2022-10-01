const loadCountryes = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countryData(data))
}

const countryData = all =>{
    const countryContainer = document.getElementById('country-data');
    all.forEach(country =>{
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('countryStyle');
        countryDiv.innerHTML = `
            <h2>Name : ${country.name.common}</h2>
            <h2>Start Week : ${country.startOfWeek}</h2>

            <h2>TimeZone : ${country.timezones[0]}</h2>
        `;
        countryContainer.appendChild(countryDiv);
    })
}
loadCountryes();