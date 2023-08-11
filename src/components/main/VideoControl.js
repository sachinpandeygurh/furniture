import React, { useRef, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VideoControl = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        if (videoRef.current) {
            setIsPlaying(true);
            videoRef.current.play();
        }
    };

    const stopVideo = () => {
        if (videoRef.current) {
            setIsPlaying(false);
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className="video-wrapper full position-relative">
            <video
                ref={videoRef}
                className="fill"
                width="100%"
                src="https://www.marcpridmore.com/wp-content/uploads/2020/03/video-crystal-cove.mp4"
                poster="https://www.marcpridmore.com/wp-content/uploads/2020/10/home-page.jpg"
                loop
                playsInline
                webkit-playsinline
                onClick={stopVideo}
            ></video>
            <div className={`uper-Content ${isPlaying ? 'd-none' : 'd-block'}`}>
                <h1
                    className="text-white text-center text-uppercase py-1"
                    style={{ fontFamily: 'Cinzel, SansSerif' }}
                >
                    Infinite Interior <br /> Design Possibilities
                </h1>
                <p className="bg-dark text-white text-center my-5 px-3 py-1 rounded text-uppercase">
                    view portfolio
                </p>
                <Link
                    onClick={isPlaying ? stopVideo : playVideo}
                    className="d-flex text-decoration-none text-white text-center text-uppercase py-1"
                >
                    <FaPlayCircle size={56} style={{ marginRight: '10px' }} />
                    <h3
                        className="text-white text-center text-uppercase p-0 m-0 d-flex align-items-center"
                        style={{ fontFamily: 'Cinzel, SansSerif' }}
                    >
                        Crystal Cove Interior Design
                    </h3>
                </Link>
            </div>
        </div>
    );
};

export default VideoControl;
