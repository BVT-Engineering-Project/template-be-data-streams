const fetch = require('node-fetch');
const authURL = process.env.API_URL_AUTH;

const fetchAuth = (token) => {
    let status;
    return fetch(`${authURL}/check-token/`,{
        rejectUnauthorized: false, 
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
    })
        .then(response => {
            status = response.status;
            return response.json();
        })
        .then(json => {
            return{
                status: status,
                data: json
            };
        });
};

module.exports = {
    fetchAuth
};
