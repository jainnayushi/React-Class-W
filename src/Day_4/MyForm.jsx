import React, { useEffect, useState } from "react";

function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState("");

  //   useEffect(callback function, dependency array)
  useEffect(() => {
    console.log("render");
    //api call : BLUNDER!!!
  });

  useEffect(() => {
    console.log("birth");
    //api call : GET
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("trinaData");
    setUser(data);
  }, [isSubmit]);

  const handleName = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, email);
    localStorage.setItem("trinaData", firstName);
    setIsSubmit(true);
  };

  return (
    <div>
      <h1>Hello {user}</h1>
      <label htmlFor="firstName"> Name </label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleName}
        placeholder="Enter your name"
      ></input>
      <br />
      <label htmlFor="email"> Email </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleEmail}
      ></input>
      <br />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
}

export default MyForm;
