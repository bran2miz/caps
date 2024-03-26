
// instance of eventPool that is used in driver and vendor
const eventPool = require('./eventPool');

// first event to fire off. pass in the type of event (pickup) and the type of payload. When logEvent() is called it will log the event object
eventPool.on('pickup', (payload) => {
  logEvent('pickup', payload);
});
// The driver will then console.log that they have picked up the order.

// second event to fire off. pass in the type of event (in-transit) and the type of payload. When logEvent() is called it will log the event object
eventPool.on('in-transit', (payload) => {
  logEvent('in-transit', payload);
});
// The driver will then console.log that they have delivered up the order.

// third event to fire off. pass in the type of event (delivered) and the type of payload. When logEvent() is called it will log the event object
eventPool.on('delivered', (payload) => {
  logEvent('delivered', payload);
});
// The vendor will then console.log that they have completed the order.

function logEvent(event, payload) {
  const currentTime = new Date().toISOString();
  console.log(`EVENT: {
    event: '${event}',
    time: '${currentTime}',
    payload: ${JSON.stringify(payload, null, 2)}
  }`);
}