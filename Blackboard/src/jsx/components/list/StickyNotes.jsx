import React from 'react';
import StickyNote from './StickyNote.jsx';
import DragDropContainer from 'react-drag-drop-container';


class StickyNotes extends React.Component{

    render(){
        return (
            <div className="stickys">
                {this.props.notes.map((item, index) => {
                    return <StickyNote save={ this.props.saveNote } edit={this.props.activeEdit} del={ this.props.delNote } note={item} key={item.id}>{item}</StickyNote>
                })}
            </div>
        );
    }
}

module.exports = StickyNotes;


