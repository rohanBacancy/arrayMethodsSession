// JS can execute one statement at a time
// JS is single threaded language
// Some statements execute instantly (sync tasks)
// Some statements may take n seconds (async tasks)

// Apart from code that takes time to execute, you would also want specific set of
// statements(might be sync) to exec after a specific task is done(async)

// Ex -> after posts are fetched, process it (4 lines of code), 
// and after uses are fetched, list them (5 lines of code)

// how to write above?

// Scenario
// Order food --- Takes time
// Eat food --- Depends on whether food is ordered or not
// Play games
// Write code -- Depends on eat food since I don't code when I am hungry 
// Catch up with a friend

// const orderFood = () => {
//     console.log('Food is being prepared.....')
//     setTimeout(() => {
//         console.log('Food is delivered, you may eat it.....')
//         eatFood()
//     }, 3000)
// }

// const eatFood = () => {
//     console.log('Ate the food.....')
//     writeCode()
// }

// const playGames = () => {
//     console.log('Playing battlefield 2042.....')
// }

// const writeCode = () => {
//     console.log('Writing code.....')
// }

// const catchUpWithFriend = () => {
//     console.log('Catch up with a friend.....')
// }

// orderFood()
// playGames()
// catchUpWithFriend()


// First way to handle async things -> callbacks

const orderFood = (callback1, callback2) => {
    console.log('Food is being prepared.....')
    setTimeout(() => {
        console.log('Food is delivered, you may eat it.....')
        callback1(callback2)
    }, 3000)
}

const eatFood = (writeCode) => {
    setTimeout(() => {
        console.log('Ate the food.....')
        writeCode()
    }, 2000)
}

const playGames = () => {
    console.log('Playing battlefield 2042.....')
}

const writeCode = () => {
    console.log('Writing code.....')
}

const catchUpWithFriend = () => {
    console.log('Catch up with a friend.....')
}

// orderFood(eatFood, writeCode)
// playGames()
// catchUpWithFriend()

// [1,2].map((a) => {
// console.log(a)
// })

// The problem
// callback hell
// also called pyramid of hell
// orderFood(() => {
//     eatFood(() => {
//         writeCode()
//     })
// })
// playGames()
// catchUpWithFriend()

// The solution to above -> PROMISES
// make a promise (APIs like fetch by default does it for you)
// use a promise

const getWeather = (flag = false) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(flag){
                resolve('sunny')
                }
                else {
                    reject('API returned 500')
                }
            }, 2000)
    })
}

const getWeatherIcon = (weather) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(weather === 'sunny'){
                    resolve(`Icon for ${weather} is -> someSunnyIcon`)

                } else if(weather === 'cloudy'){
                    resolve(`Icon for ${weather} is -> someCloudyIcon`)

                } else {
                    reject(`No icons found for ${weather}`)
                }
            }, 1000)
    })
}

// Pending state
// console.log(getWeather(true))

// Ways to handle promises
// Second way to handle async thing -> then catch

// fetching users for 5 seconds
// loader true

// users are fetched
// loading false

//or error from API
// loading false

// getWeather(true)
// .then((res) => getWeatherIcon(res))
// .then((successResponse) => {
//     console.log('Final response is -> ', successResponse)
// })
// .catch((errorResponse) => {
//     console.log('Error because of -> ', errorResponse)
// })
// // Remove event listeners, clear interval, end socket connection
// .finally(() => {
//     console.log('This will be executed after promise is either resolved or rejected.')
// })

const api = 'https://jsonplaceholder.typicode.com/posts'



// Actual API call with promise
// fetch(api)
//     // Why res.json()? => The actual response object contains a lot of meta data
//     // res.json actually targets the body part of the response object and parses it to JS object
//     .then((res) => res.json())
//     .then((data) => console.log(data))

// third way to handle async things in js -> async await

const asyncExecutor = async () => {
    try {
        const getWeatherResp = await getWeather(true)
        const getWeatherIconResp = await getWeatherIcon(getWeatherResp)
        console.log('Final response is -> ', getWeatherIconResp)
    } catch (error) {
        console.log('error from catch', error)
    } finally {
        console.log('This will be executed after all promises are resolved or any one is rejected')
    }
}

asyncExecutor()



// Real API call using async await

async function fetchUsingAsyncAwait(){
    const res = await fetch(api)
    const parsedData = await res.json()
    console.log('The data', parsedData)
}

fetchUsingAsyncAwait()



// const urls = [
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/comments',
//     'https://jsonplaceholder.typicode.com/users'
//   ];

// const fetchResource = async (url) => {
//    const response = await fetch(url);
//    return response.json();
// };

// (async function() {
//     try {
//         // console.log(urls.map(fetchResource))
//         const resultArray = await Promise.all(urls.map(fetchResource))
//         const [posts, comments, users] = resultArray;
//         console.log('Posts:', posts);
//         console.log('Comments:', comments);
//         console.log('Users:', users);
//     } catch (error) {
//         console.log('Error while fetching the data', error)
//     }
// })()
