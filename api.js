const axios = require('axios');
const NEWSAPI_KEY = "";
const NINJAAPI_KEY = "";

async function getAircraftPhotos(model) {
    const accessKey = ""; 
    const apiUrl = ``;

    try {
        const response = await axios.get(apiUrl);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching photos:', error);
        return null;
    }
}

module.exports = { getAircraftPhotos };

async function getNewsByCity() {
    let response, responseData = null;

    try {
        response = await axios.get(``);
        responseData = response?.data?.articles;
    } catch {
        return null;
    }

    let answer = [];

    responseData.forEach(article => {
        answer.push({
            "source": article.source.name,
            "title": article.title,
            "description": article.description,
            "url": article.url,
            "image": article.urlToImage,
            "published_at": new Date(article.publishedAt).toLocaleString('en-GB', { 
                hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short', year: 'numeric', hour12: false
            })
        });
    });

    return answer;
}

async function getAircraftInfo(manufacturer, model) {
    let response, responseData = null;
    try {
        response = await axios.get(``, {
            headers: {
                'X-Api-Key': NINJAAPI_KEY
            }
        });

        responseData = response?.data;
    } catch {
        return null;
    }
    
    return responseData[0];
}

async function getHelicopterInfo(manufacturer, model) {
    let response, responseData = null;

    try {
        response = await axios.get(``, {
            headers: {
                'X-Api-Key': NINJAAPI_KEY
            }
        });

        responseData = response?.data;
    } catch (error) {
        return null;
    }

    return responseData[0];
}


module.exports = {
    getNewsByCity, getAircraftInfo, getHelicopterInfo
};
