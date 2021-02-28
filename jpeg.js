var http = require('http')
var fs = require('fs')

fs.readFile('image.jpg', function(err, data) {
  if (err) throw err // Fail if the file can't be read.
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'})
    res.end(data) // Send the file data to the browser.
  }).listen(3000)
  console.log('Server running at http://localhost:8124/')
})

res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><body><img src="data:image/jpeg;base64,')
  res.write(Buffer.from(data).toString('base64'));
  res.end('"/></body></html>');