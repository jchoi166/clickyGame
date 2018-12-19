import React from 'react'


const style ={
    div: {
        display: "flex",
        height: "100%",
        width: "300px",
        justifyContent: "center"
    },
    img: {
        height: "200px",
        width: "200px",
        position: 'relative',
        margin: '20px',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: '7px'
    }
}
   
const Card = props => (
    

        <div style={style.div} >
            <img style={style.img} name= {props.name} alt={props.name} src={props.image} onClick={props.onPress}/>
        </div>
    
)

export default Card