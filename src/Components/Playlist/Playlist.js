import React from 'react';
import './Playlist.css';

class Playlist extends React.Component {
    constructor (props) {
        super(props);

        this.handleAddSong = this.handleAddSong.bind(this);
    }

    //not sure i need below with the this.props.addSong(1) etc in the render return
    // handleAddSong (id) {
    //     this.props.onAddSong();
    // }

    render () {
        return(
            <div className="box-container3">
                <div className="box">
                    <h3>Songlist</h3>
                    <div id="array-box3-1">
                        <div id="song-detail-box-1">
                        </div>
                        <div id ="add-remove-select-1">
                            <span onclick="removeSong(1)">-</span>
                            <span onClick={() => this.props.addSong(1)}>+</span>
                        </div>
                    </div>
                    <div id="array-box3-2">
                        <div id="song-detail-box-2">
                        </div>
                        <div id ="add-remove-select-2">
                            <span onclick="removeSong(2)">-</span>
                            <span onclick="addSong(2)">+</span>
                        </div>
                    </div>
                    <div id="array-box3-3">
                        <div id="song-detail-box-3">
                        </div>
                        <div id ="add-remove-select-3">
                            <span onclick="removeSong(3)">-</span>
                            <span onclick="addSong(3)">+</span>
                        </div>
                    </div>
                    <div id="array-box3-4">
                        <div id="song-detail-box-4">
                        </div>
                        <div id ="add-remove-select-4">
                            <span onclick="removeSong(4)">-</span>
                            <span onclick="addSong(4)">+</span>
                        </div>
                    </div>
                    <div id="array-box3-5">
                        <div id="song-detail-box-5">
                        </div>
                        <div id ="add-remove-select-5">
                            <span onclick="removeSong(5)">-</span>
                            <span onclick="addSong(5)">+</span>
                        </div>
                    </div>
                </div>
                <div className ="box" id="button-box3">
                    <p>Add songs from the songlist to the playlist  using the + and -
                    buttons
                    </p>
                </div>
                <div className="box">
                    <h3> My Playlist </h3>
                    <div id="playlist-box">
                        <div id="test-div">
                            <b>Click on the button to clear your playlist</b>
                            <button onclick="clearPlaylist()">Clear Playlist</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Playlist;