import React, {useState} from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefas } from '../types/tarefas';
import styles from './styles.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  return (
    <div className={styles.AppStyle}>
      <Form  setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
