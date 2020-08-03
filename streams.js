const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog1.txt', {
    encoding: 'utf8'
})

const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log('...NEW chunk...')
//     console.log(chunk)

//     writeStream.write('\n...........NNNNEEEEEEEEWWWWWWWWW CCCCCCCCCCCCCCCHHHHHHHUUUUUUUNNNNNNKK..........\n')
//     writeStream.write(chunk)

// })

readStream.pipe(writeStream)