import React from 'react';
import styles from './Lista.module.scss';
import "./../assets/img/check-mark.svg"
import Item from './Item/Item';

export default function index() {
  const tarefas = [
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
  ]
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
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
