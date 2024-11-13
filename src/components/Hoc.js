import React from 'react'

const Hoc = (WrappedComponent) => {
    return (props) => {
        console.log('Props:', props);
        return <WrappedComponent {...props} />;
    };
}

export default Hoc