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
          {/* <Ellipse 
            w={150} 
            h={150}
            bgColor="#f00"
            borderColor="#0f0"
            borderWidth="5"
            borderStyle="dashed"
          /> */}
          {/* <text x="0" y="0" style={{textWrap: "200px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit doloremque officia temporibus incidunt similique veniam? Perferendis itaque explicabo iste praesentium dolorem molestiae illo possimus dolores, fuga, aliquam nobis. Doloremque.</text> */}

          {/* //TODO: https://jsfiddle.net/IPWright83/22ahj15o/ */}
          <switch>
            <foreignObject x="0" y="0" width="100%" height="100%">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{
                background: "#f00",
                border: "3px solid #0f0",
                borderRadius: "50%",
              }} className={styles.wrapper}>
                <p xmlns="http://www.w3.org/1999/xhtml" className={styles.text}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloribus, eligendi sit hic, ea a dolor maiores suscipit aperiam libero sint atque officia doloremque numquam, quaerat natus aliquam quasi est?
                </p>
              </div>
            </foreignObject>
          </switch>
        </SvgGroup>
      </Svg>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    setSvgBcr: brc => dispatch(setSvgBcr(brc)),
})

export default connect(null, mapDispatchToProps)(App);
