const clean = (obj) => {
    for (let objWhere in obj) {
        if (obj[objWhere] === '' || obj[objWhere] === undefined) {
            delete obj[objWhere];
        }
    }
};

module.exports = {
    clean
};