import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.components';

export const CardList = props=>{
    var sectionStyle = {
      backgroundImage: `url(${props.data.map(em=>em.picture.large)})`
    };
    return <div className="card-list span-1-of-4">
        {props.data.map(em=><Card style={sectionStyle} user={em} uim={em.picture.large}/>)}
    </div>
}
