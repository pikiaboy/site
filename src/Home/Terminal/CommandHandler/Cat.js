import React, { Suspense } from 'react';

const AboutMe = React.lazy(() => import('./files/AboutMe'));
const CurrentJob = React.lazy(() => import('./files/CurrentJob'));

const files = {
    'about-me.txt': <AboutMe />,
    'current-job.txt': <CurrentJob />,
    'fun-facts.txt': <div>This is not a real terminal!</div>
};

const Cat = (arguements) => {
    if (arguements.length > 1) {
        return <span>I don't support catting out multiple files yet!</span>;
    }

    if (!Object.keys(files).includes(arguements[0])) {
        return <span>{arguements[0]} does not exist!</span>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {files[arguements[0]]}
        </Suspense>
    );
};

Cat.propTypes = {};

export default Cat;

export { files };
