export function validarCuenta(cuenta){
  return /^[0-9]{6,20}$/.test(cuenta);
}
export function validarMonto(monto){
  return /^\d+(\.\d{1,2})?$/.test(monto) && Number(monto)>0;
}
