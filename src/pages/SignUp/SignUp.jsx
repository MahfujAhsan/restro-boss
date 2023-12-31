import singUpBanner from '../../assets/others/authentication2.png';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useAuth();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(data)
                console.log(loggedUser)


                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, image: data.photoURL }
                        fetch('https://bistro-boss-server-v2.vercel.app/api/v1/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data._id) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    }).catch((error) => {
                        console.log(error)
                    })
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 rounded-3xl shadow-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
                    <div className='md:w-1/2 '>
                        <div className='text-center'>
                            <h4>AdminEmail: <span className='font-bold'>admin@email.com</span></h4>
                            <h4>AdminPassword: <span className='font-bold'>22Sw&JR88</span></h4>
                        </div>
                        <img className='object-cover' src={singUpBanner} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card md:w-1/2 max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 font-semibold">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your name" name='name' className="input input-bordered" />
                                {errors.name && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 font-semibold">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 font-semibold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="E-mail" name='email' className="input input-bordered" />
                                {errors.email && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 font-semibold">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} placeholder="Private Key" name='password' className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Password must have one Uppercase, one Lowercase, one Number & one Special character</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white font-bold text-xs" type="submit" value="sign up" />
                            </div>
                        </div>
                        <p className='text-center'><small className='font-semibold'>Already have an account? </small> <Link to="/login" className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 font-semibold'>Login</Link></p>
                        <SocialLogin />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp