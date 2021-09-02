let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object first arguement: method, second: url (to get data from), third: request type asynchronous or not.
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    //What to do in progress(optional)
    xhr.onprogress = function() {
        console.log('on progress');
    }

    //What to do when response is ready
    xhr.onload = function() {
            if (this.status === 200) {
                console.log(this.responseText);
            } else {
                console.log("some error occured");
            }


        }
        // send the request
    let params = `{"name":"test34sad546","salary":"123","age":"23"}`;
    xhr.send(params);
    // xhr.send();
    // console.log("All done")
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function() {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            consol.log(obj);
            let list = document.getElementById('list');
            let str = "";
            for (let key in obj) {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        } else {
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");

}