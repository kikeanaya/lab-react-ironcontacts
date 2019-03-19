import React from 'react'

const contactCard = props => {
    return (
        <tr>
            <td><img src={props.pictureUrl} alt={props.name}></img></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button id="delete-button" onClick={props.clickToDelete}>Delete</button></td>
        </tr>
    )
}

export default contactCard