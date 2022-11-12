import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'

import './draggable-list.css'

import DraggableListItem from './DraggableListItem'

const DraggableList = props => {
//console.log(props.data)
    const [data, setdata] = useState({
        g: []
      });
     
 // setdata({g:props.data})
//console.log(data)
    const [dragStartIndex, setdragStartIndex] = useState(null);

    // get index of draged item
    const onDragStart = (index) => setdragStartIndex(index)

    // update list when item dropped
    const onDrop = (dropIndex) => {
        // get draged item
        const dragItem = data.g[dragStartIndex]

        // delete draged item in list
        let list = [...data]
        list.splice(dragStartIndex, 1)

        // update list
        if (dragStartIndex < dropIndex) {
            setdata([
                ...list.slice(0, dropIndex - 1),
                dragItem,
                ...list.slice(dropIndex - 1, list.length)
            ])
        } else {
            setdata([
                ...list.slice(0, dropIndex),
                dragItem,
                ...list.slice(dropIndex, list.length)
            ])
        }
    }
    useEffect(() => {

     const time = setInterval(()=>{
             setdata({g: props.data})
        }, 1000);
        return () => {
            clearInterval(time)
          };
       
               //console.log("fecthingdata");
      });
    
    return (
        <ul className="draggable-list">
            {
                data.g.map((item, index) => (
                    <DraggableListItem
                        key={index}
                        index={index}
                        onDragStart={(index) => onDragStart(index)}
                        onDrop={(index) => onDrop(index)}
                    >
                        {
                            props.renderItemContent(item)
                        }
                    </DraggableListItem>
                ))
            }
            {/*
                add last item so you can drag item to last position
                last item dont need onDragStart because it can not be draged
            */}
            <DraggableListItem
                key={data.g.length}
                index={data.g.length}
                draggale={false}
                onDrop={(index) => onDrop(index)}
            />
        </ul>
    )
}

DraggableList.propTypes = {
    data: PropTypes.array,
    renderItemContent: PropTypes.func
}

export default DraggableList
