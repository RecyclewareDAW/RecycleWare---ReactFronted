import CardEmpresa from "./CardEmpresa";

export default function ListaEmpresas({ datos }) {
    return (
        <div className="d-flex flex-column mt-4 mb-5">
            {datos.empresas.map((empresa, index) => (
                <CardEmpresa 
                    key={index}
                    posicion={datos.posInicial + index} 
                    nombre={empresa.nombre} 
                    donaciones={empresa.donaciones}
                />
            ))}
        </div>
    );
}