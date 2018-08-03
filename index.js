const app = require("./app");
const port = parseInt(process.env.PORT || 4000);

app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));
