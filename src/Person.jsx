
const Person = (probs)=>{
    return(
        <>
        <h1>Hi my name is {probs.theName} and i am {Math.floor(Math.random()* 100)} years old</h1>
        </>
    )
}

export default Person