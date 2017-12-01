import React from 'react';
import CategoryRow from '../list/CategoryRow.jsx';
import CatRow from '../list/CatRow.jsx';
import StickyNote from './StickyNote.jsx';
import DragDropContainer from 'react-drag-drop-container';


class StickyNotes extends React.Component{

    render(){
        return (
            <div className="stickys">
                {this.props.notes.map((item, index) => {
                    return <StickyNote note={item} key={index}>{item}</StickyNote>
                })}
            </div>
        );
    }
}

module.exports = StickyNotes;


