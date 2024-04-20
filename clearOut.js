const fs = require('fs');
const path = require('path');
const folderPath = './out/';


fs.readdir(folderPath, (err, files) => {

    if (err) {
        return;
    }

    files.forEach(file => {
        const filePath = path.join(folderPath, file);

        fs.stat(filePath, (err, stat) => {

            if (err) {
                return;
            }

            if (stat.isFile()) {
                fs.unlink(filePath, err => {
                    if (err) {
                        return;
                    }
                });
            }

        });
    });
});
