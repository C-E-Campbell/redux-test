import React from 'react';
import styles from './Styles/App.module.css';
import ParentComponent from './Components/ParentComponent';
import FirstChild from './Components/FirstChild';
import FinalChild from './Components/FinalChild';
import FinalChild2 from './Components/FinalChild2';
import StoreComponent from './Components/StoreComponent';
function App() {
  return (
    <div className={styles.container}>
      <h2 data-aos='fade-down' className={styles.headline}>
        React & Redux Example
      </h2>
      <StoreComponent />
      <div className={styles.componentContainer}>
        <ParentComponent fade={'right'}>
          <FirstChild>
            <FinalChild />
          </FirstChild>
        </ParentComponent>
        <ParentComponent fade={'left'}>
          <FirstChild>
            <FinalChild2 />
          </FirstChild>
        </ParentComponent>
      </div>
    </div>
  );
}

export default App;
