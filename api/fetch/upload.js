
const fetch = require('node-fetch');

const uploadMulti = async(body, token) => {
    body.map((item=> {
        let status;
        // return fetch('http://fb-kemendikbud.lokasi.dev/image/api/kemendikbud/v1.0/upload-file',{
            // return fetch('http://localhost:5007/api/kemendikbud/v1.0/upload-file',{
            return fetch(`${process.env.API_URL_IMAGES}/api/kemendikbud/v1.0/upload-file`,{
            method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Accept-Charset': 'utf-8',
        },
        body: JSON.stringify(item)

        })
        .then((response) => {
            status = response.status;
            return response.json();
        })
        .then((json) => {
            console.log(json);
            return {
                status: status,
                data: json,
            };
        }).catch(err => {
            return err;
        });
    }));
};

module.exports = {
    uploadMulti
};