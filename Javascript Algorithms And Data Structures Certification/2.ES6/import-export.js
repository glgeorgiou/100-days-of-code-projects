/**
 * Understand the Differences Between import and require.
 * Challenge: Add the appropriate import statement that will allow the current file to use the capitalizeString function. The file where this function lives is called "string_functions", and it is in the same directory as the current file.
 */

"use strict";
capitalizeString("hello!");
import { capitalizeString } from "string_functions"



/**
 * Use export to Reuse a Code Block.
 * Challenge:  Below are two variables that I want to make available for other files to use. Utilizing the first way I demonstrated export, export the two variables..
 */
"use strict";
export const foo = "bar";
export const bar = "foo";




/**
 * Use * to Import Everything from a File.
 * Challenge: The code below requires the contents of a file, "capitalize_strings", found in the same directory as it, imported. Add the appropriate import * statement to the top of the file, using the object provided.
 */
import * as capitalize_strings from "capitalize_strings";
"use strict";



/**
 * Create an Export Fallback with export default.
 * Challenge: The following function should be the fallback value for the module. Please add the necessary code to do so.
 */
"use strict";
export default function subtract(x, y) { return x - y; }

/**Import a Default Export.
 * Challenge: In the following code, please import the default export, subtract, from the file "math_functions", found in the same directory as this file.
 */
"use strict";
import subtract from "math_functions";
subtract(7, 4);