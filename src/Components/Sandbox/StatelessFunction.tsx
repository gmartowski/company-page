// Stateless component, jsx spread attributes, destructuring arguments, conditional rendering

import React from 'react';

interface StatelessFunctionInterface {
    id: string,
    classType: object
}

const StatelessFunction: React.SFC<StatelessFunctionInterface> = ({classType, id, children}) => {
    return (
        id === 'test-id' ?
        <div {...{className: `${classType.className}`, id, children}} /> :
        <div>{id}</div>

    );
};

export default StatelessFunction;
