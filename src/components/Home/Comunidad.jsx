import UltimaDonacion from "./Cards_Comunidad/UltimaDonacion";
import UltimaReseña from "./Cards_Comunidad/UltimaReseña";
import UltimoLogro from "./Cards_Comunidad/UltimoLogro";

export default function Comunidad() {
    return <>
        <h2 className="titulo pt-5">Comunidad RecycleWare</h2>
        <div className="container">
            <div className="row row-cols-lg-3 row-cols-1 gy-3">

                <div className="col">
                    <UltimoLogro/>
                </div>
                
                <div className="col">
                    <UltimaReseña/>
                </div>
                
                <div className="col">
                    <UltimaDonacion/>
                </div>
            </div>
        </div>
    </>
}