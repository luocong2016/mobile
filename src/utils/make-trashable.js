export function makeTrashable(promise) {
  let trash = () => {}

  const wrappedPromise = new Promise((resolve, reject) => {
    trash = () => {
      resolve = null
      reject = null
    }

    promise.then(
      val => {
        if (resolve) {
          resolve(val)
        }
      },
      error => {
        if (reject) {
          reject(error)
        }
      }
    )
  })

  wrappedPromise.trash = trash
  return wrappedPromise
}

// let promise = new Promise(resolve => {
//   setTimeout(resolve, 10000)
// })

// let trashablePromise = makeTrashable(promise)
// trashablePromise.then(() => {
//   console.log('10 seconds have passed')
// })

// trashablePromise.trash()
