import React from "react";
import { AiTwotoneTrophy } from "react-icons/ai";
import { VscDebugBreakpointData } from "react-icons/vsc";
import "./sponsors.css";

const Sponsors = () => {
  return (
    <section id="sponsors">
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>PREMIOS</h3>
          <p className="content">
            Se seleccionarán y reconocerán tres equipos finalistas y el mejor
            talento individual. Los beneficios suman $25.000 USD.
          </p>
          <div className="experience__content">
            <article className="experience__details">
              <AiTwotoneTrophy className="experience__details-icon" />
              <div className="prizes">
              <h4>Primer lugar</h4>
                <small className="text-light">$5.000.000 COP , 1 año de licencia Platzi y 6 meses de oficinas</small>
              </div>
            </article>
            <article className="experience__details">
              <AiTwotoneTrophy className="experience__details-icon" />
              <div className="prizes">
              <h4>Segundo lugar</h4>
                <small className="text-light">$3.000.000 COP , 6 meses de licencia Platzi y 3 meses de oficinas</small>
              </div>
            </article>
            <article className="experience__details">
              <AiTwotoneTrophy className="experience__details-icon" />
              <div className="prizes">
              <h4>Tercer lugar</h4>
                <small className="text-light">$2.000.000 COP y 6 año de licencia Platzi</small>
              </div>
            </article>
          </div>
        </div>

        
        <div className="experience__backend">
          <h3>PATROCINADORES</h3>
          <div className="experience__content">
            <article className="experience__details">
              <VscDebugBreakpointData className="experience__details-icon" />
              <div>
                <h4>IBM</h4>
              </div>
            </article>
            <article className="experience__details">
              <VscDebugBreakpointData className="experience__details-icon" />
              <div>
                <h4>Platzi</h4>
              </div>
            </article>
            <article className="experience__details">
              <VscDebugBreakpointData className="experience__details-icon" />
              <div>
                <h4>Efecty</h4>
              </div>
            </article>
            <article className="experience__details">
              <VscDebugBreakpointData className="experience__details-icon" />
              <div>
                <h4>Secretaria Distrital de Movilidad</h4>
              </div>
            </article>
            <article className="experience__details">
              <VscDebugBreakpointData className="experience__details-icon" />
              <div>
                <h4>MoviLab Bogotá</h4>
              </div>
            </article>
            <article className="experience__details">
              <VscDebugBreakpointData className="experience__details-icon" />
              <div>
                <h4>CredibanCo</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
