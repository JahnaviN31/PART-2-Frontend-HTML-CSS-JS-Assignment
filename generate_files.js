// Define the structure of your directories and problems with their corresponding numbers
const fileStructure = {
    "Basic JavaScript": [
      { number: '001', name: 'Comment Your JavaScript Code' },
      { number: '002', name: 'Declare JavaScript Variables' },
      { number: '003', name: 'Storing Values with the Assignment Operator' },
      { number: '004', name: 'Assigning the Value of One Variable to Another' },
      { number: '005', name: 'Initializing Variables with the Assignment Operator' },
      { number: '006', name: 'Declare String Variables' },
      { number: '007', name: 'Understanding Uninitialized Variables' },
      { number: '008', name: 'Understanding Case Sensitivity in Variables' },
      { number: '009', name: 'Explore Differences Between the var and let Keywords' },
      { number: '010', name: 'Declare a Read-Only Variable with the const Keyword' },
      { number: '011', name: 'Add Two Numbers with JavaScript' },
      { number: '012', name: 'Subtract One Number from Another with JavaScript' },
      { number: '013', name: 'Multiply Two Numbers with JavaScript' },
      { number: '014', name: 'Divide One Number by Another with JavaScript' },
      { number: '015', name: 'Increment a Number with JavaScript' },
      { number: '016', name: 'Decrement a Number with JavaScript' },
      { number: '017', name: 'Create Decimal Numbers with JavaScript' },
      { number: '018', name: 'Multiply Two Decimals with JavaScript' },
      { number: '019', name: 'Divide One Decimal by Another with JavaScript' },
      { number: '020', name: 'Finding a Remainder in JavaScript' },
      { number: '021', name: 'Compound Assignment With Augmented Addition' },
      { number: '022', name: 'Compound Assignment With Augmented Subtraction' },
      { number: '023', name: 'Compound Assignment With Augmented Multiplication' },
      { number: '024', name: 'Compound Assignment With Augmented Division' },
      { number: '025', name: 'Escaping Literal Quotes in Strings' },
      { number: '026', name: 'Quoting Strings with Single Quotes' },
      { number: '027', name: 'Escape Sequences in Strings' },
      { number: '028', name: 'Concatenating Strings with Plus Operator' },
      { number: '029', name: 'Concatenating Strings with the Plus Equals Operator' },
      { number: '030', name: 'Constructing Strings with Variables' },
      { number: '031', name: 'Appending Variables to Strings' },
      { number: '032', name: 'Find the Length of a String' },
      { number: '033', name: 'Use Bracket Notation to Find the First Character in a String' },
      { number: '034', name: 'Understand String Immutability' },
      { number: '035', name: 'Use Bracket Notation to Find the Nth Character in a String' },
      { number: '036', name: 'Use Bracket Notation to Find the Last Character in a String' },
      { number: '037', name: 'Use Bracket Notation to Find the Nth-to-Last Character in a String' },
      { number: '038', name: 'Word Blanks' },
      { number: '039', name: 'Store Multiple Values in one Variable using JavaScript Arrays' },
      { number: '040', name: 'Nest one Array within Another Array' },
      { number: '041', name: 'Access Array Data with Indexes' },
      { number: '042', name: 'Modify Array Data With Indexes' },
      { number: '043', name: 'Access Multi-Dimensional Arrays With Indexes' },
      { number: '044', name: 'Manipulate Arrays With push Method' },
      { number: '045', name: 'Manipulate Arrays With pop Method' },
      { number: '046', name: 'Manipulate Arrays With shift Method' },
      { number: '047', name: 'Manipulate Arrays With unshift Method' },
      { number: '048', name: 'Shopping List' },
      { number: '049', name: 'Write Reusable JavaScript with Functions' },
      { number: '050', name: 'Passing Values to Functions with Arguments' },
      { number: '051', name: 'Return a Value from a Function with Return' },
      { number: '052', name: 'Global Scope and Functions' },
      { number: '053', name: 'Local Scope and Functions' },
      { number: '054', name: 'Global vs. Local Scope in Functions' },
      { number: '055', name: 'Understanding Undefined Value returned from a Function' },
      { number: '056', name: 'Assignment with a Returned Value' },
      { number: '057', name: 'Stand in Line' },
      { number: '058', name: 'Understanding Boolean Values' },
      { number: '059', name: 'Use Conditional Logic with If Statements' },
      { number: '060', name: 'Comparison with the Equality Operator' },
      { number: '061', name: 'Comparison with the Strict Equality Operator' },
      { number: '062', name: 'Practice comparing different values' },
      { number: '063', name: 'Comparison with the Inequality Operator' },
      { number: '064', name: 'Comparison with the Strict Inequality Operator' },
      { number: '065', name: 'Comparison with the Greater Than Operator' },
      { number: '066', name: 'Comparison with the Greater Than Or Equal To Operator' },
      { number: '067', name: 'Comparison with the Less Than Operator' },
      { number: '068', name: 'Comparison with the Less Than Or Equal To Operator' },
      { number: '069', name: 'Comparisons with the Logical And Operator' },
      { number: '070', name: 'Comparisons with the Logical Or Operator' },
      { number: '071', name: 'Introducing Else Statements' },
      { number: '072', name: 'Introducing Else If Statements' },
      { number: '073', name: 'Logical Order in If Else Statements' },
      { number: '074', name: 'Chaining If Else Statements' },
      { number: '075', name: 'Golf Code' },
      { number: '076', name: 'Selecting from Many Options with Switch Statements' },
      { number: '077', name: 'Adding a Default Option in Switch Statements' },
      { number: '078', name: 'Multiple Identical Options in Switch Statements' },
      { number: '079', name: 'Replacing If Else Chains with Switch' },
      { number: '080', name: 'Returning Boolean Values from Functions' },
      { number: '081', name: 'Return Early Pattern for Functions' },
      { number: '082', name: 'Counting Cards' },
      { number: '083', name: 'Build JavaScript Objects' },
      { number: '084', name: 'Accessing Object Properties with Dot Notation' },
      { number: '085', name: 'Accessing Object Properties with Bracket Notation' },
      { number: '086', name: 'Accessing Object Properties with Variables' },
      { number: '087', name: 'Updating Object Properties' },
      { number: '088', name: 'Add New Properties to a JavaScript Object' },
      { number: '089', name: 'Delete Properties from a JavaScript Object' },
      { number: '090', name: 'Using Objects for Lookups' },
      { number: '091', name: 'Testing Objects for Properties' },
      { number: '092', name: 'Manipulating Complex Objects' },
      { number: '093', name: 'Accessing Nested Objects' },
      { number: '094', name: 'Accessing Nested Arrays' },
      { number: '095', name: 'Record Collection' },
      { number: '096', name: 'Iterate with JavaScript While Loops' },
      { number: '097', name: 'Iterate with JavaScript For Loops' },
      { number: '098', name: 'Iterate Odd Numbers With a For Loop' },
      { number: '099', name: 'Count Backwards With a For Loop' },
      { number: '100', name: 'Iterate Through an Array with a For Loop' },
      { number: '101', name: 'Nesting For Loops' },
      { number: '102', name: 'Iterate with JavaScript Do...While Loops' },
      { number: '103', name: 'Replace Loops using Recursion' },
      { number: '104', name: 'Profile Lookup' },
      { number: '105', name: 'Generate Random Fractions with JavaScript' },
      { number: '106', name: 'Generate Random Whole Numbers with JavaScript' },
      { number: '107', name: 'Generate Random Whole Numbers within a Range' },
      { number: '108', name: 'Use the parseInt Function' },
      { number: '109', name: 'Use the parseInt Function with a Radix' },
      { number: '110', name: 'Use the Conditional (Ternary) Operator' },
      { number: '111', name: 'Use Multiple Conditional (Ternary) Operators' },
      { number: '112', name: 'Use Recursion to Create a Countdown' },
      { number: '113', name: 'Use Recursion to Create a Range of Numbers' }
    ],
  "ES6": [
    { number: '01', name: 'Compare Scopes of the var and let Keywords' },
    { number: '02', name: 'Mutate an Array Declared with const' },
    { number: '03', name: 'Prevent Object Mutation' },
    { number: '04', name: 'Use Arrow Functions to Write Concise Anonymous Functions' },
    { number: '05', name: 'Write Arrow Functions with Parameters' },
    { number: '06', name: 'Set Default Parameters for Your Functions' },
    { number: '07', name: 'Use the Rest Parameter with Function Parameters' },
    { number: '08', name: 'Use the Spread Operator to Evaluate Arrays In-Place' },
    { number: '09', name: 'Use Destructuring Assignment to Extract Values from Objects' },
    { number: '10', name: 'Use Destructuring Assignment to Assign Variables from Objects' },
    { number: '11', name: 'Use Destructuring Assignment to Assign Variables from Nested Objects' },
    { number: '12', name: 'Use Destructuring Assignment to Assign Variables from Arrays' },
    { number: '13', name: 'Destructuring via rest elements' },
    { number: '14', name: 'Use Destructuring Assignment to Pass an Object as a Function\'s Parameters' },
    { number: '15', name: 'Create Strings using Template Literals' },
    { number: '16', name: 'Write Concise Object Literal Declarations Using Object Property Shorthand' },
    { number: '17', name: 'Write Concise Declarative Functions with ES6' },
    { number: '18', name: 'Use class Syntax to Define a Constructor Function' },
    { number: '19', name: 'Use getters and setters to Control Access to an Object' },
    { number: '20', name: 'Create a Module Script' },
    { number: '21', name: 'Use export to Share a Code Block' },
    { number: '22', name: 'Reuse JavaScript Code Using import' },
    { number: '23', name: 'Use Asterisk to Import Everything from a File' },
    { number: '24', name: 'Create an Export Fallback with export default' },
    { number: '25', name: 'Import a Default Export' },
    { number: '26', name: 'Create a JavaScript Promise' },
    { number: '27', name: 'Complete a Promise with resolve and reject' },
    { number: '28', name: 'Handle a Fulfilled Promise with then' },
    { number: '29', name: 'Handle a Rejected Promise with catch' }
  ],
  "Regular Expressions": [
    { number: '01', name: 'Using the Test Method' },
    { number: '02', name: 'Match Literal Strings' },
    { number: '03', name: 'Match a Literal String with Different Possibilities' },
    { number: '04', name: 'Ignore Case While Matching' },
    { number: '05', name: 'Extract Matches' },
    { number: '06', name: 'Find More Than the First Match' },
    { number: '07', name: 'Match Anything with Wildcard Period' },
    { number: '08', name: 'Match Single Character with Multiple Possibilities' },
    { number: '09', name: 'Match Letters of the Alphabet' },
    { number: '10', name: 'Match Numbers and Letters of the Alphabet' },
    { number: '11', name: 'Match Single Characters Not Specified' },
    { number: '12', name: 'Match Characters that Occur One or More Times' },
    { number: '13', name: 'Match Characters that Occur Zero or More Times' },
    { number: '14', name: 'Find Characters with Lazy Matching' },
    { number: '15', name: 'Find One or More Criminals in a Hunt' },
    { number: '16', name: 'Match Beginning String Patterns' },
    { number: '17', name: 'Match Ending String Patterns' },
    { number: '18', name: 'Match All Letters and Numbers' },
    { number: '19', name: 'Match Everything But Letters and Numbers' },
    { number: '20', name: 'Match All Numbers' },
    { number: '21', name: 'Match All Non-Numbers' },
    { number: '22', name: 'Restrict Possible Usernames' },
    { number: '23', name: 'Match Whitespace' },
    { number: '24', name: 'Match Non-Whitespace Characters' },
    { number: '25', name: 'Specify Upper and Lower Number of Matches' },
    { number: '26', name: 'Specify Only the Lower Number of Matches' },
    { number: '27', name: 'Specify Exact Number of Matches' },
    { number: '28', name: 'Check for All or None' },
    { number: '29', name: 'Positive and Negative Lookahead' },
    { number: '30', name: 'Check For Mixed Grouping of Characters' },
    { number: '31', name: 'Reuse Patterns Using Capture Groups' },
    { number: '32', name: 'Use Capture Groups to Search and Replace' },
    { number: '33', name: 'Remove Whitespace from Start and End' }
  ],
  "Debugging": [
    { number: '01', name: 'Use the JavaScript Console to Check the Value of a Variable' },
    { number: '02', name: 'Understanding the Differences between the freeCodeCamp and Browser Console' },
    { number: '03', name: 'Use typeof to Check the Type of a Variable' },
    { number: '04', name: 'Catch Misspelled Variable and Function Names' },
    { number: '05', name: 'Catch Unclosed Parentheses, Brackets, Braces and Quotes' },
    { number: '06', name: 'Catch Mixed Usage of Single and Double Quotes' },
    { number: '07', name: 'Catch Use of Assignment Operator Instead of Equality Operator' },
    { number: '08', name: 'Catch Missing Open and Closing Parenthesis After a Function Call' },
    { number: '09', name: 'Catch Arguments Passed in the Wrong Order When Calling a Function' },
    { number: '10', name: 'Catch Off By One Errors When Using Indexing' },
    { number: '11', name: 'Use Caution When Reinitializing Variables Inside a Loop' },
    { number: '12', name: 'Prevent Infinite Loops with a Valid Terminal Condition' }
  ],
  "Basic Data Structures": [
    { number: '01', name: 'Use an Array to Store a Collection of Data' },
    { number: '02', name: 'Access an Array\'s Contents Using Bracket Notation' },
    { number: '03', name: 'Add Items to an Array with push() and unshift()' },
    { number: '04', name: 'Remove Items from an Array with pop() and shift()' },
    { number: '05', name: 'Remove Items Using splice()' },
    { number: '06', name: 'Add Items Using splice()' },
    { number: '07', name: 'Copy Array Items Using slice()' },
    { number: '08', name: 'Copy an Array with the Spread Operator' },
    { number: '09', name: 'Combine Arrays with the Spread Operator' },
    { number: '10', name: 'Check For The Presence of an Element With indexOf()' },
    { number: '11', name: 'Iterate Through All an Array\'s Items Using For Loops' },
    { number: '12', name: 'Create complex multi-dimensional arrays' },
    { number: '13', name: 'Add Key-Value Pairs to JavaScript Objects' },
    { number: '14', name: 'Modify an Object Nested Within an Object' },
    { number: '15', name: 'Access Property Names with Bracket Notation' },
    { number: '16', name: 'Use the delete Keyword to Remove Object Properties' },
    { number: '17', name: 'Check if an Object has a Property' },
    { number: '18', name: 'Iterate Through the Keys of an Object with a for...in Statement' },
    { number: '19', name: 'Generate an Array of All Object Keys with Object.keys()' },
    { number: '20', name: 'Modify an Array Stored in an Object' }
  ],
  
  "Basic Algorithm Scripting": [
    { number: '01', name: 'Convert Celsius to Fahrenheit' },
    { number: '02', name: 'Reverse a String' },
    { number: '03', name: 'Factorialize a Number' },
    { number: '04', name: 'Find the Longest Word in a String' },
    { number: '05', name: 'Return Largest Numbers in Arrays' },
    { number: '06', name: 'Confirm the Ending' },
    { number: '07', name: 'Repeat a String Repeat a String' },
    { number: '08', name: 'Truncate a String' },
    { number: '09', name: 'Finders Keepers' },
    { number: '10', name: 'Boo who' },
    { number: '11', name: 'Title Case a Sentence' },
    { number: '12', name: 'Slice and Splice' },
    { number: '13', name: 'Falsy Bouncer' },
    { number: '14', name: 'Where do I Belong' },
    { number: '15', name: 'Mutations' },
    { number: '16', name: 'Chunky Monkey' }
  ],
  
  "Object Oriented Programming": [
    { number: '01', name: 'Create a Basic JavaScript Object' },
    { number: '02', name: 'Use Dot Notation to Access the Properties of an Object' },
    { number: '03', name: 'Create a Method on an Object' },
    { number: '04', name: 'Make Code More Reusable with the this Keyword' },
    { number: '05', name: 'Define a Constructor Function' },
    { number: '06', name: 'Use a Constructor to Create Objects' },
    { number: '07', name: 'Extend Constructors to Receive Arguments' },
    { number: '08', name: 'Verify an Object\'s Constructor with instanceof' },
    { number: '09', name: 'Understand Own Properties' },
    { number: '10', name: 'Use Prototype Properties to Reduce Duplicate Code' },
    { number: '11', name: 'Iterate Over All Properties' },
    { number: '12', name: 'Understand the Constructor Property' },
    { number: '13', name: 'Change the Prototype to a New Object' },
    { number: '14', name: 'Remember to Set the Constructor Property when Changing the Prototype' },
    { number: '15', name: 'Understand Where an Object’s Prototype Comes From' },
    { number: '16', name: 'Understand the Prototype Chain' },
    { number: '17', name: 'Use Inheritance So You Don\'t Repeat Yourself' },
    { number: '18', name: 'Inherit Behaviors from a Supertype' },
    { number: '19', name: 'Set the Child\'s Prototype to an Instance of the Parent' },
    { number: '20', name: 'Reset an Inherited Constructor Property' },
    { number: '21', name: 'Add Methods After Inheritance' },
    { number: '22', name: 'Override Inherited Methods' },
    { number: '23', name: 'Use a Mixin to Add Common Behavior Between Unrelated Objects' },
    { number: '24', name: 'Use Closure to Protect Properties Within an Object from Being Modified Externally' },
    { number: '25', name: 'Understand the Immediately Invoked Function Expression (IIFE)' },
    { number: '26', name: 'Use an IIFE to Create a Module' }
  ],

  "Functional Programming": [
    { number: '01', name: 'Learn About Functional Programming' },
    { number: '02', name: 'Understand Functional Programming Terminology' },
    { number: '03', name: 'Understand the Hazards of Using Imperative Code' },
    { number: '04', name: 'Avoid Mutations and Side Effects Using Functional Programming' },
    { number: '05', name: 'Pass Arguments to Avoid External Dependence in a Function' },
    { number: '06', name: 'Refactor Global Variables Out of Functions' },
    { number: '07', name: 'Use the map Method to Extract Data from an Array' },
    { number: '08', name: 'Implement map on a Prototype' },
    { number: '09', name: 'Use the filter Method to Extract Data from an Array' },
    { number: '10', name: 'Implement the filter Method on a Prototype' },
    { number: '11', name: 'Return Part of an Array Using the slice Method' },
    { number: '12', name: 'Remove Elements from an Array Using slice Instead of splice' },
    { number: '13', name: 'Combine Two Arrays Using the concat Method' },
    { number: '14', name: 'Add Elements to the End of an Array Using concat Instead of push' },
    { number: '15', name: 'Use the reduce Method to Analyze Data' },
    { number: '16', name: 'Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem' },
    { number: '17', name: 'Sort an Array Alphabetically using the sort Method' },
    { number: '18', name: 'Return a Sorted Array Without Changing the Original Array' },
    { number: '19', name: 'Split a String into an Array Using the split Method' },
    { number: '20', name: 'Combine an Array into a String Using the join Method' },
    { number: '21', name: 'Apply Functional Programming to Convert Strings to URL Slugs' },
    { number: '22', name: 'Use the every Method to Check that Every Element in an Array Meets a Criteria' },
    { number: '23', name: 'Use the some Method to Check that Any Elements in an Array Meet a Criteria' },
    { number: '24', name: 'Introduction to Currying and Partial Application' }
  ]
};


const fs = require('fs');
const path = require('path');

Object.keys(fileStructure).forEach(category => {
  const categoryPath = path.join(__dirname, 'PART-2-Frontend-HTML-CSS-JS-Assignment', category);
  // Create the category directory
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true });
  }

  fileStructure[category].forEach(problem => {
    // Create a JavaScript file directly in the category folder
    const problemFile = path.join(categoryPath, `${problem.number}_${problem.name.replace(/ /g, "_")}.js`);
    
    // Create the JavaScript file if it doesn't exist
    if (!fs.existsSync(problemFile)) {
      fs.writeFileSync(problemFile, `// Problem ${problem.number}: ${problem.name}\n\n// Write your solution here.`);
    }
  });
});