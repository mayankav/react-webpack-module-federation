import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
    const history = useHistory();
    const ref = useRef(null);

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: (location) => {
                const nextPathname = location.pathname;
                if(history.location.pathname !== nextPathname) history.push(nextPathname);
            }
        });
        // onParentNavigate gets a location value passed by history.listen eventListener
        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref}></div>
}

export default MarketingApp;