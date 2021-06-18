import React from 'react';



const Textoarea = () => {
    const [textArea, setTexrarea] = React.useState('');
    return <div>
        <textarea 
            value={textArea}
            onChange={({target}) => setTexrarea(target.value)}
            rows="6"
        />
        {textArea}
    </div>
}

export default Textoarea;