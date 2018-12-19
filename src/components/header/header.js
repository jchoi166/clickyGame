import React from 'react'

const styles = {
     div: {
        lineHeight: '100px',
        backgroundColor: 'lightblue',
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0px 10px 15px grey',
        zIndex: '1'
    },
    p: {
        margin: '0px 20px 0px 20px',
        textAlign: 'center'
    },
}


const Header = props => (
    <div style = {styles.div}>
        <div style= {styles.p}>Clicky Game</div>
        <div style= {styles.p}>{props.message}</div>
        <div style= {styles.p}>Current Score: {props.currentScore}| Top Score: {props.topScore}</div>
    </div>

)


export default Header