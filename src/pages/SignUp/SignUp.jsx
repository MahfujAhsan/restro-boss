import { useContext } from 'react';
import singUpBanner from '../../assets/others/authentication2.png';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext)

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='md:w-1/2'>
                        <img className='object-cover' src={singUpBanner} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your name" name='name' className="input input-bordered" />
                                {errors.name && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="E-mail" name='email' className="input input-bordered" />
                                {errors.email && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} placeholder="Private Key" name='password' className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Password must have one Uppercase, one Lowercase, one Number & one Special character</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="sign up" />
                            </div>
                        </div>
                        <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp