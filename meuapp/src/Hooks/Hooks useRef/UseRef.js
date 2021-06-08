import React from 'react';

const UseRef = () => {
    const video = React.useRef();
    console.log(video.current.currentTime)
    return <video ref={video}/>;
}

export default UseRef;