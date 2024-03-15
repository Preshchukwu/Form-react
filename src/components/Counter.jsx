import { useState } from "react"

const Counter =()=>{
    const [count, setCount] = useState(0) 
    
    return(
        <>
            
            <p>Hello i am counting</p>
            <div>

            <button onClick={()=>setCount((count)=>{
                if(count <= 0){
                    return 0
                }return count - 1
                })}>-</button> <br/>
                    <h3>{count}</h3> 


                
                <button onClick={()=>setCount((count)=> count + 1)}>+</button> <br/> <br/>

                <div >
                   {
                    isLog ? <button>Login</button> : <button>signup</button>
                   }
                    
                </div>
            </div>
        </>
    )
}

export default Counter