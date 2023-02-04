import { mount } from 'childReact/reactApp';
import React , {useRef, useEffect} from 'react';

export default () => {

    const ref = useRef(null);

    useEffect(()=>{
        mount(ref.current);
    })

    return <div ref={ref}></div>;
}