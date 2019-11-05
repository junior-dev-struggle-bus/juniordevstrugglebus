



function resources(event, context, callback) {
    console.log("\nOn the server!\n");
    callback(null, {
        statusCode: 200,
        // Must stringify as JSON if we want a JSON response body back
        body: JSON.stringify("Server!")
    });
}


exports.handler = resources;


