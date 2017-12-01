import React from 'react';
import DragDropContainer from './DragDropContainer.jsx';


class StickyNote extends React.Component{

    componentDidMount(){
        let note = document.querySelector('#note' + this.props.note.id ).parentElement.parentElement;
        note.style.left = this.props.note.left;
        note.style.top = this.props.note.top;
    }


    render(){
        let id = 'note'+this.props.note.id;
        return (
              <DragDropContainer dragHandleClassName="drag">
                  <div className="ramka">
                      <div className="drag dragdrop" data-id={this.props.note.id} id={id}>
                          <button className="save" onClick={ this.props.save } ><i className="fa fa-floppy-o" aria-hidden="true"></i> save</button> <span className="dragdropword">Drag&Drop {this.props.note.id} </span> <button className="delete" onClick={ this.props.del }>delete <i className="fa fa-trash" aria-hidden="true"></i></button>
                      </div>
                      <div className="stickyTitle" onClick={this.props.edit}>{this.props.note.title}</div>
                      <div className="stickyContent" onClick={this.props.edit}>{this.props.note.text}</div>

                  </div>
              </DragDropContainer>

        );
    }
}

module.exports = StickyNote;

