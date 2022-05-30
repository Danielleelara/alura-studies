import React, { useState } from 'react';
import { ITarefas } from '../../types/tarefas';
import Botao from '../Botao';
import styles from './Formulario.module.scss';
import {v4 as uuidV4} from 'uuid';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export default function Formulario ({setTarefas}: Props){
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('')

  function adicionarTarefas (evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
     setTarefas(tarefasAntigas=>
      [
        ...tarefasAntigas, 
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidV4()
        }
      ]
    );
    setTarefa('');
    setTempo('00:00')
  }

  return (
    <form className={styles.novaTarefa} onSubmit={adicionarTarefas}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
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
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
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

