import React from "react";
import propTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};

TechItem.propTypes = {
  //dizendo ao sistema quais são os tipos dos dados recebidos
  //para q não se receba um tipo não desejado
  tech: propTypes.string,
  onDelete: propTypes.func.isRequired //isRequired == é obrigatório
};

export default TechItem;
