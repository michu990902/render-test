import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

const Group = ({children, svgBcr}) => {
    
    const [position, setPosition] = useState({x: 50, y: 50, zoom: 1, mouse: {}})
    useEffect(() => {
        setPosition(prev => ({...prev, zoom: (1/svgBcr.zoom)}))
    }, [svgBcr])
    

    const handleMouseMove = useRef(e => {
        setPosition(prev => {
            const xDiff = (prev.mouse.x * prev.zoom) - (e.pageX * prev.zoom)
            const yDiff = (prev.mouse.y * prev.zoom) - (e.pageY * prev.zoom)
                    
            let resX = prev.x - xDiff
            let resY = prev.y - yDiff
            console.log(svgBcr.w, xDiff, resX)
            if(resX < 0){
                resX = 0
                handleMouseUp()
            }else if(resX > svgBcr.w){
                resX = svgBcr.w
                handleMouseUp()
            }

            if(resY < 0){
                resY = 0
                handleMouseUp()
            }else if(resY > svgBcr.h){
                resY = svgBcr.h
                handleMouseUp()
            }

            return {
                x: resX,
                y: resY,
                zoom: prev.zoom,
                mouse: {
                x: e.pageX,
                y: e.pageY,
                },
            }
        })
    })
    
    const handleMouseDown = e => {
        const pageX = e.pageX
        const pageY = e.pageY
        setPosition(prev => ({
            ...prev,
            mouse: {
              x: pageX,
              y: pageY,
            },
          }),
        )
        document.addEventListener('mousemove', handleMouseMove.current)
    }
    
    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove.current)
        setPosition(prev => ({...prev, mouse: {}}))
    }


    return(
        <g 
            style={{transform: `translate(${position.x}px, ${position.y}px)`}}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {children}
        </g>
    )
}

const mapStateToProps = state => ({
    svgBcr: state.app.svgBcr,
});

export default connect(mapStateToProps)(Group);