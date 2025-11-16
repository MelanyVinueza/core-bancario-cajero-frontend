const API_URL = "http://localhost:8082/api";

async function request(path, options = {}) {
  const res = await fetch(API_URL + path, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  if (!res.ok) {
    const txt = await res.text().catch(()=>null);
    throw new Error(txt || 'Server error');
  }
  return res.status === 204 ? null : res.json();
}

export const clientes = {
  async getByCedula(cedula) {
    const res = await fetch(`${BASE_URL}/api/clientes/cedula/${cedula}`);
    if (!res.ok) throw new Error("Error buscando cliente");
    return await res.json();
  },
};

export const auth = {
  login: (usuario, clave) =>
    request("/cajero/login", {
      method: "POST",
      body: JSON.stringify({ usuario, clave })
    })
};

export const cuentas = {
  async getByCedula(cedula) {
    const res = await fetch(`${BASE_URL}/api/cuentas/cedula/${cedula}`);
    if (!res.ok) throw new Error("Error buscando cuenta");
    return await res.json();
  },

  async getByNumeroCuenta(numero) {
    const res = await fetch(`${BASE_URL}/api/cuentas/numero/${numero}`);
    if (!res.ok) throw new Error("Error buscando cuenta por número");
    return await res.json();
  },
};

export const transacciones = {
  retiro: async (body) => {
    const res = await fetch("http://localhost:8080/api/transacciones/retiro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Error al registrar retiro");

    return res.json();
  },

  deposito: async (body) => {
    const res = await fetch("http://localhost:8080/api/transacciones/deposito", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Error al registrar depósito");

    return res.json();
  }
};
