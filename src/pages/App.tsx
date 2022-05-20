import React from 'react';
import Form from '../components/Formulario';
import Lista from '../components/Lista';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <Lista />
    </div>
  );
}

export default App;
