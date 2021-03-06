import React, {useState} from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefas } from '../types/tarefas';
import styles from './styles.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefas (tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas => ({
      ...tarefas, 
      selecionado: tarefas.id ===tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => 
      tarefasAnteriores.map(tarefa=>{
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form  setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas} 
        selecionaTarefas={selecionaTarefas}
      />
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
