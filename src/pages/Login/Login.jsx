import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import singUpBanner from '../../assets/others/authentication2.png';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [disabled, setDisabled] = useState(true);

    const { signIn } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                reset();
                const user = result.user;
                if(user?.uid) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.displayName} Login Successfuly`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate(from, { replace: true })
            })
    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 rounded-3xl">
                <div className="hero-content flex-col md:flex-row w-full justify-evenly">
                    <div className='md:w-1/2'>
                        <img className='object-cover' src={singUpBanner} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-lg shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body flex-1">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-semibold text-blue-700">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control w-full text-center">
                                <label className="label mx-auto">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                            </div>
                            {/* Make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <button disabled={false} className="btn bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white font-bold text-xs" type="submit">Login <FiLogIn size={20}/></button>
                            </div>
                        </form>
                        <p className='text-center'><small className='font-semibold'>New Here?</small> <Link to="/signup" className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 font-semibold'>Create an account</Link></p>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login