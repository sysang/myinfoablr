import React from 'react';
import Button from 'react-bootstrap/Button';

import styles from './index.module.scss';


//@ts-ignore
const BsButton = (props) => {
    const className = `${styles.button} ${props.className}`
    const _props = Object.assign(props, {className: className})
    return (
        <Button {..._props}>{props.children}</Button>
    )
}

export { BsButton };

