const fs = require('fs')

//write html file

function writeSite(html){
    fs.writeFile('./dist/index.html', html, err => {
    if (err){
         throw err
    }
    console.log("saved")
    copyFile()
    })
}

// coppy CSS template
const copyFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
    }          
         console.log('css copied')   
});
}

module.exports = writeSite, copyFile
