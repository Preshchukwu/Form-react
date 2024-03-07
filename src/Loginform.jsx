const Form = ()=>{
    return(
        <form className="form" action="">
            <div className="emailCont">
                <label className="label" For="email"> Enter Your Email</label> 
                <input className="loginInput" type="email" id="email" placeholder="Enter Email"/>
            </div>

            <div className="passwordCont">
                <label className="label"  For="password"> Enter Your Password</label>
                <input className="loginInput" type="password" id="password" placeholder="Enter Password"/>
            </div>

            <button className="button">Submit</button>
        </form>
    )
}

export default Form