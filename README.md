> # React Notes

### 1. Installation and Setup

- Requirement : Node
- Open VS Code and create a react app `npx create-react-app learn-react`
- Navigate to the react app folder `cd learn-react`
- Start the application `npm start`

---

### 2. useState Hook

useState is a React hook used for managing state in functional components. It allows you to create a state variable and a function to update that variable. When the state updates, React re-renders the component, reflecting the changes. It's typically used like this:

```js
import React, { useState } from "react";

function Example() {
  // Declare a state variable named "count" initialized with 0
  const [count, setCount] = useState(0);

  // Declare a state variable named "text" initialized with an empty string
  const [text, setText] = useState("");

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* When the button is clicked, setCount updates the "count" state */}
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}
```

In this example, `useState` is used to declare two state variables: `count` and `text`, initialized with values `0` and `''` (an empty string) respectively. `setCount` and `setText` are the functions to update these state variables. When the button is clicked, `setCount` updates the `count` state, and when the input field's value changes, `setText` updates the `text` state.

---

### 3. useEffect Hook

The `useEffect` hook in React allows you to perform side effects in function components. Side effects are operations that affect something outside the scope of the function component, such as fetching data, manipulating the DOM, subscribing to events, etc.

The basic syntax of `useEffect` looks like this:

```javascript
useEffect(() => {
  // side effect logic
  return () => {
    // cleanup logic (optional)
  };
}, [dependencies]);
```

- The first argument is a function containing the side effect logic.
- The second argument is an array of dependencies that determine when the effect should be re-run.

### Example: Logging to the Console

Let's start with a simple example where we log a message to the console whenever the component renders.

```javascript
import React, { useEffect } from "react";

function Logger() {
  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div>
      <p>Check the console for log messages.</p>
    </div>
  );
}

export default Logger;
```

### Effect with Dependencies

To control when the effect runs, you can pass an array of dependencies as the second argument. The effect will only run when one of these dependencies changes.

```javascript
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is: ${count}`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

Here, the effect runs only when the `count` state changes.

### Cleaning Up Effects

Some side effects, such as subscriptions or timers, need to be cleaned up to prevent memory leaks. You can return a cleanup function from the effect function, which React will call when the component unmounts or before re-running the effect due to a dependency change.

```javascript
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default Timer;
```

### Effect Running Only Once

If you want the effect to run only once when the component mounts, pass an empty array as the dependency array.

```javascript
import React, { useEffect } from "react";

function OnceLogger() {
  useEffect(() => {
    console.log("This will only run once");

    // Optional cleanup
    return () => {
      console.log("Cleaning up");
    };
  }, []);

  return (
    <div>
      <p>Check the console for a one-time log message.</p>
    </div>
  );
}

export default OnceLogger;
```

### Fetching Data with `useEffect`

A common use case for `useEffect` is fetching data from an API.

```javascript
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcher;
```

### Summary of useEffect

- `useEffect` is used to handle side effects in functional components.
- It takes a function that contains the side effect logic and an optional array of dependencies.
- The effect runs after every render by default. If dependencies are provided, it runs only when one of the dependencies changes.
- You can return a cleanup function from the effect function to handle cleanup logic.
- By passing an empty array as the second argument, the effect runs only once when the component mounts.

`useEffect` is essential for managing side effects in React, making it easier to keep components in sync with external data and side-effectful operations.

---

