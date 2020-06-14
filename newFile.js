const helmet = require('helmet');
const { app } = require("./myApp");
/** 2) Hide potentially dangerous information - `helmet.hidePoweredBy()` */
// Hackers can exploit known vulnerabilities in Express/Node
// if they see that your site is powered by Express. `X-Powered-By: Express`
// is sent in every request coming from Express by default.
// The `hidePoweredBy` middleware will remove the `X-Powered-By` header.
// You can also explicitly set the header to something else, to throw
// people off. e.g. `helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' })`
// Use `helmet.hidePoweredBy()``
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
