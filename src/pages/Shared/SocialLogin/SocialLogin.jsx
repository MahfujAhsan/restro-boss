import { FaGoogle } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom";
import './SocialLogin.css'
import useAuth from "../../../hooks/useAuth";
import axios from "axios";


const SocialLogin = () => {
    const { googleSignIn, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then((result) => {
    //             const loggedInUser = result.user;
    //             updateUserProfile(loggedInUser.displayName, loggedInUser.photoURL)
    //                 .then(() => {
    //                     const saveUser = {
    //                         name: loggedInUser.displayName,
    //                         email: loggedInUser.email,
    //                         image: loggedInUser.photoURL
    //                     }

    //                     fetch('http://localhost:5000/api/v1/users', {
    //                         method: 'POST',
    //                         headers: {
    //                             'content-type': 'application/json'
    //                         },
    //                         body: JSON.stringify(saveUser)
    //                     })
    //                         .then(res => res.json())
    //                         .then(() => {
    //                             navigate(from, { replace: true })
    //                         })
    //                 })
    //             // const saveUser = { 
    //             //     name: loggedInUser.displayName,
    //             //     email: loggedInUser.email,
    //             //     image: loggedInUser.photoURL
    //             // }
    //             // fetch('http://localhost:5000/api/v1/users', {
    //             //     method: 'POST',
    //             //     headers: {
    //             //         'content-type': 'application/json'
    //             //     },
    //             //     body: JSON.stringify(saveUser)
    //             // })
    //             //     .then(res => res.json())
    //             //     .then(() => {
    //             //         navigate(from, { replace: true })
    //             //     })

    //         })
    // }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                updateUserProfile(loggedInUser.displayName, loggedInUser.photoURL)
                    .then(() => {
                        const saveUser = {
                            name: loggedInUser.displayName,
                            email: loggedInUser.email,
                            image: loggedInUser.photoURL
                        }
                        axios.post('http://localhost:5000/api/v1/users', saveUser)
                            .then((res) => {
                                if (res.status === 200) {
                                    navigate(from, { replace: true })
                                }
                            })
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