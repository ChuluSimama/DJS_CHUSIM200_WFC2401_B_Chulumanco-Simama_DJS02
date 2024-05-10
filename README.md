#Whole Number Divider

This project is a simple web application designed to perform whole number division. Users can input a dividend and a divider, and upon submission, the application calculates the result and displays it. The initial version of the application lacked input validation and error handling, which could lead to incorrect results or crashes in certain scenarios. This document outlines the modifications I made to the code in order to enhance the application's robustness by implementing input validation, error handling, and ensuring accurate whole number division results.

## File Structure

- index.html: Contains the corrected and improved code.
- scripts.js: Contains the corrected and improved code.
- styles.css: Contains the CSS styles used in the project.
- README.md: This document explaining the debugging process and changes made.

## Original Code

### index.html

- Missing input validation for the dividend and divider fields.

### scripts.js

- Division is performed directly without validation or error handling.
- Uses Object.fromEntries(entries) to extract form data without parsing to numbers.
- No error handling for invalid inputs such as division by zero or non-numeric inputs.
- Division result is displayed without checking if it's a whole number.

## Changes Made

- I implemented input validation to ensure both the dividend and divider are valid numbers. For example I used parseFloat to parse input values as floating-point numbers.
- I added error handling for various scenarios such as division by zero and NaN inputs. Displayed error messages using the showError function.
- I checked for whole number division results and displayed them accordingly. I used Number.isInteger() to check if the division result is a whole number.
