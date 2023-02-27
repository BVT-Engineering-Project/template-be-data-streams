const SSE = require("express-sse");
const streams = new SSE(["Connection established with SSE server"]);

module.exports = streams;