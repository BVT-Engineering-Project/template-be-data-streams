const responseFunc = (req, code, message, data, res) => {
    const resFunction = (response, request, mess, value, statusMessage) => {
        return {
            status_code: response.statusCode,
            message: mess,
            data: value,
            request: {
                status_code: response.statusCode,
                message: statusMessage,
                url: request.url
            }
        };
    };
    let statusMessage = '';
    switch (true) {
        case code === 404:
            return res.status(code).json(resFunction(res, req, message, data, 'Not Found'));
        case code === 500:
            return res.status(code).json(resFunction(res, req, message, null, 'Internal Server Error'));
        case req.method === 'PATCH':
            switch (true) {
                case code === 200:
                    statusMessage = 'Success';
                    break;
                case code === 400:
                    statusMessage = 'Bad Request';
                    break;
            }
            return res.status(code).json(resFunction(res, req, message, data, statusMessage));
        case req.method === 'GET':
            switch (true) {
                case code === 200:
                    statusMessage = 'Ok';
            }
            return res.status(code).json(resFunction(res, req, message, data, statusMessage));
        case req.method === 'POST':
            switch (true) {
                case code === 200:
                    statusMessage = 'Success';
                    break;
                case code === 201:
                    statusMessage = 'Created';
                    break;
                case code === 400:
                    statusMessage = 'Bad Request';
                    break;
                case code === 409:
                    statusMessage = 'Conflict';
                    break;
            }
            return res.status(code).json(resFunction(res, req, message, data, statusMessage));
        case req.method === 'DELETE':
            switch (true) {
                case code === 200:
                    statusMessage = 'Success';
                    break;
                case code === 400:
                    statusMessage = 'Bad Request';
                    break;
            }
            return res.status(code).json(resFunction(res, req, message, data, statusMessage));
    }
};
module.exports = {responseFunc};
