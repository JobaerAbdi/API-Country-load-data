const loadCountryes = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countryData(data))
}

const countryData = all =>{
    const countryContainer = document.getElementById('country-data');
    countryContainer.classList.add('mainContainer');
    all.forEach(country =>{
        //console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('countryStyle');
        countryDiv.innerHTML = `
            <h2>Start Week : ${country.startOfWeek}</h2>
            <h2>TimeZone : ${country.timezones[0]}</h2>
            <h2>Region : ${country.region}</h2>
            <h2>Capital : ${country.capital}</h2>
            <h2>Country Name : ${country.name.common}</h2>
            <img src="${country.flags.png}">
            <button onclick="countryDetails('${country.name.common}')">Country Name</button>
        `;
        countryContainer.appendChild(countryDiv);
    })
}

const countryDetails = (names) =>{
    //console.log(names);
    const url = `https://restcountries.com/v3.1/name/${names}`;
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = desh =>{
    //console.log(desh);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
       <h2>Country Name: ${desh.name.common}</h2>
       <img src="${desh.flags.png}" alt="">
    `;

}

loadCountryes();
