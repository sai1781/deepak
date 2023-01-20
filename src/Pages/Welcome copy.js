import { Link } from "react-router-dom"


const Welcome = _ => {


    return (
        <div className="welcome">
            <div>

                <h1>WELCOME</h1>
                <h4>Click here to Sign Up</h4  >
                <div className="button">
                    <Link to="/SignUp">
                        <button>SignUp</button>
                    </Link>
                </div>


                <h4>Click here to SignIn</h4>
                <div className="button">
                    <Link to="/SignIn">
                        <button>SignIn</button>
                    </Link>
                </div>
            </div>




        </div>
    )
}

export default Welcome;