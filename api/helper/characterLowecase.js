const converttolowercase = (char) => {
    return char.trim().toLowerCase().split(' ').join('').toString();
};
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
module.exports = {
    converttolowercase,
    capitalizeFirstLetter
};