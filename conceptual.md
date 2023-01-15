### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a JavaScript framework/library utilized for building frontend applications. React allows for faster
easier and more streamline building of user interfaces by breaking things up into smaller, reausable components.
It also allows for easier interaction and manipulation of DOM elements.

- What is Babel?

Babel is a toolchain that is primarily used to convert ES2015 code into a backwards compaditible version of JavaScript in current or older virtual environments and browsers.

- What is JSX?

JSX stands for "JavaScript XML" or "JavaScript Syntax Extension". It provides a way to structure component rendering using recongnizable HTML elements

- How is a Component created in React?

Components are independent and reusable bits of code. They provide the same purpose as JavaScript functions, however, they work in isolation and return HTML. A class component must include the "extends React.Component" statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. The component also requires a render() method, this method returns HTML.

- What are some difference between state and props?

Both state and props hold information that influences the output of what's rendered. The difference lies in that props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

- What does "downward data flow" refer to in React?

The downward data flow in react refers to the hierarchical structure of components that are passed an fed into each other.

- What is a controlled component?

In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick,onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component. It is essentially a component that is handled by react.

- What is an uncontrolled component?

An uncontrolled component is a component that is not covered by react and is handled completely by the DOM. It is best to limit uncontrolled components as much as possible.

- What is the purpose of the `key` prop when rendering a list of components?

Keys help react identify which items have been changed, added, or removed.
Keys are typically fed into elements inside of an array to give them a distinct identity.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using the index of an array as a key can be a very poor choice as it causes performance issues in react. Particularly
when it comes to component state. It is best to use a unique id for key props.

- Describe useEffect.  What use cases is it used for in React components?

The useEffect Hook allows you to perform side effects within your components.
Some examples of side effects include: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.

- When would you use a ref? When wouldn't you use one?

useRef could be used if you wanted to count how many times your webpage rerenders. However, you would not 
want to useRef if for example we wanted a display card to rerender with new material.

- What is a custom hook in React? When would you want to write one?

Hooks are in essence reusable functions that can be applied anywhere in the code.
When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
Custom Hooks start with "use". An example would be a custom hook that would be able to hit multiple API's.
