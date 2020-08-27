import React from 'react';
import { connect } from 'react-redux';

import styles from '../Styles/FinalComponent.module.css';
function FinalChild2(props) {
  return (
    <div className={styles.container}>
      <h5 className={styles.headline}>
        Another Nested Component Subscribed to the Redux store
      </h5>
      <h3 className={styles.h3}>{props.text || 'Text from Redux Store'}</h3>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

export default connect(mapStateToProps, null)(FinalChild2);
