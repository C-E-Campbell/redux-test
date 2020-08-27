import React from 'react';
import styles from '../Styles/FinalComponent.module.css';
export default function FinalChild2(props) {
  return (
    <div className={styles.container}>
      <h5 className={styles.headline}>Another Nested Component</h5>
      <h3 className={styles.h3}>{props.value || 'Text from Redux Store'}</h3>
    </div>
  );
}
