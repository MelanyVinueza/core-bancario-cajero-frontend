import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import "./SeleccionarTransaccion.css"; 

export default function SeleccionarTransaccion() {
  const cajero =
    JSON.parse(localStorage.getItem("cajero")) || {
      nombreCompleto: "Cajero Demo", 
    };

  const navigate = useNavigate();

  return (
    <div className="sel-container"> 
      {/* BARRA LATERAL - Se le pasa el objeto 'cajero' completo */}
      <Sidebar cajero={cajero} /> 

      {/* CONTENIDO PRINCIPAL */}
      <main className="sel-main"> 
        
        {/* BLOQUE SUPERIOR - Tarjeta de usuario */}
        <div className="sel-header-box">
          
          {/* Contenedor interno que agrupa ícono y texto */}
          <div className="sel-header-content"> 
            
            {/* El ícono y su contenedor */}
            <div className="sel-header-icon">
              <i className="fa-solid fa-user"></i> 
            </div>

            <div className="sel-header-text">
              {/* Nombre completo */}
              <p className="sel-user-name">{cajero.nombreCompleto}</p> 
            </div>
            
          </div>
        </div>

        <p className="sel-subtitle">Escoge la transacción a realizar</p>

        {/* OPCIONES */}
        <div className="sel-options">
          {/* DEPÓSITO */}
          <div 
            className="sel-option-card"
            onClick={() => navigate("/buscar?tipo=DEPOSITO")}
          >
            <i className="fa-solid fa-building-columns sel-option-icon"></i> 
            <h3 className="sel-option-title">Depósito</h3>
            <button className="sel-btn">
              Continuar
            </button>
          </div>

          {/* RETIRO */}
          <div 
            className="sel-option-card"
            onClick={() => navigate("/buscar?tipo=RETIRO")}
          >
            <i className="fa-solid fa-cash-register sel-option-icon"></i> 
            <h3 className="sel-option-title">Retiro</h3>
            <button className="sel-btn">
              Continuar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}