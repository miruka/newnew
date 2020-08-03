const fs = require('fs')

//Reading Files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err)

//     }
//     console.log(data.toString())

// })

//console.log(' Showing Non-Bloking in Action')

//Writing Files

// fs.writeFile('./docs/blog1.txt', 'Node is Awesome', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("Succesful")

// })

// //Directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets/', (err) => {

//         if (err) {
//             console.log(err)
//         }
//         console.log("Folder Created successfully")
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }

//         console.log("Folder DELETED successfully")

//     })
// }
//Deleting Files

if (fs.existsSync('./docs/blog1.txt')) {

    fs.unlink('./docs/blog1.txt', (err) => {
        if (err) {
            console.log(
                "File does NoT Exist"
            )
        }
        console.log('File DELETED')

    })
}