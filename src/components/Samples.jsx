import React, {useState} from "react";
import useSound from 'use-sound';
import Audio1 from "./src/Sally.mp3";
import Audio2 from "./src/Feelings.mp3";
import Audio3 from "./src/Release.mp3";
import Audio4 from "./src/Words.mp3";
import Audio5 from "./src/Promised Land.mp3";
import Audio6 from "./src/Godzilla.mp3";
import useWebPlaybackSDKReady from 'react-spotify-web-playback-sdk';

const Samples = () => {
    const [hoverAudio1, setHoverAudio1] = useState(false);
    const [hoverAudio2, setHoverAudio2] = useState(false);
    const [hoverAudio3, setHoverAudio3] = useState(false);
    const [hoverAudio4, setHoverAudio4] = useState(false);
    const [hoverAudio5, setHoverAudio5] = useState(false);
    const [hoverAudio6, setHoverAudio6] = useState(false);

    const [playAudio1, stopAudio1] = useSound(Audio1);
    const [playAudio2, stopAudio2] = useSound(Audio2);
    const [playAudio3, stopAudio3] = useSound(Audio3);
    const [playAudio4, stopAudio4] = useSound(Audio4);
    const [playAudio5, stopAudio5] = useSound(Audio5);
    const [playAudio6, stopAudio6] = useSound(Audio6);

    const [showed , setShowed] = useState(false);

    return (
        <div>
            <section className="Section5" id="samples">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="display-4 fw-bolder text-center mt-2 mb-3  text-white">Our Samples</h3>
                            <h1 className="display-6 text-center mb-4  text-white">The <b>Awesome </b>Collection for <b>You </b></h1>
                            <hr className="w-75 mx-auto" />
                        </div>
                    </div> 
                    <td>
                        <div id="overlay1" style={showed ? { display: "none" } : { display: "block" }} onClick={(e) => setShowed(true)}>
                            <i className="fa fa-play-circle-o fa-5x center text-primary" style={{margin: '0', position: 'absolute', top: '40%', left: '45%'}}>

                            </i>
                        </div>                   
                        <div className="container" id="base1">
                            <div className="row mt-5" id="LayerStay">
                                <div className="col-md-4">
                                    <div  className="card p-3"
                                        onMouseEnter={() => {
                                            setHoverAudio1(true);
                                            playAudio1();
                                        }}
                                        onMouseLeave={() => {
                                            setHoverAudio1(false);
                                            stopAudio1.pause();
                                        }}>
                                        <div className="card-body text-center">
                                                <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Sally</h5>
                                            <p className="card-text lead">
                                                A Punk-Styled part-hymn, just go for it! 
                                            </p>
                                            <i className="fa fa-play-circle-o fa-5x mb-4 text-primary"></i>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div  className="card p-3"
                                        onMouseEnter={() => {
                                            setHoverAudio2(true);
                                            playAudio2();
                                        }}
                                        onMouseLeave={() => {
                                            setHoverAudio2(false);
                                            stopAudio2.pause();
                                        }}>
                                        <div className="card-body text-center">
                                                <i className="fa fa-heartbeat fa-4x mb-4 text-primary"></i>
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Feelings
                                            </h5>
                                            <p className="card-text lead">
                                                Thr softer side of our Rock!!!<br></br>    You like?
                                            </p>
                                            <i className="fa fa-play-circle-o fa-5x mb-4 text-primary"></i>
                                            <useWebPlaybackSDKReady
                                                token={'YOUR_ACCESS_TOKEN'} // Replace with your Spotify access token
                                                uris={['spotify:track:YOUR_TRACK_ID']} // Replace with the URI of the Spotify track you want to play
                                                autoPlay={true}
                                                callback={(state) => {
                                                    console.log(state);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div  className="col-md-4">
                                    <div className="card p-3"
                                        onMouseEnter={() => {
                                            setHoverAudio3(true);
                                            playAudio3();
                                        }}
                                        onMouseLeave={() => {
                                            setHoverAudio3(false);
                                            stopAudio3.pause();
                                        }}>
                                        <div className="card-body text-center">
                                                <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Release
                                            </h5>
                                            <p className="card-text lead">
                                                Just "smash it" song, jump in and enjoy.
                                            </p>
                                            <i className="fa fa-play-circle-o fa-5x mb-4 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 mb-5" id="LayerStay">
                                <div className="col-md-4">
                                    <div className="card p-3"
                                        onMouseEnter={() => {
                                            setHoverAudio4(true);
                                            playAudio4();
                                        }}
                                        onMouseLeave={() => {
                                            setHoverAudio4(false);
                                            stopAudio4.pause();
                                        }}>
                                        <div className="card-body text-center">
                                                <i className="fa fa-comments fa-4x mb-4 text-primary"></i>
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Words
                                            </h5>
                                            <p className="card-text lead">
                                                Just another Lovesong?
                                                <br></br> 
                                            </p>
                                            <i className="fa fa-play-circle-o fa-5x mb-4 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div  className="card p-3"
                                        onMouseEnter={() => {
                                            setHoverAudio5(true);
                                            playAudio5();
                                        }}
                                        onMouseLeave={() => {
                                            setHoverAudio5(false);
                                            stopAudio5.pause();
                                        }}>
                                        <div className="card-body text-center">
                                                <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Promised Land
                                            </h5>
                                            <p className="card-text lead">
                                                Just enjoy
                                                <br></br>
                                            </p>
                                            <i className="fa fa-play-circle-o fa-5x mb-4 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div  className="card p-3 pb-3" 
                                        onMouseEnter={() => {
                                            setHoverAudio6(true);
                                            playAudio6();
                                        }}
                                        onMouseLeave={() => {
                                            setHoverAudio6(false);
                                            stopAudio6.pause();
                                        }}>                                
                                        <div className="card-body text-center">
                                                <i className="fa fa-music fa-4x mb-4 text-primary"></i>
                                            <h5 className="card-title mb-3 fs-4 fw-bold">Lost
                                            </h5>
                                            <p className="card-text lead">
                                                Something to think about ...
                                                <br></br> 
                                            </p>
                                            <i className="fa fa-play-circle-o fa-5x mb-4 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>                    
                </div>
            </section>
        </div>
    )
}

export default Samples;