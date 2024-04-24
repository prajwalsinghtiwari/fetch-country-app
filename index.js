document.addEventListener("DOMContentLoaded", function() {
    const countryContainer = document.getElementById('country-container');
    const sortBtn = document.getElementById('sort-btn');

    // Function to fetch and display countries
    function fetchAndDisplayCountries() {
        fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
            .then(response => response.json())
            .then(data => {
                // console.log(data,"mmmmm")
                displayCountries(data?.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }

    // Function to display countries
    function displayCountries(countries) {
        countryContainer.innerHTML = ''; // Clear previous countries

        countries?.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('country-card');

            const name = document.createElement('h2');
            name.textContent = country.name;

            const capital = document.createElement('p');
            capital.textContent = `Capital: ${country.capital}`;

            const population = document.createElement('p');
            population.textContent = `Population: ${country.population}`;

            countryCard.appendChild(name);
            countryCard.appendChild(capital);
            countryCard.appendChild(population);

            countryContainer.appendChild(countryCard);
        });
    }

    // Fetch and display countries initially
    fetchAndDisplayCountries();

    // Event listener for sorting by population
    sortBtn.addEventListener('click', function() {
        fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc')
            .then(response => response.json())
            .then(data => {
                // console.log(data?.data,"ppppp");
                displayCountries(data?.data);
            })
            .catch(error => {
                console.error('Error sorting countries by population:', error);
            });
    });
});
