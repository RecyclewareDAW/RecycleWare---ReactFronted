//Hero con video

import video from '../../assets/video/video-hero.webm';

export default function Hero() {
  return (
    <section className="seccion-hero pt-4 pt-md-0" id="inicio">

      <video className="video-fondo" autoPlay muted loop playsInline>
        <source src={video} type="video/webm" />
      </video>

      <div className="capa-oscura"></div>

      <div className="hero-contenido">
        
        {/* <span className="etiqueta-hero">♻️ Tecnología Sostenible</span> */}

        <h1 className="titulo-hero">
          Da una <span className="resaltado">segunda vida</span> <br /> a tu tecnología
        </h1>

        <p className="descripcion-hero">
          No es basura, es una oportunidad. Gestionamos, reparamos y donamos
          material informático para reducir la brecha digital y cuidar el planeta.
        </p>

        <div className="hero-acciones">
          <a href="#donar" className="btn btn-primary">Donar Equipo</a>
          <a href="#solicitar" className="btn btn-primary btn-hero-outline">Solicitar Equipo</a>
        </div>
      </div>
    </section>
  );
}