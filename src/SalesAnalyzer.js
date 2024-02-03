
//import all the require module
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const _ = require('lodash');

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
 //create array name it as  fileContents
const readFileContents = (fileName, cb) => {
 try {
  const fileContents = [];

  const readableStream = fs.createReadStream(fileName);
  const lineReader = readline.createInterface({
    input: readableStream,
  });
  
  let isFirstLine = true;  // Flag to track the first line

  lineReader.on('line', (line) => {
    if (isFirstLine) {
      isFirstLine = false;  // Set the flag to false after processing the first line
      return;  // Skip the first line (column headers)
    }
    
    const [date, customer_id, product_category, payment_method, value, time_on_site, clicks_in_site] = line.split(',');

    // Handling 'value [USD]' and 'time_on_site [Minutes]' properties
    const record = {
      date,
      customer_id: parseInt(customer_id),
      product_category: parseInt(product_category),
      payment_method,
      'value [USD]': parseFloat(value),
      'time_on_site [Minutes]': parseFloat(time_on_site),
      clicks_in_site: parseInt(clicks_in_site),
    };

    fileContents.push(record);
  });

  lineReader.on('close', () => {
    cb(null, fileContents)
  })
 }

 catch {
  cb(err, null)
 }
   
 
   //push row by row data in the array created

}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  try {
    const filteredData = fileContents.filter(record => record.payment_method === 'credit');
    cb(null, filteredData);
  } catch (err) {
    cb(err, null);
  }
};
  

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    //use writeFile method and write the filteredData in output.txt file
    const writeableStream = fs.createWriteStream('output.txt');
    writeableStream.write('date,customer_id,product_category,payment_method,value [USD],time_on_site [Minutes],clicks_in_site\n')
    
    records = JSON.parse(filteredData);
    records.forEach((record) => {
      writeableStream.write(`${JSON.stringify(record)}\n`)
    });

    writeableStream.on('finish', () => {
      cb(null, 'Successfully wrote filtered data to output.txt file..!')
    });

    writeableStream.end();

  } catch (err) {
    cb(err, null)
  }
    
}


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
