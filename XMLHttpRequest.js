const getToDos = (resource) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();


        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                // callback(undefined, data);  redundant
                resolve(data);
            } else if (request.readyState === 4) {
                // callback('could not fetch data', undefined); redundant
                reject('error getting resource');
            }
        });
        
        request.open('GET', resource);
        request.send();
    });
};

getToDos('todos/Mario.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getToDos('todos/Ren.json');
}).then( data => {
    console.log('promise 2 resolved', data);
    return getToDos('todos/Steve.json');
}).then(data => {
    console.log('promise 3 resolved', data)
}).catch(err => {
    console.log('promise rejected');
});

// When calling data from one JSON file

    // getToDos((err, data) => {
    //     console.log('callback fired');
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(data);
    //     }
    // });


// Callback hell (this is messy, unmaintainable)

    // getToDos('todos/Mario.json',(err, data) =>{
    //     console.log(data);
    //     getToDos('todos/Ren.json',(err, data) =>{
    //         console.log(data);

    //         getToDos('todos/Steve.json',(err, data) =>{
    //             console.log(data);
    //         });
    //     });
    // });



//an example on Promises

    // const promiseExample = () => {
    //     return new Promise((resolve, reject) => {
    //         //fetch something.
    //         resolve('some data');
    //         //reject('some error');
    //     });;
    // }

    // promiseExample().then(data =>{
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // });