import React from 'react';
import { myFiles as files } from './Cat';

const LS = () => {
    const listFiles = () => {
        return files.map((file) => {
            return <div key={file}>{file}</div>;
        });
    };

    return <div>{listFiles()}</div>;
};

export default LS;
