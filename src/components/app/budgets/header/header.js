import React from 'react';
import './header.css';
import HeaderUp from './header-up/header-up';
import HeaderBottom from './header-bottom/header-bottom';

export default function Header(props) {
    return (
        <div className='budgets__header'>

            <HeaderUp {...props}/>
            <HeaderBottom {...props}
            />
            <div className='at-this-week'>
                <div className='at-this-week_title'>At this week</div>
                <div><img style = {{ transform: 'rotate(-90deg)'}}src='images/icons/shevron-left.svg' alt='shevron' /></div>
            </div>
        </div>
    )
}
