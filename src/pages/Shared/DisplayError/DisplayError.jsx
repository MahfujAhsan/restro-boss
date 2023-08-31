import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DisplayError = () => {

    const { logOut } = useAuth();
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate("/login");
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <p className='font-bold text-error'>Something Went Wrong</p>
            <p className='font-bold text-error'>{error.statusText} || {error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogout} className='btn btn-accent' to="/login">Sign Out</button>and Log Back In.</h4>
        </div>
    );
};

export default DisplayError;