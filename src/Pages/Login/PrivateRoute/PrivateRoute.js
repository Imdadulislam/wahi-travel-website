import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hook/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading  } = useAuth();
    if (isLoading)
    {
        return <Spinner animation="border" variant="danger"></Spinner>
        }
    return (
        <Route
            {...rest}
            render = {({location}) => user.email ? children :
                <Redirect
                    to={{
                        pathname: '/Login',
                        state: {from:location}
                }}
                ></Redirect>
            }
            ></Route>
    );
};

export default PrivateRoute;