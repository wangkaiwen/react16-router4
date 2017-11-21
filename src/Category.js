/**
 * Created by kevin on 2017/11/20.
 */
import React from 'react';
import { Link, Route } from 'react-router-dom';

const Category = ({match})=>{
    const style={
        orange:{
            background:"orange",
            color:"#fff"
        },
        blue:{
            background:"blue",
            color:"#fff"
        }
    }
    return (
        <div style={style.orange} className="light" id="ca">
            <ul>
                <li><Link style={style.blue} to={`${match.url}/shoes`}>鞋</Link></li>
                <li><Link to={`${match.url}/boots`}>靴子</Link></li>
                <li><Link to={`${match.url}/Footwear`}>球鞋</Link></li>
            </ul>
            <Route path={`${match.url}/:name`} render={({match})=>{return (<div><h3>{match.params.name}</h3></div>)}}/>
        </div>
    )
};
export default Category;