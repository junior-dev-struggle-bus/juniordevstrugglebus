



function resources(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "From the server!"
    });
}


exports.handler = resources;


