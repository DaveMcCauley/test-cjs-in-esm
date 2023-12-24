import { testEsmExport } from "./testModule.js";
import { namedCjsExport } from "@apaths/cjs-package";
import colors from "@colors/colors"

testEsmExport();
namedCjsExport();
// testCjsExport();
// console.log(colors);
// colors();

console.log("Did it work?");