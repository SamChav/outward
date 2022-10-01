// import React, {useState, useRef} from "react";
// import Header from "../components/Header";
// import styles from "../styles/Header.module.css"


// const generateInputFields = () => {
//     let numOfInputs = []
//     for (let i = 0; i < 5; i++) {
//         numOfInputs.push({
//             key: i,
//         })
//     }
//     return numOfInputs
// }

// const Sorting = () => {
//     const [fields, setFields] = useState(generateInputFields())
//     const [inputs, setInputs] = useState([])

//    function getSortData(e) {
//         e.preventDefault()
//         const lengthOfUserInput = e.target.elements.length - 2 //-2 to take away "form" and "button" elements
//         let sum = -1; //-1 to start at 0 when incrementing
//         const userInputIndicies = []
//         let bubblesToSort = []
//         while (sum != lengthOfUserInput) { //this takes the length of all the dynamic inputs, increments sum by 1 each time, and pushes each increment to its own indicy in an array, used as an index for getting all form element values
//             sum++
//             userInputIndicies.push(sum)
//         }
//         for (let i = 0; i < userInputIndicies.length; i++) {
//            bubblesToSort.push(e.target.elements[i].value)
//         }
//         setInputs([...inputs, ...bubblesToSort])
//         //get the length - 1 (-1 is the button) then take len and have an array of 0-length then take each num ( [i] ) and use it to get every object value @ e.targets.elements[i]   
//     } 
// // const testing = () => {
// //     console.log(inputs, 'purely inputs')
// // }
//     function test(e) {
//         e.preventDefault()
//         console.log(e)
//     }

//     return (        
//         <div>
//         {/* <Header /> */}
//             <div>This is my paragraph<div>
//             <form>
//                 <input type="number" min="2" max="100" onSubmit={test}></input>
//                 <button type="submit">O</button>
//                 </form>
//             </div></div>
//             <div>this div will hold the inputs
//             <form onSubmit={getSortData}>
//             {fields.map((el) => (
//                 <input key={el.key} id="inputs"></input>
//             ))}
//             <button type="submit" >X</button>
//             </form> 
//             </div>
//             <div style={{display: "flex", flexDirection: "row-reverse"}}>this will be results
//             {inputs.map((el, i) => (
//                 <div key={i} style={{border: "1px solid", background: "red", width: "50px", height: el + "px"}}>{el}</div> //need to make height = number entered from user input
//             ))}
//             </div>
//         </div>
//     )
// }

// export default Sorting;