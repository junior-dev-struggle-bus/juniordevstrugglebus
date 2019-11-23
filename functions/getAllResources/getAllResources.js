const faunadb = require("faunadb");

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_CONNECTION_STRING
});

exports.handler = (event, context) => {
  console.log("Function `todo-read-all` invoked");
  return client
    .query(q.Paginate(q.Match(q.Index("all_resources"))))
    .then(response => {
      const resourcesRef = response.data;
      console.log("Todo refs", resourcesRef);
      console.log(`${resourcesRef.length} todos found`);
      // create new query out of todo refs. http://bit.ly/2LG3MLg
      const getAllResourcesDataQuery = resourcesRef.map(ref => {
        return q.Get(ref);
      });
      // then query the refs
      return client.query(getAllResourcesDataQuery).then(ret => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        };
      });
    })
    .catch(error => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};
