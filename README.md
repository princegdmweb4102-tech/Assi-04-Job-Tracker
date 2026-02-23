

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : To find elements in the DOM, use getElementById for the fastest access to a single element by its unique ID. If I need multiple elements by class name, getElementsByClassName returns a "live" HTMLCollection that updates as the page changes. For maximum flexibility, querySelector and querySelectorAll allow  to use any CSS selector (like div > .active); the former returns only the first match, while the latter returns a static NodeList that conveniently supports .forEach().

### 2. How do you create and insert a new element into the DOM?

Answer : Instead of creating, configuring, and appending separately, I just pick a target element and inject a string of HTML directly:
The most modern, "one-step" way to create and insert an element is using insertAdjacentHTML().

### 3. What is Event Bubbling? And how does it work?

Answer : Event bubbling is the way an event "travels" up the DOM tree. When an event happens on an element, it first runs the handlers on that specific element, then on its parent, then all the way up to the root (document and window).

it is  Works to flow  3-Step :
The Target: You click a specific element, like a <button>.

The Trigger: The click event fires on that button.

The Bubble: The event moves upward like a bubble in water, triggering the same event on the <div> wrapper, the <body>, and finally the <html> tag.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer : Event Delegation is a technique where you attach a single event listener to a parent element instead of adding multiple listeners to every child.
Why it’s useful:
Memory Efficiency: One listener uses less RAM than hundreds of individual ones.

Dynamic Elements: It automatically works for new children added to the DOM later without needing to "re-bind" events.

Cleaner Code: You manage all related logic in one central place.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer : The main difference is what they stop: one stops an action, the other stops an event's movement.





