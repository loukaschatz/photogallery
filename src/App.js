import React, { useState } from 'react';
import Title from './comps/Title';
import FormUpload from './comps/FormUpload';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

    return (
      <div className="App">
        <Title />
        <FormUpload />
        <ImageGrid setSelectedImage={setSelectedImage}/>
        { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
      </div>
    );
}

export default App;
