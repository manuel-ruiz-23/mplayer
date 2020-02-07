import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ currentSong }) => {
    console.log('currentSong:', currentSong);

    function playAdio() {
        console.log('play audio');
    }

    function pauseAudio() {
        console.log('pause audio');
    }

    // var x = document.getElementById("myAudio"); 

    // function playAudio() { 
    // x.play(); 
    // } 

    // function pauseAudio() { 
    // x.pause(); 
    // } 

    return (
        <div>
           <audio id="myAudio" controls>
            <source src={require('../songs/duck.mp3')} type="audio/mpeg"/>
            Your browser does not support the audio element.
           </audio> 
           <button onClick={playAdio} type="button">Play Audio</button>
           <button onClick={pauseAudio} type="button">Pause Audio</button> 
        </div>
    );
}

Player.propTypes = {
    currentSong: PropTypes.string.isRequired,
}

export default Player;
