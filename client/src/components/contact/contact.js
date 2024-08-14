import axios from 'axios';

export const apiContactSendEmail = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}api/contact-email/`
})


export const postContactSendEmail =  (data) => apiContactSendEmail.post( data, {
    
    headers: {
        "Content-Type": 'application/json',

    },
    
});