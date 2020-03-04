import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };

  componentDidMount() {
    //Executa assim que o componente aparece em tela
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(_, prevState) {
    /*PropsAntigas,StateAntigo*/
    //Executado sempre que houver alterações nas props ou no estado
    //recebe as alterações por parametro

    if (prevState.techs != this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  componentWillUnmount() {
    //Executa quando o componente deixa de existir
  }

  handleInputChange = e => {
    //arrrow function pode ter acesso ao this
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault(); //evita que a página seja recarregada após o submit

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    }); //... pega os dados já existentes
    //adicionando o newtech o fim do array
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t != tech) });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}

export default TechList;
