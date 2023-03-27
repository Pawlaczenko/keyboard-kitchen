import React, { useRef, useState } from 'react'
import { IContainerContext } from '../context/ContainerContext';

const useContainer = () => {
    const appRef = useRef(null);
    const [zindex,setzIndex] = useState<number>(0);
    const handleIndexChange = (n : number) => {
        zindex !== n && setzIndex(n);
    }

    const containerContext : IContainerContext = {
      constraints: appRef,
      zIndexStack: zindex,
      incrementzIndexStack: handleIndexChange
    }

    return containerContext;
}

export default useContainer