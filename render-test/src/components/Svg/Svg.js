import React from 'react';
import styles from './Svg.module.scss';

import { connect } from 'react-redux';

//TODO: przełącznik draggable/działają przyciski
const Svg = ({children, svgBcr}) => {
    
    return (
        <section className={styles.wrapper}>
            <svg
                style={{
                    width: `${svgBcr.w}px`, 
                    height: `${svgBcr.h}px`, 
                    transform: `scale(${svgBcr.zoom})`}}
                // viewBox={`0 0 ${w} ${h}`} 
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
            >
                {children}
            </svg>
        </section>
    )
}

const mapStateToProps = state => ({
    svgBcr: state.app.svgBcr,
})
export default connect(mapStateToProps)(Svg);