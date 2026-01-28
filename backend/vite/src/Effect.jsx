import { useEffect } from "react";

useEffect(() => {
    console.log('component mount')
    return () => {
        console.log('component unmount')
    }
}, [])

    