import React from 'react';
import { files } from './Cat';

const LS = () => {
    const listFiles = () => {
        return Object.keys(files).map((file) => {
            return <div key={file}>{file}</div>;
        });
    };

    return <div>{listFiles()}</div>;
};

export default LS;
