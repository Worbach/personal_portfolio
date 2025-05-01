import React from "react";
import ReactPlayer from "react-player";

function DisplayVideo({videoUrl, onClose}) {


    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <button 
                onClick={onClose}
                className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
            >
                &times;
            </button>
            <ReactPlayer 
                url={videoUrl}
                controls
                playing
                width="100vw"
                height="100vh"
                style={{ maxWidth: "100%", maxHeight: "100%"}}
            />
        </div>
    )
}

export default DisplayVideo