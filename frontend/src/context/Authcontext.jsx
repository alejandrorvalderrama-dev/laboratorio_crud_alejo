import { createContext, useMemo, useState } from 'react' ;
import { login as loginService } from´../services/auth.service´;
import { clearSession, getToken, getUser, saveSession } from'../utils/storage';

export const AuthContext = createContext(null);

export function AuthProvider({ children}) {
    const [token, setToken] =  useState(getToken());
    const [user, setUser] = useState(getUser ());

async function login(credentials) {
    const result = await loginservice(credentials);
    saveSession(resuIt. token, result. user);
    set Token (result. token);
    setUser(resuIt. user);
}

function logout() {
clearSession( ) ;
setToken(nuII);
setUser(nu11);
}
    
const value = useMemo(
    () => ({
token,
user,
user,
isAuthenticated: Boolean(token),
login,
logout}
[token, user]
);

return <AuthContext.Provider value={value}>{children}>/Authocontext.providier>;
}


