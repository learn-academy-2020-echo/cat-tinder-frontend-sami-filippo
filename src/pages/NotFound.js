import React, { Component } from 'react';

// importing the image and  referencing as a JSX
import notfoundcat from '../assets/notfoundcat.jpg'




class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>Not Found Page</h1>
                <img src ={ notfoundcat} />

                <img src ='/assets/notfoundcat.jpg' />
            </div>
        );
    }
}

export default NotFound;