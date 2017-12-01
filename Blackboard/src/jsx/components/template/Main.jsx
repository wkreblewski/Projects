import React from 'react';
import StickyNotes from '../list/StickyNotes.jsx';
import NavBar from '../search/NavBar.jsx';


class Main extends React.Component{

    constructor() {
        super()
        this.state = {
            itemArray: []
        }
    }

    saveData(){
        localStorage.setItem('notes', JSON.stringify(this.state.itemArray));
    }


    loadData(){
        let notes = JSON.parse(localStorage.getItem('notes'));
        if(notes) {
            this.setState({
                itemArray: notes
            })
        }
    }

    componentDidMount(){
        this.loadData();
    }


    handleAddStickyNote = (e) => {
        const item = this.state.itemArray;
        let newId=1;

        if(this.state.itemArray.length) {
            this.state.itemArray.sort((a, b) => (b.id - a.id));
            newId = this.state.itemArray[0].id + 1;
            console.log(newId);
        }

        item.push({id: newId, title: 'Title', text: 'Nowa notatka'})
        this.setState({itemArray: item})
        this.state.itemArray.sort((a, b) => (a.id - b.id));
        //console.log(this.state)

    }



    handleDelNote = (e) => {
        let idToDetele = e.target.parentElement.dataset.id;
        if(idToDetele){
            let newNotesArr = this.state.itemArray.filter( (el) => el.id!=idToDetele);
            this.setState({
                itemArray: newNotesArr
            },
            () => this.saveData());
        }
    }

    handleSaveNote = (e) => {
        let id = e.target.parentElement.dataset.id;
        let title = e.target.parentElement.nextElementSibling.innerText;
        let text = e.target.parentElement.nextElementSibling.nextElementSibling.innerText;

        let left = e.target.parentElement.parentElement.parentElement.style.left;
        let top = e.target.parentElement.parentElement.parentElement.style.top;

        let elemsToUpdate = this.state.itemArray.forEach( (el, i) =>{
            if( el.id==id ){
                this.state.itemArray[i].text = text;
                this.state.itemArray[i].title = title;
                this.state.itemArray[i].top = top;
                this.state.itemArray[i].left = left;
            }
        });

        this.setState({
            itemArray: this.state.itemArray
        },
        ()=>this.saveData());

        // const item = this.state.itemArray;
        // let arrjson = item.JSON.stringify(value[, replacer[, space]])


    }

    activeEdit = (e) =>{
        console.log('clicked');
        e.target.setAttribute('contenteditable','true');
        e.target.focus();
    }

    render(){
        return(<div>
                <NavBar addAction={this.handleAddStickyNote}/>
                <StickyNotes saveNote={ this.handleSaveNote } activeEdit={this.activeEdit} delNote={ this.handleDelNote } notes={ this.state.itemArray }/>
            </div>
        )
    }

}

module.exports = Main;
