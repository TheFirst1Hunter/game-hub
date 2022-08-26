import { useState, useEffect } from 'react';

/**
 * @returns {Object} dimensions object
 */
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

/**
 * @returns {Object} dimensions object
 */
export default function useWindowDimensions(): {
    width: number;
    height: number;
} {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        /**
         * @returns {void} window-resize
         */
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
