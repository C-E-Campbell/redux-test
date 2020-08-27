import React from 'react';
import { connect } from 'react-redux';
import { updateText } from '../Redux/ActionCreators';
import styles from '../Styles/FinalComponent.module.css';
function FinalChild2(props) {
  return (
    <div className={styles.container}>
      <h5 className={styles.headline}>Another Nested Component</h5>
      <h3 className={styles.h3}>{props.text || 'Text from Redux Store'}</h3>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

const mapDispatchToProps = { updateText };

export default connect(mapStateToProps, null)(FinalChild2);
