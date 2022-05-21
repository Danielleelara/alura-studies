import React from 'react';
import styles from './Relogio.module.scss';

export default function Relogio() {
  return (
    <div>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioNumero}>0</span>
    </div>

  )
}
