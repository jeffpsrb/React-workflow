import React from "react";

export default class ListRendering extends React.Component {
    state= {
        users: ['jeffrey', 'aldo', 'wawan', 'mahesa', 'edo']
    }
    render() {
        return(
            <div>
                <ul>
                    {
                    this.state.users.map((user, i) => <li key={i}>{user}</li>)
                    } 
                </ul>
                
            </div>
        )
    }
}