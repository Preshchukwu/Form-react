import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Login from './Login'
import Signup from './Signup'
import Person from './Person'
import Show from './Class'
import React from 'react'
import Counter from './components/Counter'



function App(){
  return(
    <>
    <Counter></Counter>
    </>
  )
}

// class App extends Component{
//   oruko;
//   ojo_ori;
//   position;

//   constructor(){
//     super()
//   }

//   state ={
//     name:`peter`,
//     job: `graphics`,
//     position: `senior`
//   }

//   setName =()=>{
//     this.setState({
//       name: `john`
//     })
//   }

//   render(){


//     return(
//       <>
//         <p>This is a {this.state.name} <button onClick={this.setName}>Click</button></p> 
      
//       </>
//     )
//   }



 
// }

// class App extends Component{



//   constructor(){
//     super()

//     state={
//       name:`john`,
//       age: 32,
//       position: `first`  
//     }

//     setName =()=>{
//       setState({

//       })
//     }

   
//   }
// }

// function App() {
//   // const [count, setCount] = useState(0)

//   // return (
//   //   <>
//   //     <div className='mainDiv'>
//   //       <Login/>
//   //       <Signup/>
//   //       <Person theName="Ade"></Person>
//   //       <Person theName="Wale"></Person>
//   //       <Person theName="Girl"></Person>
//   //       <Person theName="Tolu"></Person>
//   //       <Show/>
//   //       {/* <Greeting/> */}
//   //       <a href="https://vitejs.dev" target="_blank">
//   //         <img src={viteLogo} className="logo" alt="Vite logo" />
//   //       </a>
//   //       <a href="https://react.dev" target="_blank">
//   //         <img src={reactLogo} className="logo react" alt="React logo" />
//   //       </a>
//   //     </div>
//   //     <h1>Vite + React</h1>
//   //     {/* <div className="card">
//   //       <button onClick={() => setCount((count) => count + 1)}>
//   //         count is {count}
//   //       </button>
//   //       <p>
//   //         Edit <code>src/App.jsx</code> and save to test HMR
//   //       </p>
//   //     </div>
//   //     <p className="read-the-docs">
//   //       Click on the Vite and React logos to learn more
//   //     </p> */}
//   //   </>
//   // )
 
// }


export default App
