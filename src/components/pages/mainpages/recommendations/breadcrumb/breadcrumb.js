import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './breadcrumb.module.css';

// const linkItems = ['Dashboard', 'Profile']

const Breadcrumb = (props) => {
    const lastIndex = props.children.length - 1;

    let children = props.children.map((item, idx) => {
        return(<li key={`breadcrumb_item${idx}`}><NavLink to={item.link} activeClassName={styles.Active}>{item.label}</NavLink></li>);
    })

    children = children.reduce((acc, child, idx) => {
        const notLast = idx < lastIndex;
        if(notLast) {
            acc.push(child, '>>')
        } else {
            acc.push(child)
        }
        return acc;
    }, [])

    return(
        <ol className={styles.Breadcrumb}>
            {children}
        </ol>
    )
}

export default Breadcrumb;