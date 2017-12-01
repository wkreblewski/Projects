import React from 'react';

class NavBar extends React.Component{



    render(){
        return (
            <header>
                <div className="container row">
                    <h2 className="col">Blackboard</h2>
                    <button onClick={this.props.addAction} className="buttonNav">Nowa Notatka</button>
                </div>
            </header>
        )
    }
}

module.exports = NavBar;


