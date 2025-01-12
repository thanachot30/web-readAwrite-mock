import { useContext } from 'react'
import { ModalContext } from '../modal/ModalEnd';
import { Navigate, Outlet } from 'react-router-dom';



const ProtectedRoute = () => {
    const { authen_with_email } = useContext(ModalContext);

    return authen_with_email ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute