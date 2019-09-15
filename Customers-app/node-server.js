const jsonServer = require('json-server')
const server = jsonServer.create()
server.listen(3002, () => {
  console.log('JSON Server is running')
})

server.put('/customers/09876223', (req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = JSON.parse(Buffer.concat(body).toString());
    console.log(JSON.stringify(body));
    if (body.age && body.age > 18) {
      console.log("error de validación");
      return res.send({ 
        error: true,
        validation: { 
          age: 'Debe ser menor de edad',
          name: 'El nombre es incorrecto'
        }
      });
    } else {
      res.send('ok');
    }
  })});