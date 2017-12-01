import React from 'react';

class NavBar extends React.Component{



    render(){
        return (
            <header className="header">
                <div className="container row title">
                    <h2 className="col">
                        Blackboard </h2>
                    <button onClick={this.props.addAction} className="buttonNav">New Stickynote</button>
                </div>
            </header>
        )
    }
}

module.exports = NavBar;


