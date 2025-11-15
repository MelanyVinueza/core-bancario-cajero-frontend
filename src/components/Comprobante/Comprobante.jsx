import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { transacciones } from '../../services/api';
import '../Comprobante/Comprobante.css';

export default function Comprobante(){
  const { id } = useParams();
  const [params]=useSearchParams();
  const tipo=params.get('tipo');
  const [tx,setTx]=useState(null);

  useEffect(()=>{ transacciones.obtener(id).then(setTx).catch(()=>{}); },[id]);

  if(!tx) return <p className="screen">Cargando...</p>;

  return (
    <>
      <div className="header">
        <div className="left">Comprobante</div>
        <div className="right"><button className="btn-logout" onClick={()=>{localStorage.removeItem('cajero'); window.location.href='/'}}>Cerrar sesión</button></div>
      </div>

      <div className="screen">
        <div className="card" style={{maxWidth:640, margin:'0 auto', textAlign:'left'}}>
          <h2 style={{marginTop:0}}>Transferencia exitosa</h2>

          <div style={{display:'flex',justifyContent:'space-between',gap:20}}>
            <div>
              <p className="small-muted">Monto {tipo==='RETIRO'?'a retirar':'a depositar'}</p>
              <h3>${Number(tx.monto).toFixed(2)}</h3>
            </div>

            <div>
              <p className="small-muted">Costo de la transacción</p>
              <h3>$0.00</h3>
            </div>
          </div>

          <hr/>

          <p><strong>Cuenta:</strong> {tx.numeroCuenta}</p>
          <p><strong>Nombre:</strong> {tx.nombreCliente || tx.nombre || 'N/D'}</p>
          <p><strong>Referencia:</strong> {tx.referencia}</p>
          <p><strong>Fecha:</strong> {new Date(tx.fechaHora).toLocaleString()}</p>
          <p><strong>Sucursal:</strong> {tx.cajero?.sucursal?.nombre || 'La Napo'}</p>

          <div style={{display:'flex',gap:10,marginTop:12}}>
            <button className="btn-print" onClick={()=>window.print()}>Imprimir comprobante</button>
            <button className="btn-secondary" onClick={()=>window.location.href='/seleccionar'}>Nueva transacción</button>
          </div>
        </div>
      </div>
    </>
  );
}
