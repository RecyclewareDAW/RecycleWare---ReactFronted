//#region descripción

// Este card de último logro de la seccion de comunidad tiene 3 parámetros
//  noticia[0] -> String titular: El titulo de la card
//  noticia[1] -> String texto: El texto de la publicación
//  noticia[2] -> int edadPublicacion: Es el tiempo que tiene la publicación en días para mostrarlo en la parte inferior de la card
//  
// Si no recibe parámetros, tiene valores por defecto para probarlo de manera rápida

// Sintaxis -> <UltimoLogro noticia={array} /> o <UltimoLogro noticia={["String", "String", int]} /> 

//#endregion
export default function UltimoLogro() {

    /*
    console.log(noticia.noticia)

    let titular, texto, edadPublicacion;
    if (noticia != null) {
        titular = noticia["titular"]
        texto = noticia.texto
        edadPublicacion = "Publicado hace " + noticia.edadPublicacion + " días";
    }else{
        titular = "¡1.000 equipos entregados!"
        texto = "Esta semana hemos alcanzado la cifra mágica. Gracias a vuestras donaciones, 1.000 usuarios ya tienen un equipo."
        edadPublicacion = "Publicado hace 2 días";
    }

    */
    

    return <>
        <div className="card h-100 border-primary bg-white">
            <div className="card-body text-center">
                <span className="badge bg-primary mb-2">Logro</span>
                <h3 className="h5 card-title">¡1.000 equipos entregados!</h3>
                <p className="card-text text-muted">Esta semana hemos alcanzado la cifra mágica. Gracias a vuestras donaciones, 1.000 usuarios ya tienen un equipo.</p>
                <div className="card-footer bg-transparent border-0">
                    <small className="text-secondary">Publicado hace 2 días</small>
                </div>
            </div>
        </div>
    </>
}