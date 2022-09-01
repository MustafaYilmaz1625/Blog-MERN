

import "./messenger.css"

const Messenger = () => {
    return (
        <div children="messenger">
            <div className="chat-menu">
                <div className="chat-menu-wrapper">
                    <input type="text" className="chat-menu-input" placeholder="Search for friend..." />
                </div>


            </div>
            <div className="chat-box"></div>
            <div className="chat-online"></div>
        </div>
    )
}

export default Messenger