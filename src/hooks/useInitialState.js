import { useState, useEffect } from 'react';

const useInitialState = () => {
    const [videos, setVideos ] = useState([]);
    useEffect((API) => {
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data));
    }, []);
    return videos; 
};

export default useInitialState;