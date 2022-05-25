import React, {useEffect, useState} from 'react';
import styles from './Lista.module.scss';
import "./../assets/img/check-mark.svg"
import Item from './Item/Item';

export default function Lista() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: '02:00:00'
    },
    {
      tarefa: "Javascript",
      tempo: '01:00:00'
    },
    {
      tarefa: "Typescript",
      tempo: '03:00:00'
    },
  ]);

  useEffect(()=> {
    setTarefas(tarefas);
  },[]);
 
  return (
    <aside className={styles.listaTarefas}>
      <h2 onClick={()=>{
        setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}])
        console.log('h2 clicado: ',tarefas)
      }}>Estudos do dia</h2>
        
      <ul>
        {
          tarefas.map((item, index) => {
            return (
              <Item
                key={index}
                {...item}
              />
            )
            })
        }
      </ul>

    </aside>
  )
}
