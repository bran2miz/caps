'use strict';

// instance of the eventPool to be used in the handler
const eventPool = require('../eventPool');

// instance of the dependency chance
const Chance = require('chance');

// creates a new instance of chance whenever the pickup happens
const chance = new Chance();

// create a functioin that takes in a store name as an argument (ie Costco)
// payload will be the data that is passed around that has sotre, orderId, customer, and address as its keys and uses dependencies from the chance library
function pickupEvent(storeName) {
    const payload = {
        store: storeName,
        orderId: chance.guid(),
        customer: chance.name(),
        address: chance.address({ short_suffix: true }),
    };
    // use emit so that whenever there is a alert in the hub, it will pickup the delivery. 
    eventPool.emit('pickup', payload);

};

// happens when the hub alerts that the item has been delivered. 
eventPool.on('delivered', (payload) => {
    console.log(`Thank you for your order ${payload.customer}`)
});

module.exports = { pickupEvent };