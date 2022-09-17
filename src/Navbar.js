import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="carticon" style={styles.cartIcon} />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )

}

const styles = {
    cartIcon: {
        height: 34,
        marginRight: 24
    },
    cartIconContainer: {
        position: 'relative'
    },
    nav: {
        display: 'flex',
        justifyContent: 'flex-end',
        background: 'blue',
        height: 70,
        alignItems: 'center'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '5px 9px',
        position: 'absolute',
        right: 3,
        top: -10
    }

}

export default Navbar;