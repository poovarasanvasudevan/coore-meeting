import React, {PureComponent} from 'react';
import {
    Button,
    IconSeparator,
    List,
    ListItem,
    AccessibleFakeInkedButton
} from "react-md";
import {injectInk} from 'react-md';


class AItem extends PureComponent {
    render() {
        return (
            <AccessibleFakeInkedButton>
                <IconSeparator
                    label={
                        <div className="md-tile-content md-tile-content--left-avatar">
                            <div className="md-tile-text--primary">{this.props.label}</div>
                        </div>
                    }
                    iconBefore
                    component="div"
                    className="md-cell md-cell--12">
                    {this.props.children}
                </IconSeparator>
            </AccessibleFakeInkedButton>
        )
    }
}

export const Item = injectInk(AItem);
