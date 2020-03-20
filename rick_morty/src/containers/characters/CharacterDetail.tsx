import React, { FunctionComponent, useState, useEffect } from 'react';
import { Character, getCharacter } from '../../reduxStore/actions';
import { StoreState } from '../../reduxStore/reducers';
import { connect } from 'react-redux';

interface CharacterDetailProps {
    name: string;
    id: number;
    url: string;
}
const _CharacterDetail: FunctionComponent<CharacterDetailProps> = (props: CharacterDetailProps): JSX.Element => {
    const [character, setCharacter] = useState<CharacterDetailProps | null>(null)
    return (
        <>
            {/* {props.children} */}
            <h2>CharacterDetail</h2>
        </>
    );
};

const mapStateToProps = ({ characters }: StoreState, ownProps: CharacterDetailProps): { character: Character } => {
    return {
      character: characters[ownProps.id]
    };
  };

  export default connect(mapStateToProps, {getCharacter})(_CharacterDetail);