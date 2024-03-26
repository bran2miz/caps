'use strict';


// instance of event that will be used for the driver and vendor.
const EventEmitter = require('events');

const eventPool = new EventEmitter();

// export eventPool to be used in vendor and driver
module.exports = eventPool;