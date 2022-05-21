import React from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Formulario';
import Lista from '../components/Lista';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <Lista />
      <Cronometro/>
    </div>
  );
}

export default App;
