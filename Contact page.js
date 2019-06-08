// initializing variable for worker
var w;

// function for starting worker
function startWorker() {

    //checking if browser supports web workers and if the worker already exists
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            console.log("Web worker support!")
            w = new Worker("Contact page web worker.js");
        }

    } else {
        console.log("Sorry! No Web Worker support.");
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

startWorker();