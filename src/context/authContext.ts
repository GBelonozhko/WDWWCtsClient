import React from 'react';
import { AuthContextInterface, AuthState } from '../interface';

const AuthContext = React.createContext<AuthContextInterface>({
    token: '',
    userId: '',
    error: null,
    loading: false,

    login: () => { }

})

export default AuthContext;