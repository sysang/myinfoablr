import React from 'react';
import Button from 'react-bootstrap/Button';

import styles from './index.module.scss';


//@ts-ignore
const BsButton = (props) => {
    let _props = Object.assign({}, props)
    _props['className'] = `${styles.button} ${props.className}`

    return (
        <Button {..._props}>{props.children}</Button>
    )
}

export { BsButton };

