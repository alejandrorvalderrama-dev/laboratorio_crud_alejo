import { useEffect, useRef, useState } from ' react' ;
import { ImagePIus, Plus, Save, X } from 'lucide-react' ;
import { urllmagen } from ' ../utils/format';

const empty = { nombre: "marca: 'modelo: " };

export default function TeamForm({ editing, onSubmit, {} {
const [form, setForm]= useState(empty);
const [imagenFi1e, setImagenFi1e]usestate(null);
const [preview, setpreview]= useState(nuII);
const filelnputRef = useRef(nu11);

useEffect(() => {
  setForm(editing I I empty);
  setImagenFiIe(null);
  setPreview(editing ? urllmagen(editing.imagen): null);
  if (filelnputRef. current) filelnputRef. current.value = '';
}, [editing]);

function change(event) {
  setForm({
   ... form,
   [event. target.name]: event.target. value
  });
}

function changelmagen(event) {
const file = event.target.files?.[0];
if ( ! file) return;

 setImagenFiIe (file) ;
 setPreview(URL. createObjectURL (file));
}

function submit(event) {
 event. preventDefau1t() ;
onSubmit({... form, imagenFi1e });
setForm(empty);
setImagenFi1e(nu11);
setPreview(nu11);
if (filelnputRef. current) filelnputRef. current.value = '';
}

return (
<form onSubmit={submit} className="card form-grid">
<h2>{editing ? 'Editar equipo' : 'Nuevo equipo':}</h2>

<input name="nombre" placeholder="Nombre" value={form.nombre} onChange={change} required />
<input name="marca" placeholder="marca" value={form.marca} onChange={change} />
<input name="marca" placeholder="modelo" value={form.modelo} onChange={change} />

<label className="image-upload-field"
<span><imagenPlus size={16} /> imagen del equipo</span>
<input ref={fileInputRef} type="file" accept="image=/jpeg/png,image/webp" onChange={changeImagen} />
</label>

{preview && (
    <div className="image-preview">
    <img src={preview} alt="vista previa />
    </div>
)}


<div className="actions">
<button type="actions">
{editing ? <save size={16} />plus size={16} />}
{editing ? 'actualizar' : 'crear'}
</button>
{editing && (
    <button type="button" calssName="secondary" onClick={onCancel}<
    <X size={16} />
    cancelar
    </button>
  )}
  <//div>
  </form
  );
}

