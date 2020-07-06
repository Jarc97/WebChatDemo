import React from 'react';

// Lambda version
const PingButtonLamb = () => (
    <button>
        Hello Button
    </button>
);


// Function version
const PingButtonFunc = function() {
    function handleClick() {

    }
}

// Class version
class PingButtonClass extends React.Component {

}

export default PingButtonLamb;
export default PingButtonFunc;