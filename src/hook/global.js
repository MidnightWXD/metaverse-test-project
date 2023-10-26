import React, { useState } from "react";

export function useGlobal() {
    const [productNav, setProductNav] = useState(false)
    
    return {
        productNav, 
        setProductNav
    };
}