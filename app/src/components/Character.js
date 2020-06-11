import React from 'react';

let fontStyle = { color:'#fff', textShadow:'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }
let cardStyle = {  width: '25%', margin: '10px'}
let imgStyle = {  width: '100%', borderRadius: '10px', marginBottom: '-110px'}

const Character = ({ character }) => (

    <div style={cardStyle}>

      <img style={imgStyle} src={character.image} alt='' />
      <h3 style={fontStyle}>{character.name}</h3>
      <h4 style={fontStyle}> {character.species} </h4>

    </div>

)
export default Character;