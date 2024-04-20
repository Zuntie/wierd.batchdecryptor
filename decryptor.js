const fs = require('fs');
const getFormattedDateTime = require('./formatDnT')

// Read the encrypted file
fs.readFile('instructions/fullsized.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }

    let lines = data.split('\n');
    let totalLines = lines.length;

    let sections = [];
    let currentSection = [];
    let variables = {};

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();

        // Removes bloat
        line = line.replace('%dzZdgdRZFXYqUBbsslHpeGIaEjuKgTAzzriIxKRnCpLhdoMZaFuADVnxQZyXJhSMxyQCtsUIuuNOVAWpwvJByaWEeLRylTDuxZKEyjFHKMfihyBqciAoxqnwCmyHBwwA:dzZchdQZFYYpVBbrrlHofGIaFjvKhRAzzqiIyJQmBpLhcoLZaFvADVmxPZyXJhRLxyPCurVIvvNNVAXoxvJByaWDfLQylUDvxZKFyjGIKLgihyBpciAnypnxCl=%', '');

        currentSection.push(line);


        // Gets the code assembler
        if (line.startsWith('%PrRnPbRMUN%')) {
            if (currentSection.length > 0) {
                sections.push({lines: currentSection, variables: variables});
                currentSection = [];
                variables = {};
            }
        }



        // Gets the variables
        if (line.startsWith('"') && line.endsWith('"')) {
            let parts = line.slice(1, -1).split('%RsrV%');

            if (parts.length === 2) {
                let varName = parts[0];
                let varValue = parts[1];

                variables[varName] = varValue;
            }
        }


        // Console logs the progress
        let progress = ((i + 1) / totalLines) * 100;
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`Decryption progress: ${progress.toFixed(2)}%`);
    }

    // Pushes the sections
    if (currentSection.length > 0) {
        sections.push({lines: currentSection, variables: variables});
    }

    // process.stdout wont make a new line, so we have to do it ourselfs
    console.log('')


    let outputId = `out/output_${getFormattedDateTime()}`

    // Get the assembled code at the end of the section
    let assembledCode = sections.map(section => {
        let assembler = section.lines[section.lines.length - 1];
        let code = assembler;

        for (let varName in section.variables) {
            let varValue = section.variables[varName];
            code = code.replace(`%${varName}%`, varValue);
        }

        return code;
    }).join('\n');


    // Write the assembled code to a new file
    fs.writeFile(outputId + '.bat', assembledCode, 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }

        console.log('The assembled code was saved!');
    });


    // Write output to fle
    let decryptedData = lines.join('\n');

    fs.writeFile(outputId + '.txt', decryptedData, 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }

        console.log(`Final code has been written to ${outputId}`);
    });


    // Write json file with variables
    fs.writeFile( outputId + '.json', JSON.stringify(sections, null, 2), 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }

        console.log('The JSON file was saved!');
    });

});
