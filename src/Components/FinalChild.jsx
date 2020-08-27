import React from 'react';
import styles from '../Styles/FinalComponent.module.css';
export default function FinalChild(props) {
  return (
    <div className={styles.container}>
      <h5 className={styles.headline}>Another Nested Component</h5>
      <label className={styles.label}>Send some text to the store</label>
      <input className={styles.input} placeholder='Enter anything here!' />
      <button className={styles.button}>Send it</button>
    </div>
  );
}
