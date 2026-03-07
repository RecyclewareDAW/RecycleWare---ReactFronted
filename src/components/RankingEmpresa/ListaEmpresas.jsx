import CardEmpresa from "./CardEmpresa"
export default function ListaEmpresas(param) {
    let datos = param.datos;
    //console.log(datos.posInicial)
    let empresas = datos.empresas;
    let lista = [];
    let contador = datos.posInicial;
    empresas.forEach(empresa => {
        console.log(empresa)
        lista.push(<CardEmpresa posicion={contador} nombre={empresa.nombre} donaciones={empresa.donaciones}>Patata</CardEmpresa>)
        contador++;
    });
    return <>
        <div className="d-flex flex-column">
            {lista}
        </div>
    </>
}