



function resources(event, context, callback) {
    const resource = JSON.parse(event.body);
    console.log("\nOn the server!\n\n", resource, "\n");
    callback(null, {
        statusCode: 200,
        // Must stringify as JSON if we want a JSON response body back
        body: JSON.stringify("1")
    });
}


exports.handler = resources;



