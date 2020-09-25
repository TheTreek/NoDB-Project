import React from 'react'
import Thumbnail from './Thumbnail';
import '../Styles/List.css';
function List(props){

    let list = props.knives.map((val,index)=>{
        return(
            <Thumbnail 
                id = {val.id}
                name = {val.name}
                img = {val.img}
                key = {index}
                changeFN = {props.changeFN}
                current = {props.current}
            />
        );
    });

    return(
        <div id='list'>
            {list}
        </div>
    );
}

export default List;