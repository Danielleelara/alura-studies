import { ITarefas } from '../../../types/tarefas';
import styles from './Item.module.scss';

interface Props extends ITarefas {
  selecionaTarefas: (tarefaSelecionada: ITarefas) => void
}
export default function Item({
  tarefa, tempo, selecionado, completado, id, selecionaTarefas }: Props) {
  return (
    <li 
      className={`${styles.item} ${selecionado? styles.itemSelecionado: ''}`} 
      onClick={()=> selecionaTarefas(
        {
          tarefa, 
          tempo,
          selecionado,
          completado,
          id
        }
      )
    }>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
