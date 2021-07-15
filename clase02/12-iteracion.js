// you will send the request in one go but recieve response as for each one by one.

let i = 1;

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function somethingAsync(time) {
  console.log('fired');
  return delay(time).then(() => Promise.resolve(i++));
}

const items = [1000, 2000, 3000, 10000];

(async () => {
  for await (const res of items.map((e) => somethingAsync(e))) {
    // do some calculations
    console.log(res);
  }
  console.timeEnd('second way');
})();
