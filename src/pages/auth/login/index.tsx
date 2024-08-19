import React from "react"

const LoginScreen = () => {
    return (
        <>
            <div className="login-box">
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <center>
                        <a href="#">
                            SEND
                            <span />
                        </a>
                    </center>
                </form>
            </div>
        </>

    )
}