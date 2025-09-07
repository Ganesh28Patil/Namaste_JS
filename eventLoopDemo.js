// Code Snippet : 
// ---- ---- ---- ---- ---- ---- --- ---
console.log("Start");

setTimeout(function cb(){
  console.log("Callback");
}, 5000);

console.log("End");

// -- --- ---- ---- ---- ---- --- ---- ---

/*

>> Code Started
[GEC created and pushed to Call Stack]

Line 1: console.log("Start")
Output: Start

Line 2: setTimeout(cb, 5000)
[setTimeout registered in Web API, timer started]

Line 3: console.log("End")
Output: End

[GEC finished, popped from Call Stack]

--- 5 seconds later ---
[Timer expired → callback cb() moved to Callback Queue]

[Event Loop checks Call Stack → it's empty]
[Event Loop pushes cb() from Callback Queue to Call Stack]

Line (inside cb): console.log("Callback")
Output: Callback

[cb() Execution Context popped from Call Stack]
[Call Stack is now empty]

>> Program Finished

*/