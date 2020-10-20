'use strict'

var assert = require('assert');

const OrderService = require('../../src/services/order-service').OrderService;

describe('OrderService', function () {
  describe('#createOrder()', function () {
    it('should create an order', async function () {
      const orderInfo = {
        customerInfo: 'user1',
        billingAddress: '9612 Park Ave S, Bloomington, MN 55408',
        shippingAddress: '9612 Park Ave S, Bloomington, MN 55408',
        creditCardNumber: '378282246310005',
        local: true
      }
      const os = new OrderService(orderInfo);
      await os.addOrderItem('item1', 90.22)
        .addOrderItem('item2', 87.60)
        .createOrder();
      assert.strictEqual(os.order.orderTotal, (90.22 + 87.60));
    });
    it('exceeds max order', async function () {
      let errorMsg;
      const orderInfo = {
        customerInfo: 'user1',
        billingAddress: '9612 Park Ave S, Bloomington, MN 55408',
        shippingAddress: '9612 Park Ave S, Bloomington, MN 55408',
        creditCardNumber: '378282246310005',
        local: true
      }
      const os = new OrderService(orderInfo);
      try {
        await os.addOrderItem('item1', 9000000.22)
          .addOrderItem('item2', 87.60)
          .createOrder();
      } catch (e) {
        errorMsg = e.message
      }
      assert.strictEqual(errorMsg, 'invalid value for orderTotal');
    });
    it('bad credit card should throw', async function () {
      let errorMsg;
      const orderInfo = {
        customerInfo: 'user1',
        billingAddress: '9612 Park Ave S, Bloomington, MN 55408',
        shippingAddress: '9612 Park Ave S, Bloomington, MN 55408',
        creditCardNumber: '37828224631000',
        local: true
      }
      const os = new OrderService(orderInfo);
      try {
        await os.addOrderItem('item1', 90.22)
          .addOrderItem('item2', 87.60)
          .createOrder();
      } catch (e) {
        errorMsg = e.message;
      }
      assert.strictEqual(errorMsg, 'creditCard invalid');
    });
    it('missing billingAddress', async function () {
      let errorMsg;
      const orderInfo = {
        customerInfo: 'user1',
        // billingAddress: '9612 Park Ave S, Bloomington, MN 55408',
        shippingAddress: '9612 Park Ave S, Bloomington, MN 55408',
        creditCardNumber: '378282246310005',
        local: true
      }
      const os = new OrderService(orderInfo);
      try {
        await os.addOrderItem('item1', 90.22)
          .addOrderItem('item2', 87.60)
          .createOrder();
      } catch (e) {
        errorMsg = e.message
      }
      assert.strictEqual(errorMsg, 'missing required properties: billingAddress');
    });
  });
  // describe('#completeOrder()', function () {
  // it('full order lifecycle succeeds', async function () {
  //   const orderInfo = {
  //     customerInfo: 'user1',
  //     billingAddress: '9612 Park Ave S, Bloomington, MN 55408',
  //     shippingAddress: '9612 Park Ave S, Bloomington, MN 55408',
  //     creditCardNumber: '378282246310005'
  //   }
  //   const os = new OrderService(orderInfo);
  //   let orderId = null;
  //   order = await os.addOrderItem('item1', 90.22)
  //     .addOrderItem('item2', 87.60)
  //     .createOrder()
  //     .submitOrder()
  //     .shipOrder()
  //     .deliverOrder({ file: 'sig.img', url: '' });
  //   assert.ok(order);
  // });
  // it('run out of order fails', async function () {
  //   let errorMsg;
  // try {
  // const orderInfo = {
  //   customerInfo: 'user1',
  //   billingAddress: '223',
  //   shippingAddress: '12343',
  //   creditCardNumber: '378282246310005'
  // }
  // const os = new OrderService(orderInfo);
  // await os.addOrderItem('item1', 90.22)
  //   .addOrderItem('item2', 87.60)
  //   .createOrder()
  //    .then(os => os.shipOrder())
  //         .then(os => os.submitOrder())
  //         .then(os => os.deliverOrder({ file: 'sig.img', url: '' }))
  //         .then(os => console.log(`Success: ${os.orderId} complete`))
  //         .catch(e => { throw e });
  //     } catch (e) {
  //       errorMsg = e.message;
  //     }
  //     assert.strictEqual(errorMsg, ERRORMSG);
  //   });
  // });
});

async function processOrder(fn, ...args) {
  const os = new OrderService();
  await os[fn](...args).catch(e => console.error(e.message));
}

const disableTests = true;

(async () => {

  if (disableTests) return;

  const orderInfo = {
    customerInfo: 'user1',
    billingAddress: '223',
    shippingAddress: '12343',
    creditCardNumber: '378282246310005',
    local: true
  }
  const os = new OrderService(orderInfo);
  await os.addOrderItem('item1', 2343.99)
    .createOrder();
  await processOrder('submitOrder', os.orderId);
  await processOrder('shipOrder', os.orderId);
  await processOrder('deliverOrder', 'proof', os.orderId);
  await processOrder('cancelOrder', 'reason', os.orderId);
})();


(async () => {
  const orderInfo = {
    customerInfo: 'user1',
    billingAddress: '9612 Park Ave S, Bloomington, MN 55408',
    shippingAddress: '9612 Park Ave S, Bloomington, MN 55408',
    creditCardNumber: '378282246310005',
    local: true
  }
  const os = new OrderService(orderInfo);
  await os.addOrderItem('item1', 90.22)
    .addOrderItem('item2', 87.60)
    .createOrder();
  console.log(os.orderId);
})();