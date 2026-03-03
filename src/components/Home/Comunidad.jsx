//import { useState } from "react";
import UltimaDonacion from "./Cards_Comunidad/UltimaDonacion";
import UltimaReseña from "./Cards_Comunidad/UltimaReseña";
import UltimoLogro from "./Cards_Comunidad/UltimoLogro";

export default function Comunidad() {

    //const [noticia] = useState(['PATATA DESCUBIERTA', 'Se ha descubierto un nuevo tipo de patata', 5]);

    //const [noticia] = useState({
    //    titular: 'PATATA DESCUBIERTA',
    //    texto: 'Se ha descubierto un nuevo tipo de patata',
    //    edadPublicacion: 9
    //});

    //setNoticia()
    //noticiaLogro.push("Patata descubierta")
    //noticiaLogro.push("¡Nuevo tipo de patata descubierta!")
    //noticiaLogro.push(4);

    return <>
        <h2 className="titulo text-center pt-5">Comunidad RecycleWare</h2>
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