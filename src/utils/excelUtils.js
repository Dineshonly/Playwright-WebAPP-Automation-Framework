const ExcelJS = require('exceljs');

/**
 * Reads data from a specified Excel sheet and returns the value associated with the given key.
 *
 * @param {string} excelFilePath - The path to the Excel file.
 * @param {string} sheetName - The name of the sheet to read from.
 * @param {string} key - The key to look for in the Excel sheet.
 * @returns {string|undefined} The value associated with the key, or undefined if the key is not found.
 * @throws Will throw an error if the key is not found or the sheet is not found.
 */
async function getValueFromExcel(excelFilePath, sheetName, key) {
    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(excelFilePath);
        const worksheet = workbook.getWorksheet(sheetName);
        if (!worksheet) {
            throw new Error(`Sheet with name "${sheetName}" not found in the workbook.`);
        }
        let value;
        let keyFound = false;
        worksheet.eachRow((row) => {
            if (row.getCell(1).value === key) { // Assuming the key is in the first column
                value = row.getCell(2).value; // Assuming the value is in the second column
                keyFound = true;
            }
        });
        if (!keyFound) {
            throw new Error(`Key "${key}" not found in the worksheet.`);
        }
        return value;
    } catch (err) {
        console.error(`Error reading Excel file: ${err.message}`);
        throw err;
    }
}


/**
 * Writes data to a specified Excel sheet under the given key.
 *
 * @param {string} excelFilePath - The path to the Excel file.
 * @param {string} sheetName - The name of the sheet to write to.
 * @param {string} key - The key to write in the Excel sheet.
 * @param {string} value - The value to associate with the key in the Excel sheet.
 * @throws Will throw an error if the sheet is not found.
 */
async function setValueToExcel(excelFilePath, sheetName, key, value) {
    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(excelFilePath);
        const worksheet = workbook.getWorksheet(sheetName);
        if (!worksheet) {
            throw new Error(`Sheet with name "${sheetName}" not found in the workbook.`);
        }
        let keyFound = false;
        worksheet.eachRow((row) => {
            if (row.getCell(1).value === key) { // Assuming the key is in the first column
                row.getCell(2).value = value; // Write the value in the second column
                keyFound = true;
            }
        });
        if (!keyFound) {
            const newRow = worksheet.addRow([key, value]); // Add new row if key is not found
            newRow.commit();
        }
        await workbook.xlsx.writeFile(excelFilePath);
    } catch (err) {
        console.error(`Error writing to Excel file: ${err.message}`);
        throw err; // Re-throw the original error
    }
}

module.exports = { getValueFromExcel, setValueToExcel};


/*
* Calling Statement Example:
* await getValueFromExcel('fixtures/SNE_TestData.xlsx', 'Sheet1', 'UserName');
* await setValueToExcel('fixtures/SNE_TestData.xlsx', 'Sheet1', 'UserName','NewUserName')
*/