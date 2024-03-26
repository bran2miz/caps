'use strict';

//logger will be what you will run using node logger.js

// didn't export anything in hub or driver so don't need to set it to a variable.
require('./hub');
const vendorModule = require('./vendor');
require('./driver');

vendorModule.pickupEvent('Costco');