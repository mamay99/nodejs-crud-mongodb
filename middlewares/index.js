const fs = require("fs");

function logResReq(filename) {
  return (req, res, next) => {
    const logMessage = `\n${Date.now()}: ${req.ip} ${req.method} ${req.path}\n`;

    fs.appendFile(filename, logMessage, (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      }
      next(); // Ensure the request proceeds even if logging fails
    });
  };
}

module.exports = logResReq;
