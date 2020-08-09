import React, { useState, useEffect } from 'react';
import styles from './SvgBasicElements.module.scss';

// export const Ellipse = ({w, h, bgColor, borderColor, borderWidth, borderStyle}) => {
//     const borderStyles = {
//         solid: "0 0",
//         dotted: `0 ${borderWidth*3}`,
//         dashed: `15 15`
//     };
//     return (
//         <ellipse 
//             cx={w/2}
//             cy={h/2}
//             rx={w}
//             ry={h}
//             className={styles.ellipse}
//             onClick={() => console.log("ok")}
//             style={{
//                 fill: bgColor,
//                 stroke: borderColor,
//                 strokeWidth: borderWidth,
//                 strokeDasharray: borderStyles[borderStyle],
//                 strokeLinecap: "round",
//             }}
//         />
//     )
// }

export const Ellipse = ({title, links, desc, bgColor, borderColor, borderWidth, borderStyle}) => {
    const borderStyles = {
        solid: "0 0",
        dotted: `0 ${borderWidth*3}`,
        dashed: `15 15`
    };

    // const [text, setText] = useState({
    //     title: "",
    //     desc: "",
    // })

    // useEffect(() => {
    //     let tmpTitle = 
    //     setText(prev => ({...prev, title}))
    // }, [title])

    return (
            <foreignObject x="0" y="0" width="1" height="1" style={{
                overflow: "visible"
            }}>
            <div xmlns="http://www.w3.org/1999/xhtml" style={{
                // backgroundColor: "#f00",
                border: "3px solid #0f0",
                borderRadius: "50%"
            }} className={styles.wrapper}>

                {title && (
                    <>
                        <h3 className={styles.text}>{title}</h3>
                        <hr/>
                    </>
                )}

                {links.length > 0 && (
                    <>
                        {links.map(({label, url}, id) => <><a className={styles.text} key={id} href={url} target="_blank" rel="noopener noreferrer">{label}</a><br/></>)}
                        <hr/>
                    </>
                )}

                {desc && (
                    <>
                        <p className={styles.text}>{desc}</p>
                        <hr/>
                    </>
                )}
            </div>
            </foreignObject>
    )
}


//https://codepen.io/techniq/pen/rLXwJJ
//