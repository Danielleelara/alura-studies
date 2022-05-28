import React, {useState} from 'react';
import Botao from '../Botao';
import Relogio from './Relogio';
import styles from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefas } from '../../types/tarefas';

interface Props {
  selecionado: ITarefas | undefined
}

export default function Cronometro({selecionado}: Props) {
  const [tempo, setTempo] = useState<number>();

  if(selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo))
  }

  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
        Tempo:{tempo}
        <div className={styles.relogioWrapper}>
        <Relogio/>
        </div>
          <Botao>
            Começar!
          </Botao>
    </div>
  )
}
