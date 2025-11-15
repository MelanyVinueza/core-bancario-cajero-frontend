import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { transacciones } from '../../services/api';
import { validarMonto } from '../../utils/validators';
import '../ValoresTransaccion/ValoresTransaccion.css';

export default function ValoresTransaccion(){
  const [params]=useSearchParams();
  const tipo = params.get('tipo');
  const cuenta = params.get('cuenta');
  const nav = useNavigate();

  const [monto,setMonto]=useState('');
  const [descripcion,setDescripcion]=useState('');
  const [error,setError]=useState('');

  const enviar = async ()=>{
    setError('');
    if(!validarMonto(monto)){ setError('Monto inválido'); return; }
    const cajero = JSON.parse(localStorage.getItem('cajero') || '{}');
    const body = {
      numeroCuenta: cuenta,
      tipo: tipo,
      monto: Number(monto),
      descripcion: descripcion,
      referencia: `${tipo}-${Date.now()}`,
      cajero: { idCajero: cajero.idCajero || cajero.id },
      estado: "PENDIENTE"
    };
    try{
      const r = await transacciones.crear(body);
      nav(`/comprobante/${r.idTransaccionCajero}?tipo=${tipo}`);
    }catch(e){
      setError('Error procesando la transacción');
    }
  };

  return (
    <>
      <div className="header">
        <div className="left">{tipo}</div>
        <div className="right"><button className="btn-logout" onClick={()=>{localStorage.removeItem('cajero'); window.location.href='/'}}>Cerrar sesión</button></div>
      </div>

      <div className="screen">
        <div className="card" style={{maxWidth:520, margin:'0 auto'}}>
          <h3>{tipo==='RETIRO'?'Retiro':'Depósito'}</h3>

          <label>Monto a {tipo==='RETIRO'?'retirar':'depositar'}</label>
          <input value={monto} onChange={e=>setMonto(e.target.value)} placeholder="0.00" />

          <label>Descripción (opcional)</label>
          <input value={descripcion} onChange={e=>setDescripcion(e.target.value)} />

          {error && <div className="error">{error}</div>}

          <div style={{display:'flex',gap:10,marginTop:12}}>
            <button className="btn-primary" onClick={enviar}>Realizar transacción</button>
            <button className="btn-secondary" onClick={()=>nav(-1)}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  );
}
