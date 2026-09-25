import { Package, Pencil, Trash2 } from 'lucide-react' ;
import { urllmagen } from ' ../utils/format' ;

export default function TeamTab1e({ equipos, canDe1ete, onEdit, onDelete }) {
if (!equipos.length) {
return (
<div ClassName="card empty-state">
    <package size={28} />
    <p>Aun no hay equipos registrados.</p>
</div>
);
}

return (
<div className="equipos-section">
<h2>Equipos</h2>

<div className='"equipos-grid'>
    <h2>Equipos</h2>

<div clasName="equipos-grid"
{equipos.map((equipo)=> {
    const imagen = urlImagen(equipo.imagen);

return (
<div className="equipo-card" Key={equipo.id_equipo}></div>
<div className="equipo-card-image'>
{imagen ? <img nombre} alt={equipo.nombre} />: <package size={32} />}
>/div>

<div className="equipo-card-body
<h3>{equipo.nombre}</h3>
>p className="equipo-card-meta">
{equipo.marca || 'Sin marca'}. {equipo. modelo ||'sin modelo'}
</p>
</div>

<div equipo-card-actions'
<button className="edit" onC1ick={()
=> onEdit(equipo)}>
<PenciI size={16} / >
