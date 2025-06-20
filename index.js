const axios = require('axios');

async function getCountryByName(counryName) {

    const url = 'https://restcountries.com/v3.1/name/' + counryName+'?fields=name';
    console.log('Fetching country data from:', url);

    try {
        const response = await axios.get('https://restcountries.com/v3.1/name/'+counryName);
        
        console.log('Country data fetched successfully:', response.data);


        //return response.data;
    } catch (error) {
        console.error('Error fetching country data:', error);
        throw error;
    }
}

getCountryByName('Finland');
