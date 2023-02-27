const jwt = require('jsonwebtoken');
const authFetch = require('../fetch/auth');

const isAuth = (token) => {
  return authFetch
    .fetchAuth(token)
    .then((response) => {
      // console.log('🚀 ~ file: check-auth.js ~ line 7 ~ .then ~ response', response)
      if (response.status === 200) {
        return response.data.data;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const validToken = await isAuth(token);
    // console.log('🚀 ~ file: check-auth.js ~ line 21 ~ checkAuth ~ validToken', validToken[0].token)
    if (!validToken) {
      return res.status(401).json({
        status_code: 401,
        message: 'You Must Login First',
        data: null,
        request: {
          status_code: 401,
          message: 'Unauthorized',
          url: 'event/create',
        },
      });
    } else {
      // const decoded = jwt.verify(validToken[0].token, process.env.JWT_KEY);
      const decoded = jwt.verify(validToken.token, process.env.JWT_KEY);
      // console.log('🚀 ~ file: check-auth.js ~ line 29 ~ checkAuth ~ decoded', decoded)
      if (decoded.status === false)
        return res.status(401).json({
          status_code: res.statusCode,
          message: 'Email Not Validated Yet',
          data: null,
          request: {
            status_code: res.statusCode,
            message: 'Unauthorized',
            url: req.url,
          },
        });
      req.userData = decoded;
      next();
    }
  } catch (error) {
    return res.status(401).json({
      status_code: 401,
      message: 'You Must Login First',
      data: null,
      request: {
        status_code: 401,
        message: 'Unauthorized',
        url: 'event/create',
      },
    });
  }
};

module.exports = {
  checkAuth,
};
