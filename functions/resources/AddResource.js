const faunadb = require("faunadb");

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_CONNECTION_STRING
});

exports.handler = async (event, context) => {
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log('Function `todo-create` invoked', data)
  const newResource = {
    data: data
  }
  /* construct the fauna query */
  return client.query(q.Create(q.Ref('classes/resources'), newResource))
    .then((response) => {
      console.log('success', response)
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
