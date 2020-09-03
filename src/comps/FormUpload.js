import React, { useState } from 'react';
import ProgressBar from './progressBar';

const FormUpload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const uploadHandler = (e) => {
        let selection = e.target.files[0];
        
        if (selection && types.includes(selection.type)) {
            setFile(selection);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return(
        <form>
            <label>
                <input type="file" onChange={uploadHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    );
}

export default FormUpload;