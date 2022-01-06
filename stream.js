const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const readStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
   //console.log(chunk);

   //or--------------------------
   
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);