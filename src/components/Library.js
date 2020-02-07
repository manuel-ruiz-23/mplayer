import React from 'react';
import PropTypes from 'prop-types';

const Library = ({ setCurrentSong }) => {
    return (
        <div>
            library
        </div>
    );
};

Library.propTypes = {
    setPlayingSong: PropTypes.func.isRequired,
}

export default Library;