const arrayUtils = require('./arrayUtils');
const stringUtils = require('./stringUtils');
const objUtils = require('./objUtils');

try {
  // should pass
  const a1 = arrayUtils.remove([1,2,3],5);
  console.log('Executed successfully.');
} catch (error) {
  console.error('Fail the test');
}

try {
  // should fail
  const a2 = arrayUtils.remove(7987, 5);
  console.error('Fail the test, should throw.');
} catch (error) {
  console.log('Executed successfully and catch the exception.');
}

try {
  // should pass
  const r1 = stringUtils.repeat('Yolo ', 6);
  console.log('Executed successfully.');
} catch (error) {
  console.error('Fail the test');
}

try {
  // should fail
  const r2 = stringUtils.repeat('', 1000000);
  console.error('Fail the test, shoud have failed.');
} catch (error) {
  console.log('Executed successfully and catch the exception.')  
}

try {
  // Should Pass
  const h1 = arrayUtils.head([2, 3, 4]);
  console.log('head passed successfully');
} catch (error) {
  console.error('head failed test case');
}
try {
  // Should Fail
  const h2 = arrayUtils.head(1234);
  console.error('head did not error');
} catch (error) {
  console.log('head failed successfully');
}

try {
  // Should Pass
  const l1= arrayUtils.last([2, 3, 4]);
  console.log('last passed successfully');
} catch (error) {
  console.error('last failed test case');
}
try {
  // Should Fail
  const l2 = arrayUtils.last(2343);
  console.error('last did not error');
} catch (e) {
  console.log('last failed successfully');
}