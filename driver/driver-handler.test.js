const driverHandler = require('./handler');
const eventPool = require('../eventPool');

jest.mock('../eventPool');

const simulateEvent = (eventName, payload) => {
  eventPool.emit(eventName, payload);
}

describe('Driver Client Application Tests', ()=> {
  beforeEach(()=> {
    jest.spyOn(console, 'log').mockImplementation();
    jest.clearAllMocks();
  });
  afterEach(()=> {
    jest.restoreAllMocks();
  });

  test('the pickup event test logs and emitting in-transit event', ()=> {
    const mockPayload = {
      store: 'test-store',
      orderId: 'test-order-id',
      customer: 'test-customer',
      address: 'test-address'
    };
    console.log(mockPayload);
    simulateEvent('in-transit', mockPayload);
    expect(console.log).toHaveBeenCalled();
    expect(eventPool.emit).toHaveBeenCalledWith('in-transit', mockPayload);
  });

  test('the in-transit event is logging and emitting delivered event', ()=> {
    const mockPayload = {
      store: 'test-store',
      orderId: 'test-order-id',
      customer: 'test-customer',
      address: 'test-address'
    };
    console.log(mockPayload);

    simulateEvent('delivered', mockPayload);

    expect(console.log).toHaveBeenCalled();
    expect(eventPool.emit).toHaveBeenCalledWith('delivered', mockPayload);
  })



})