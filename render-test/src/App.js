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
        w: 1000,
        h: 1000,
        zoom: 0.5
      })}/>
      <input type="button" value="zoom 1" onClick={() => setSvgBcr({
        w: 1000,
        h: 1000,
        zoom: 1
      })}/>
      <input type="button" value="zoom 2" onClick={() => setSvgBcr({
        w: 1000,
        h: 1000,
        zoom: 2
      })}/>
      
      <Svg>
        {/* <SvgGroup x={0} y={0}> */}
          <Ellipse
            title="test test test test test test"
            links={[
              {label: "test", url: "https://localhost"},
              {label: "test test", url: "https://localhost"},
              {label: "test test test test", url: "https://localhost"},
              {label: "test test test test test test test", url: "https://localhost"},
              {label: "test test test test test test test test test test test test test", url: "https://localhost"},
            ]}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime enim molestiae corporis ipsa. Autem error aut numquam eum eveniet quod, dolores id, nihil sunt dolor quia architecto, molestias laudantium."
          />
        {/* </SvgGroup> */}
      </Svg>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    setSvgBcr: brc => dispatch(setSvgBcr(brc)),
})

export default connect(null, mapDispatchToProps)(App);
