import React, { useRef, useEffect } from 'react';

import { mount } from 'home/HomeApp';

const HomeApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref}></div>
}

export default HomeApp;