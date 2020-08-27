import React from 'react';
import FirstChild from './FirstChild';
import styles from '../Styles/Parent.module.css';
export default function ParentComponent(props) {
  return (
    <div data-aos={`fade-${props.fade}`} className={styles.container}>
      <h3 className={styles.headline}>Parent Component</h3>
      {props.children}
    </div>
  );
}
