import React from 'react';

const CompBar = () => {
    let fetchedScore = 0.2;

    let compIndex = 0;
    if (fetchedScore>=0 && fetchedScore<=0.05) {
        compIndex=11;
    }

    if (fetchedScore>0.05 && fetchedScore<=0.1) {
        compIndex=22;
    }

    if (fetchedScore>0.1 && fetchedScore<=0.15) {
        compIndex=33;
    }

    if (fetchedScore>0.15 && fetchedScore<=0.2) {
        compIndex=50;
    }

    if (fetchedScore>0.2 && fetchedScore<=0.25) {
        compIndex=67;
    }

    if (fetchedScore>0.25 && fetchedScore<=0.3) {
        compIndex=78;
    }

    if (fetchedScore>0.3 && fetchedScore<=0.35) {
        compIndex=89;
    }

    if (fetchedScore>0.35 && fetchedScore<=0.4) {
        compIndex=100;
    }

    return (
        <div>
            <progress id="progress" value={compIndex} min="0" max="100"></progress>
        </div>
    );
};

export default CompBar;