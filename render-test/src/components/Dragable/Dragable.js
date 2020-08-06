import React, { useRef } from 'react';

const Draggable = ({children, stickyLines}) => {
    const dragRef = useRef(null);
    return (
        <div
            ref={dragRef}
        >
            {children}
        </div>
    )
}