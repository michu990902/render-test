import React from 'react';
import styles from './SvgBasicElements.module.scss';

export const Ellipse = ({w, h, bgColor, borderColor, borderWidth, borderStyle}) => {
    const borderStyles = {
        solid: "0 0",
        dotted: `0 ${borderWidth*3}`,
        dashed: `15 15`
    };
    return (
        <ellipse 
            cx="0"
            cy="0"
            rx={w}
            ry={h}
            className={styles.ellipse}
            onClick={() => console.log("ok")}
            style={{
                fill: bgColor,
                stroke: borderColor,
                strokeWidth: borderWidth,
                strokeDasharray: borderStyles[borderStyle],
                strokeLinecap: "round",
            }}
        />
    )
}