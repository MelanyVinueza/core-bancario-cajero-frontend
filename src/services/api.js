const API_URL = "http://localhost:8080";

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

export const auth = {
  login: (usuario, clave) =>
    request("/cajero/login", {
      method: "POST",
      body: JSON.stringify({ usuario, clave })
    })
};

export const cuentas = {
  getCuenta: (numero) => request(`/cuentas/${numero}`)
};

export const transacciones = {
  crear: (body) =>
    request("/transacciones", {
      method: "POST",
      body: JSON.stringify(body)
    }),
  obtener: (id) => request(`/transacciones/${id}`)
};
