import styles from './Lista.module.scss';
import "./../assets/img/check-mark.svg"
import Item from './Item/Item';
import { ITarefas } from '../../types/tarefas';

interface Props{
  tarefas: ITarefas[],
  selecionaTarefas: (tarefaSelecionada: ITarefas)=>void
}

export default function Lista ({tarefas, selecionaTarefas}:Props ) {

  return (
    <aside className={styles.listaTarefas}>
      <h2 >Estudos do dia</h2>
        
      <ul>
        {
          tarefas.map((item) => {
            return (
              <Item
                selecionaTarefas={selecionaTarefas}
                key={item.id}
                {...item}
              />
            )
            })
        }
      </ul>

    </aside>
  )
}
