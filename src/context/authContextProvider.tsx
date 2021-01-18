
import React, {useState, useEffect} from 'react';
import AuthContext from './authContext';
import axios from 'axios';


const AuthContextProvider: React.FC = (props) => {

    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const login = (email: string, password:string) =>{
        setLoading(true);
        axios.post('http://localhost:8000/api/login', {email, password})
        .then(response => {
             setToken( response.data.token);
             setUserId(response.data.userId);
             setLoading(false);
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 100000000);
            localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', expirationDate.toDateString());
                localStorage.setItem('userId', response.data.userId);
            

        })
        console.log(token)
    }

    



    return (
        <AuthContext.Provider value ={{token, userId, error, loading, login}}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;