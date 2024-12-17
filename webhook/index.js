const http = require('http');

const server = http.createServer(async (req, res) => {
  // sleep 2sec
  await new Promise((resolve) => setTimeout(() => resolve(), 1500))

  // res.writeHead(500, { 'Content-Type': 'application/json' });
  // res.end('{"success":false}');

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const b = JSON.parse(body);
    console.log(b?.NewTuple?.id)

    // Header
    //console.log(`Method: ${req.method}`);
    //console.log('Headers:');
    //console.log(req.headers);
    if (body) {
      console.log(body);
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"success":true}');
  });
});

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});
