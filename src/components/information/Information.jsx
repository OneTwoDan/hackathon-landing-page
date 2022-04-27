import React from "react";
import "./information.css";

const Information = () => {
  return (
    <section id="information">
      <div className="container information__container">
        <div className="what-is_content">
          <div className="information_cards">
            <article className="information_card">
              <h3>
                ¿Qué es la Hackathon Taxis Libres y quiénes pueden participar?{" "}
              </h3>
              <p>
                Es una maratón de desarrollo virtual donde se reunirán
                programadores, diseñadores, data scientist's, mercadólogos,
                economistas, financieros y todos aquellos apasionados por la
                innovación y la creatividad. Durante tres días harán un trabajo
                colaborativo, para construir soluciones a los retos propuestos
                de movilidad en Colombia contado con las últimas tecnologías,
                productos, herramientas y servicios de Taxis Libres y de
                nuestros patrocinadores y aliados.
              </p>
            </article>
          </div>
        </div>

        <div className="when-is">
          <div className="information_cards">
            <article className="information_card">
              <h3>¿Cuándo se realizará?</h3>
              <p>
                Este evento virtual se llevará a cabo del 28 al 30 de Abril de
                2021.
              </p>
            </article>
          </div>
        </div>

        <div className="objectives">
          <div className="information_cards">
            <article className="information_card">
              <h3>¿Cuál es el objetivo de la Hackathon de Taxis Libres?</h3>
              <p>
                Buscamos generar espacios creativos para que los colombianos
                puedan desarrollar sus ideas y demostrar su talento.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
