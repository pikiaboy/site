import React, { Suspense } from 'react';

const AboutMe = React.lazy(() => import('./AboutMe'));

const myFiles = {
    'about-me.txt': <AboutMe />,
    'current-job.txt': <div>Veeva Systems</div>,
    'fun-facts.txt': <div>This is not a real terminal!</div>
};

const Cat = (arguements) => {
    if (arguements.length > 1) {
        return <span>I don't support catting out multiple files yet!</span>;
    }

    if (!Object.keys(myFiles).includes(arguements[0])) {
        return <span>{arguements[0]} does not exist!</span>;
    }

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {myFiles[arguements[0]]}
            </Suspense>
        </>
    );
};

export default Cat;

export { myFiles };