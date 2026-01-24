import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { hideToast } from "../redux/toastSlice";

function Toast ()
{
    const dispatch = useDispatch();
    const { message, visible } = useSelector( state => state.toast );

    useEffect( () =>
    {
        if ( visible )
        {
            const timer = setTimeout( () =>
            {
                dispatch( hideToast() );
            }, 2000 );

            return () => clearTimeout( timer );
        }
    }, [ visible, dispatch ] );

    if ( !visible ) return null;

    return (
        <div className="fixed top-5 right-5 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg">
            { message }
        </div>
    );
}

export default Toast;
