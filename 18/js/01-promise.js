const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
})

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});


// promise.then(onResolve, onReject)


// Change value of isSuccess variable to call resolce or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});

// Will run first
console.log("Before promise.then()");

// Registering promise callbacks
promise.then(
    // onResolve will run third or not at all
    value => {
        console.log("onResolve call inside promise.then()");
        console.log(value);
    },
    // onReject will run third or not at all
    error => {
        console.log("onReject call inside promise.then()");
        console.log(error); // "Error! Error passed to reject function"
    }
);

// Will run second
console.log("After promise.then()");

//
// promise.catch
//

promise.catch(error => {
    // promise rejected
});


// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});

promise
    .then(value => {
    console.log(value);
})
    .catch(error => {
    console.log(error);
});


//
// promise.finally(() => { // promise fullfilled or rejected })
//

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});


promise
    .then(value => console.log(value)) // "Success! Value passed to resolve function"
    .catch(error => console.log(error)) // "Error! Error passed to reject function"
    .finally(() => console.log("Promise settled")); // Promise settled


//
// Ланцюжки промісів
//

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});

promise
    .then(value => {
        console.log(value); // 5
        return value * 2;
    })
    .then(value => {
        console.log(value); // 10
        return value * 3;
    })
    .then(value => {
        console.log(value); // 30
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Final task");
    });


//
// Промісифікація функцій
//

const fetchUserFromServer = (username, onSuccess, onError) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
        // Change value of isSuccess variable to simulate request status
        const isSuccess = true;

        if (isSuccess) {
            onSuccess("success value");
        } else {
            onError("error");
        }
    }, 2000);
}

const onFetchSuccess = user => {
    console.log(user);
};

const onFetchError = error => {
    console.error(error);
}

fetchUserFromServer("Mango", OnFetchSuccess, OnFetchError);


//
// Промісифікація
//

const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for ${username}`);

        setTimeout(() => {
            // Change value of isSuccess variable to simulate request status
            const isSuccess = true;

            if (isSuccess) {
                resolve("success value");
            } else {
                reject("error");
            }
        }, 2000);
    });
};

fetchUserFromServer("Mango")
    .then(user => console.log(user));
    .catch(error => console.error(error));
