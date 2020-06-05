const router = require("express").Router();
const routes = require('./api');

// Import any routes defined in the api folder, and places them behind the '/api/ prefix. 
// All final route orginization takes place here, as different sets of routes are imported and placed behind relavent prefixes.
// Once this is done, the formatted router can be exported. 
router.use('/api', routes);

module.exports = router;