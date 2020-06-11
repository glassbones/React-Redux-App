import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../store/actions';
import Character from './Character';

let container = {  display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}
//deconstruct
const Characters = ({ fetchCharacters, characters, isFetching }) => {

  useEffect(() => { fetchCharacters(); }, [fetchCharacters]);

  return (
    <>
      { isFetching && <h3>Loading...</h3> }
      <div style={container}>
        {characters.map(character => ( <Character key={character.id} character={character} /> ))}
      </div>
    </>);
};

const mapStateToProps = state => ({ isFetching: state.reducer.isFetching, characters: state.reducer.characters})
export default connect( mapStateToProps, { fetchCharacters } )(Characters);