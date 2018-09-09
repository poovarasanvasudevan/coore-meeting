import React from 'react';
import {connect} from 'react-redux';
import {Button, DialogContainer, FontIcon, NavigationDrawer, SVGIcon} from 'react-md';
import inboxListItems from '../components/Test'
import AppBarAction from "../components/AppBarAction";

export class AppLayout extends React.Component {

    constructor() {
        super();
        this.navItems = inboxListItems.map((item) => {
            if (item.divider) {
                return item;
            }

            return {
                ...item,
                onClick: () => this.setPage(item.key, item.primaryText),
            };
        });

        this.state = {
            renderNode: null,
            visible: false,
            key: inboxListItems[0].key,
            page: inboxListItems[0].primaryText,
        };
    }
    setPage = (key, page) => {
        this.navItems = this.navItems.map((item) => {
            if (item.divider) {
                return item;
            }

            return { ...item, active: item.key === key };
        });

        this.setState({ key, page });
    };

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false, renderNode: null });
    };

    handleShow = () => {
        this.setState({ renderNode: document.getElementById('navigation-drawer-demo') });
    };
    render() {
        const { visible, page, renderNode } = this.state;
        return (
            <section>

                <NavigationDrawer
                    renderNode={renderNode}
                    navItems={this.navItems}
                    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                    tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                    desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                    toolbarTitle="Hello, World!"
                    toolbarActions={<AppBarAction />}
                    contentId="main-demo-content"
                    toolbarClassName="toolbar-shadow"
                    temporaryIcon={<FontIcon className="m-icon">menu</FontIcon>}
                    persistentIcon={<FontIcon>arrow_back</FontIcon>}
                    contentClassName="md-grid"
                >
                    <section className="md-text-container md-cell md-cell--12">
                        <h1>Hello</h1>
                    </section>
                </NavigationDrawer>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(AppLayout);
