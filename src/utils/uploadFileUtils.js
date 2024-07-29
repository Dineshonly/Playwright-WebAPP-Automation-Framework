import path from 'path';
const fs = require('fs');


async function uploadFile(filePath, page, selector) {
    try {
        const fullFilePath = path.join(__dirname, filePath);
        
        if (!fs.existsSync(fullFilePath)) {
            throw new Error(`File "${filePath}" does not exist.`);
        }
        if (path.extname(fullFilePath) !== '.xlsx' && path.extname(fullFilePath) !== '.csv'){
            throw new Error('Invalid file type. Only .xlsx, .csv files are allowed.');
        }
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator(selector).click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(fullFilePath);
        console.log(`File "${filePath}" uploaded successfully.`);
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error; 
    }
}

module.exports = { uploadFile};

/*
*   Calling Statement Example
*   await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
*   const filePath = '../../fixtures/download.xlsx';
*   const uploadButton = "#fileinput";
*   await uploadFile(filePath, page, uploadButton);
*/
