import React from 'react';
import s from './nav.module.scss'
import {NavLink, Switch} from "react-router-dom";


const Nav = React.memo(() => {
    return (
            <Switch>
                <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to='/Weather' activeClassName={s.active}>Weather</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                    </div>
                </nav>
            </Switch>
    )
});

export default Nav;