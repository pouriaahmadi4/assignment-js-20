// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================

// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:

/* 
 <form onclick="alert('form')">FORM
 <div onclick="alert('div')">DIV
 <p onclick="alert('p')">P</p>
 </div>
 </form>
*/

// So if we click on <p>, then we’ll see 3 alerts: p → div → form.

//                   / \
//    ---------------| |-----------------
//    | element1     | |                |
//    |   -----------| |-----------     |
//    |   |element2  | |          |     |
//    |   -------------------------     |
//    |        Event BUBBLING           |
//    -----------------------------------

//  Stopping bubbling

// The method for it is event.stopPropagation().

// For instance, here body.onclick doesn’t work if you click on <button>:

/*
<body onclick="alert(`the bubbling doesn't reach here`)">
<button onclick="event.stopPropagation()">Click me</button>
</body>
*/

/*
event.stopImmediatePropagation()
If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.

In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.

To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.
*/