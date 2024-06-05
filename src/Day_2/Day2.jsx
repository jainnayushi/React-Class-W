import React, { useState } from "react";

// 1. Create normal variable : count
//         with button change the value
// 2. Create variable using useState : newCount
//         with button chnage the value : see 3 ways to call function
// 3. Create variable using useState : name
//         with button chnage the value : pass value to it as parameter

const Day2 = () => {
  // let count = 0;
  const [newCount, setNewCount] = useState(0);
  const [name, setName] = useState("Dummy");

  function increment() {
    // count = count + 1;
    // console.log(count)
    setNewCount(newCount + 1);
    // console.log(newCount)
  }

  function hello(userName) {
    // let newUserName = userName + " " + newCount;
    // setName(newUserName);
    setName(userName);
  }
  return (
    <div>
      <h1>Count : {newCount}</h1>
      {/* <button onClick={increment()}>Add me</button> : BLUNDER */}
      {/* <button onClick={() => increment()}>Add me</button> */}
      <button onClick={increment}>Add me</button>

      <hr />

      <h1>
        Name : {name} : {newCount}
      </h1>
      <button onClick={() => hello("Ayushi")}>Welcome me</button>
    </div>
  );
};

export default Day2;
