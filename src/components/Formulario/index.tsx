import React from 'react';
import { ITarefas } from '../../types/tarefas';
import Botao from '../Botao';
import styles from './Formulario.module.scss';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}>{
  state={
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefas (evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas=>[...tarefasAntigas, {...this.state}])
  }
  render() {
    return (
      <form className={styles.novaTarefa} onSubmit={this.adicionarTarefas.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao
        >
          Adicionar
        </Botao>
      </form>
    )
  }
}

export default Formulario;