const fetch = require('node-fetch');
const authURL = process.env.API_URL_AUTH;

const fetchLogin = async (data) => {
    let status;
    return fetch(`${authURL}/users/login-bg`,{
        rejectUnauthorized: false, 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            // console.log(response);
            status = response.status;
            return response.json();
        })
        .then(json => {
            // console.log(json);
            return{
                status: status,
                data: json
            };
        });
};

module.exports = {
    fetchLogin
};
