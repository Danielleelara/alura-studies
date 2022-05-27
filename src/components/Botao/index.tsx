import React, { Children } from 'react';
import styles from './Botao.module.scss';


class Botao extends React.Component<{type?: "button" | "reset" | undefined}>{
  render() {
    const {type = "submit" }= this.props;
    return (
      <button 
        type={type}
        className={styles.botao}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Botao;