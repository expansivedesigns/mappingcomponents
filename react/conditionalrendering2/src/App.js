import React from 'react'
import './styles.css'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            unreadMessages: [
              "Call your mom",
              "New spam email available.  All links are definitely safe to click."
            ]
        }
    }

    render() {
        return (
            <div className="App-wrapper">
                <h2 className="App-header">Conditional Rendering - Unread Messages</h2>
                <div className="App-body">
                      {this.state.unreadMessages.length > 0 && <h2>You have {this.state.unreadMessages.length} unread messages!</h2>}
                      <p>You can use an array's lenght to record unread messages and also use the && operator to test condition on left.</p>
                  </div>
                <h3 className="App-footer">ReactJS Consitional Rendering by TaLoveous Goodwin</h3>
            </div>
        )
    }

}

export default App