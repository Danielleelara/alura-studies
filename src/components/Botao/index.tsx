import React, { Children } from 'react';
import styles from './Botao.module.scss';

interface Props {
  type?: "button" | "reset" | undefined,
  onClick?: ()=> void,
  children?: React.ReactNode
}

export default function Botao ({onClick, type, children}: Props){
  return (
    <button 
      onClick={onClick}
      type={type}
      className={styles.botao}
    >
      {children}
    </button>
  )

}

