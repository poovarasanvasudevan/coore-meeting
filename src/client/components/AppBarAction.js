import React from 'react';
import {Avatar, FontIcon, Toolbar} from "react-md";

import {connect} from "react-redux"
import {Item} from "./Utils";

class AppBarAction extends React.Component {

    render() {
        return (

            <div>
                <Item label="Poovarasan">
                    <Avatar className="toolbar-avatar"
                            src="https://avatars1.githubusercontent.com/u/8036283?s=460&v=4"/>
                </Item>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(AppBarAction);