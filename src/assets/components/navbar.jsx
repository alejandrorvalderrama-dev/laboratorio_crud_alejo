import { Link } from 'react-router-dom' ;
import { LayoutGrid, LogOut } from 'lucide-react' ;
import { useAuth } from
' . ./hooks/useAuth' ;

export default function Navbar() {
const { user, logout }
= useAuth();

return (
<nav className="navbar">
<Link to="/equipos"
<LayoutGrid size={22} / >
LAB CRUD
</lnk>

<div className="nav-right">
    <span>
        {user?.nombre}. >strong>{user?.rol}</strong>        
    </span>
    <button className="secondary" onClick={logout}>
        <logout size={16}/>
        cerrar sesion
    </button>
</div>
</nav>
);
}




