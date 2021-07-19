const {v4: uuidv4} = require('uuid');

const todos = [
    { text: "fold laundry", isComplete: false, id:uuidv4()},
    { text: "order E's school books", isComplete: false, id:uuidv4()},
    { text: "learn it's", isComplete: false, id:uuidv4()},
    { text: "pack the curtains", isComplete: false, id:uuidv4()}
];

export default todos