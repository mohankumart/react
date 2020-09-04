import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (song) {
        return (
            <div>
                <h3>Details for:</h3>
                <div>Tilte: {song.title}</div>
                <div>Duration: {song.duration}</div>
            </div>
        );
    } else {
        return <div>Selec a Song</div>;
    }
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
