import React from 'react';
import { files } from './Cat';

const LS = () => {
    const listFiles = () => Object.keys(files).map((file) => <div key={file}>{file}</div>);

    return <div>{listFiles()}</div>;
};

export default LS;
