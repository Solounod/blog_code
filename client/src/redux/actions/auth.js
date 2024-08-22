import axios  from  'axios';
import { setAlert } from './alert';
import { 
    SIGNUP_SUCCES,
    SIGNUP_FAIL,
    SET_AUTH_LOADING,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    REFRESH_SUCCESS,
    REFRESH_FAIL,
    LOGOUT,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_SUCCESS,
    RESET_PASSWORD_CONFIRM_FAIL,
     } from './types';


//import.meta.env.VITE_BACKEND_URL
export const check_authenticated = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({
            token: localStorage.getItem('access')
        });

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/jwt/verify/`, body, config);

            if (response.status === 200){
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }


        } catch(err) {
            dispatch({
                type: ACTIVATION_FAIL
            })

        }
    }else{
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
} 


export const signup = (username, email, password, re_password) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json' 
        }
    };

    const body = JSON.stringify({
        username,
        email,
        password,
        re_password
    })

    try{
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/users/`, body, config)
        if (response.status === 201) {
            dispatch({
                type: SIGNUP_SUCCES,
                payload: response.data
            });
            dispatch(setAlert('Te enviamos un correo, por favor activa tu cuenta. Revisa el correo de spam','success'))
        }else {
            dispatch({
                type: SIGNUP_FAIL
            });
            dispatch(setAlert('Error al crear cuenta', 'danger'));
        }
    } catch (err){
        dispatch({
            type: SIGNUP_FAIL
        })
        dispatch(setAlert('Ha ocurrido un error o los datos no son correctos','danger'))
    }
}

export const activate = (uid, token) => async dispatch => {
    const config = {
        headers : {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        uid,
        token
    });

    try {

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/users/activation/`, body, config);

            if (response.status === 204) {
                dispatch({
                    type: ACTIVATION_SUCCESS
                });
                dispatch(setAlert('Felicitaciones has activado tu cuenta correctamente','success'))
            } else {
                dispatch({
                    type: ACTIVATION_FAIL
                });
                dispatch(setAlert('Ha ocurrido un error','danger'))
            }
        }
        catch(err) {
            dispatch({
                type: ACTIVATION_FAIL
            });
            dispatch(setAlert('Ha ocurrido un error','danger'))
        };
}

export const refresh = () => async dispatch => {
    if (localStorage.getItem('refresh')){
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({
            refresh: localStorage.getItem('refresh')
        });

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/jwt/refresh/`, body, config);
            if (response.status === 200){
                dispatch({
                    type: REFRESH_SUCCESS,
                    payload: response.data
                });
            } else {
                dispatch({
                    type: REFRESH_FAIL
                });
            }
        } catch(err){
            dispatch({
                type: REFRESH_FAIL
            })

        }
    }else {
        dispatch({
            type: REFRESH_FAIL
        })
    }
}

export const reset_password = email => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try{
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/users/reset_password/`, body, config);
        
        if (response.status === 204) {
            dispatch({
                type: RESET_PASSWORD_SUCCESS
            });
            dispatch(setAlert('Te enviamos un correo para continuar, revisa tu spam','success'))
            
        } else {
            dispatch({
                type: RESET_PASSWORD_FAIL
            });
            dispatch(setAlert('Ha ocurrido un error, con el correo proporcionado','danger'))
        }
    }
    catch(err){
        dispatch({
            type: RESET_PASSWORD_FAIL
        }); 
        dispatch(setAlert('Ha ocurrido un error, con el correo proporcionado','danger')) 
    }
}

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        uid,
        token,
        new_password,
        re_new_password
    });

    if (new_password !== re_new_password) {
        dispatch({
            type: RESET_PASSWORD_CONFIRM_FAIL
        });
        
    } else {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/users/reset_password_confirm/`, body, config);
        
            if (res.status === 204) {
                dispatch({
                    type: RESET_PASSWORD_CONFIRM_SUCCESS
                });
                dispatch(setAlert('Tu clave a sido cambiada con exito','success'))
                
            } else {
                dispatch({
                    type: RESET_PASSWORD_CONFIRM_FAIL
                });
                dispatch(setAlert('Las claves no son correctas','danger')) 
            }
        } catch(err){
            dispatch({
                type: RESET_PASSWORD_CONFIRM_FAIL
            });
            dispatch(setAlert('Las claves no son correctas','danger')) 
        }
    }
}


export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}auth/users/me/`, config);
        
            if (response.status === 200) {
                dispatch({
                    type: USER_LOADED_SUCCESS,
                    payload: response.data
                });
            } else {
                dispatch({
                    type: USER_LOADED_FAIL
                });
            }
        }
        catch(err){
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
}


export const login = (username, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        username,
        password
    });

    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/jwt/create/`, body, config);

        if (response.status === 200){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
            dispatch(setAlert('Acceso excitoso','success'))
        } else {
            dispatch({
                type: LOGIN_FAIL
            })
            dispatch(setAlert('Ha ocurrido un error o los datos no son correctos','danger'))
        }

    }catch(err){
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(setAlert('Ha ocurrido un error o los datos no son correctos','danger'))
    }

}

export const logout = () => dispatch => {
        dispatch({
            type: LOGOUT
        })
}
