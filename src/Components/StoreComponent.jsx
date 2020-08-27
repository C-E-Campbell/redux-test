import React from 'react';
import styles from '../Styles/StoreComponent.module.css';
import { connect } from 'react-redux';
function StoreComponent(props) {
  return (
    <div data-aos='fade' className={styles.storeContainer}>
      <h5 className={styles.storeTitle}>Redux Store</h5>
      <p className={styles.storeData}>{`Text: ${props.text}`}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

export default connect(mapStateToProps, null)(StoreComponent);
