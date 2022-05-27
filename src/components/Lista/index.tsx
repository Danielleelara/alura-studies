import styles from './Lista.module.scss';
import "./../assets/img/check-mark.svg"
import Item from './Item/Item';
import { ITarefas } from '../../types/tarefas';

export default function Lista({tarefas}:{tarefas:ITarefas[]} ) {

  return (
    <aside className={styles.listaTarefas}>
      <h2 >Estudos do dia</h2>
        
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
