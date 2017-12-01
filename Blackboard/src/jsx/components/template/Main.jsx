import React from 'react';
import CatsData from '../../model/CatsData.jsx';
import StickyNotes from '../list/StickyNotes.jsx';
import NavBar from '../search/NavBar.jsx';

class Main extends React.Component{

    constructor() {
        super()
        this.state = {
            itemArray: [
                {id: 1, text: 'Nowa notatka'},
                {id: 2, text: 'Nowa notatka'},
            ]
        }
    }


    handleAddStickyNote = (e) => {

        const item = this.state.itemArray;
        item.push({id:3, text: 'Nowa notatka'}
        )
        this.setState({itemArray: item})
        //console.log(this.state)
    }

    render(){
        return(<div>
                <NavBar addAction={this.handleAddStickyNote}/>
                <StickyNotes notes={this.state.itemArray}/>
            </div>
        )
    }

}

module.exports = Main;
