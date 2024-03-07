const Signnupform = ()=>{
    return(
        <form className="form" action="">
            <div className="emailCont">
                <labe className="label" For="namE"> Enter Your Fullname</labe> 
                <input className="loginInput" type="email" id="namE" placeholder="Enter Fullname"/> 
            </div>

            <div className="emailCont">
                <label className="label" For="emaill"> Enter Your Email</label>
                <input className="loginInput" type="email" id="emaill" placeholder="Enter Email"/> 
            </div>

            <div className="passwordCont">
                <label className="label" For="passwordd"> Enter Your Password</label>
                <input className="loginInput" type="password" id="passwordd" placeholder="Enter Password"/> 
            </div>

            <button className="button"> Submit</button>
    </form>
    )
}

export default Signnupform