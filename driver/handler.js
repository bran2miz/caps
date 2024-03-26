'use strict';

// instance of the eventPool from eventPool.js
const eventPool = require('../eventPool');


// whenever the hub receives a notification that there is a pickup, it will then console that the driver picked up the order id.
eventPool.on('pickup', (payload) => {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    // it will emit and console after it is picked up 
    eventPool.emit('in-transit', payload);
    
    setTimeout(()=> {
        console.log(`DRIVER: delivered ${payload.orderId}`);
        // it will emit and console after it is delievered and will re-emit every 3000 seconds
        eventPool.emit('delivered', payload);
    }, 3000)
});

module.exports = {};