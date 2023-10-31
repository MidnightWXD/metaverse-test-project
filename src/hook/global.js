import React, { useState } from "react";

export function useGlobal() {
    const [productNav, setProductNav] = useState(false)
    const [isHover, setIsHover] = useState('0')
    
    return {
        productNav, 
        setProductNav,
        isHover, 
        setIsHover
    };
}