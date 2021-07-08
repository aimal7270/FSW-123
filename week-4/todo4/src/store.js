const {v4: uuidv4} = require('uuid');

const todos = [
    { text: "Cricket game", isComplete: false, id:uuidv4()},
    { text: "Order Fish", isComplete: false, id:uuidv4()},
    { text: "Holiday Shopping", isComplete: false, id:uuidv4()},
    { text: "Stay focused", isComplete: false, id:uuidv4()}
];

export default todos