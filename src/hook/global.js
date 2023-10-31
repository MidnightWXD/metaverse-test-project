import React, { useState } from "react";

export function useGlobal() {
    const [isHover, setIsHover] = useState('0')
    
    return {
        isHover, 
        setIsHover
    };
}