const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET;
const cookieParser = require('cookie-parser');


const authenticateJWT = (req, res, next) => {
    const { token } = req.cookies; // Ensure you're using cookie-parser

    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, clientData) => {
            if (err) {
                return res.sendStatus(403); // Forbidden if token is invalid
            }
            req.user = clientData; // Store client data in request
            next(); // Proceed to the next middleware/route
        });
    } else {
        return res.sendStatus(403); // Forbidden if no token present
    }
};

module.exports = authenticateJWT;

