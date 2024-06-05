import React from 'react'

// Way1 
// function Learn_Props(props) {
//     return (
//         <>
//             <h2>Welcome {props.name}. You're {props.age}</h2>
//         </>
//     )
// }

// Object Destructuring
// const obj = { name: "Ayushi", age: 18 }
// const myName = obj.name
// const myAge = obj.age

// const { myName2, myAge2 } = obj;

// // Way2 
function Learn_Props({ name, age }) {
    return (
        <>
            <h2>Welcome {name}. You're {age}</h2>
        </>
    )
}

// Way3
// function Learn_Props(props) {
//     const {name, age} = props;
//     return (
//         <>
//             <h2>Welcome {name}. You're {age}</h2>
//         </>
//     )
// }

export default Learn_Props