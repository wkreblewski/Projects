import React from 'react';
import CategoryRow from '../list/CategoryRow.jsx';
import CatRow from '../list/CatRow.jsx';
import {DragDropContainer} from 'react-drag-drop-container';


class StickyNote extends React.Component{

    render(){
        return (
              <DragDropContainer dragHandleClassName="drag" >
                  <div className="drag tak">Drag&Drop</div>
                  <div contentEditable="true">{this.props.note.text}</div>
              </DragDropContainer>

        );
    }
}

module.exports = StickyNote;


