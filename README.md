1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   => getElementById using by id. It select a single element that have a specific id name.
   getElementsByClassName using on class. It select all elements that have a specific class name.
   querySelector is using on first matching element.It only returns the first matching element.
   querySelectorAll is using on all matching elements.It returns the NodeList.

2.  How do you create and insert a new element into the DOM?
   => To creat an element I am goning to use document.createElement("div"). also store this in a variable.
      Then using .innerText with the variable I put a value on this.
      For insert i will use document.body.appendChild(div);
3. What is Event Bubbling? And how does it work?
   => Event Bubbling is when an event starts from the target element and moves upward to parent elements.
   It works - first it runs into the target element. Then it goes to moves parent element . Then goes to grandparent element. Then going
   to Continues until document.
4. What is Event Delegation in JavaScript? Why is it useful?
    =>Event Delegation is to add an event listener to a parent element instead of adding event listeners
    for multiple child elements. The parent handles the event using event bubbling.
   It useful beacuse it improves performance, use less code, works on dynamic elements etc.
   
5. What is the difference between preventDefault() and stopPropagation() methods?
  =>preventDefault is used to stops browser action
   and stopPropagation is used to stops parent event .
 
