async function demo_async_await () {
  const simple_promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise Fulfilled!'), 5000)
  })
  // wait for the promise to be resolved
  const result = await simple_promise
  console.log(result)
}

demo_async_await()
