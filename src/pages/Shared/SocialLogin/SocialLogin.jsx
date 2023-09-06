import { FaGoogle } from "react-icons/fa"
import { AuthContext } from "../../../providers/AuthProvider"
import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import './SocialLogin.css'


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/api/v1/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })


            })
    }
    return (
        <div>
            <div className="divider">Or</div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white font-bold w-10/12 mx-auto">
                    <span className="flex items-center">
                        <FaGoogle size={24} color="violet" />oogle
                    </span>
                </button>
            </div>
        </div>
    )
}

export default SocialLogin