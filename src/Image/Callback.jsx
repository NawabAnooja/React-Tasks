function processResult(result, callback) {
    // Do some processing with the result
    let processedResult = result + 10;

    // Call the callback function and pass the processed result to it
    callback(processedResult);
}

function handleResult(finalResult) {
    console.log("The final result is: " + finalResult);
}

// Calling processResult and passing handleResult as a callback
processResult(5, handleResult);
