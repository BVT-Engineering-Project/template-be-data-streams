class DateConverter {
    static calcAge = (birthdate) => {
        return new Date(Date.now() - new Date(birthdate).getTime()).getUTCFullYear() - 1970;
    };
}

module.exports = DateConverter;
