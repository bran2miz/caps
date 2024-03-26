const vendorHandler = require('./handler');
const eventPool = require('../eventPool');
const { afterEach} = require('node:test');


jest.mock('../eventPool');

const simulateEvent = (eventName, payload) => {
  eventPool.emit(eventName, payload);
};

describe('Vendor/Customer Application Test', () => {
  beforeEach(() => {
    jest.spy(console, 'log').mockImplementation();
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  // describe('Vendor Client Application Tests', () => {
  //   beforeEach(() => {
  //     jest.spyOn(console, 'log').mockImplementation();
  //     jest.clearAllMocks();
  //   });
  //   afterEach(() => {
  //     jest.restoreAllMocks();
  //   });

  //   afterEach(() => {
  //     jest.restoreAllMocks();
  //   });
  test('should test the pickup event to determine if it emits the event', () => {
    const storeName = 'QFC';
    const mockPayload = {
      store: storeName,
      orderId: expect.any(String),
      customer: expect.any(String),
      address: expect.any(String),
    };
    vendorHandler.pickupEvent(storeName);
    expect(eventPool.emit).toHaveBeenCalledWith('pickup', mockPayload);
  });
});