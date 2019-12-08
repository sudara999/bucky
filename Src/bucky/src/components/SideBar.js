import React, { Component } from 'react';
import cx from 'classnames';
import styles from "./SideBar.module.css";

class SideBar extends Component {

    render() {
        return (
            <nav id={styles["sidebar"]} className={this.props.active ? styles["active"] : styles["inactive"]}>
                <div className={styles["sidebar-header"]}>
                    <h3>Bucky</h3>
                </div>
                <ul className={cx(styles["list-unstyled"], styles["components"])}>
                    <p>Dummy Heading</p>
                    <li className={styles["active"]}>
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className={cx(styles.l, styles["dropdown-toggle"])}>Home</a>
                        <ul className={cx(styles.collapse, styles["list-unstyled"])} id="homeSubmenu">
                            <li>
                                <a className={styles.l} href="#">Dummy Div 1</a>
                            </li>
                            <li>
                                <a className={styles.l} href="#">Dummy Div 2</a>
                            </li>
                            <li>
                                <a className={styles.l} href="#">Dummy Div 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className={styles.l} href="#">Description</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className={cx(styles.l, styles["dropdown-toggle"])}>Pages</a>
                        <ul className={cx(styles.collapse, styles["list-unstyled"])} id="pageSubmenu">
                            <li>
                                <a className={styles.l} href="#">Possibly more stuff</a>
                            </li>
                            <li>
                                <a className={styles.l} href="#">Possibly even more stuff</a>
                            </li>
                            <li>
                                <a className={styles.l} href="#">Yeap, you got it. More stuff</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className={styles.l} href="#">Saved Places</a>
                    </li>
                    <li>
                        <a className={styles.l} href="#">Your profile</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideBar;