import React from 'react';
import styles from './App.module.scss';

import Svg from './components/Svg/Svg'
import SvgGroup from './components/SvgGroup/SvgGroup'
import { Ellipse } from './components/SvgBasicElements/SvgBasicElements'

import { connect } from 'react-redux';
import { setSvgBcr } from './redux/app/appActions'

function App({setSvgBcr}) {
  return (
    <div className={styles.app}>
      <input type="button" value="zoom 0.5" onClick={() => setSvgBcr({
        w: 500,
        h: 500,
        zoom: 0.5
      })}/>
      <input type="button" value="zoom 1" onClick={() => setSvgBcr({
        w: 500,
        h: 500,
        zoom: 1
      })}/>
      <input type="button" value="zoom 2" onClick={() => setSvgBcr({
        w: 500,
        h: 500,
        zoom: 2
      })}/>
      <Svg w={100} h={200}>
        <SvgGroup x={0} y={0}>
          <Ellipse 
            w={150} 
            h={150}
            bgColor="#f00"
            borderColor="#0f0"
            borderWidth="5"
            borderStyle="dashed"
          />
        </SvgGroup>
      </Svg>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    setSvgBcr: brc => dispatch(setSvgBcr(brc)),
})

export default connect(null, mapDispatchToProps)(App);
