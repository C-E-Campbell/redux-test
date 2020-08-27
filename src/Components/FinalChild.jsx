import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateText } from '../Redux/ActionCreators';
import styles from '../Styles/FinalComponent.module.css';
function FinalChild(props) {
  const [text, setText] = useState('');
  return (
    <div className={styles.container}>
      <h5 className={styles.headline}>Another Nested Component</h5>
      <label className={styles.label}>Send some text to the store</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        placeholder='Enter anything here!'
      />
      <button
        onClick={() => {
          props.updateText(text);
        }}
        className={styles.button}
      >
        Send it
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

const mapDispatchToProps = { updateText };

export default connect(mapStateToProps, mapDispatchToProps)(FinalChild);
