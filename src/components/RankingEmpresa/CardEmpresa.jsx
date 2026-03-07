export default function CardEmpresa({ posicion, nombre, donaciones }) {
    return <>
        <div className="m-2 bg-light rounded-4 border shadow-sm">
            <div className="row align-items-center">
                <div className="col-1 text-center">
                    <div className="fs-3  p-3 bg-secondary rounded-start">{posicion}</div>
                </div>
                <div className="col-9 ">
                    <div className="fs-4">{nombre}</div>
                </div>
                <div className="col-2 text-center">
                    <div className="fs-5">{donaciones} donaciones</div>
                </div>
            </div>
        </div>
    </>
}