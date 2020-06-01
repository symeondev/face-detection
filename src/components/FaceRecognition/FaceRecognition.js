import React from 'react';

import './FaceRecognition.css';

const faceRecognition = ({ imageUrl, boxes }) => {
    const faceBoxes = boxes.map(box => (
            <div
                key={box.id}
                className='bounding-box'
                style={{ left: box.left, top: box.top, right: box.right, bottom: box.bottom }}>
            </div>
        ));
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto' />
                {faceBoxes}
            </div>
        </div>
    );
}

export default faceRecognition;