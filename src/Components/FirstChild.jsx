import React from 'react';
import styles from '../Styles/FirstChild.module.css';
import Final from './FinalChild';
export default function FirstChild(props) {
  return (
    <div className={styles.container}>
      <h5 className={styles.headline}>Nested Component</h5>
      {props.children}
    </div>
  );
}
