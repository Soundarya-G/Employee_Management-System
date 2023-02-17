import React, { useState, useEffect } from 'react';
import MultiFileUpload from './MultiFileUpload';
import { getMultipleFiles } from '../data/api';

const FileUploadScreen = () => {
  const [multipleFiles, setMultipleFiles] = useState([]);

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMultipleFilesList();
  },[]);
  return (
    <>
      <div className='ml-3'>
        <h3 className='text-danger mb-3 mt-2 font-weight-bolder text-center'>
          Multiple File Upload Using MERN Stack{' '}
        </h3>
        <MultiFileUpload getMultiple={() => getMultipleFilesList()} />
      </div>
      <div className='col-6'>
        <h4 className='text-success font-weight-bold mb-3'>Displaying Files List</h4>
        {multipleFiles.map((element, index) => (
          <div key={element._id}>
            <h6 className='text-danger font-weight-bold'>{element.title}</h6>
            <div className='row'>
              {element.files.map((file, index) => (
                <div className='col-6' key={file._id}>
                  <div className='card mb-2 border-0 p-0'>
                    <img
                      src={`http://localhost:8080/${file.filePath}`}
                      height='200'
                      className='card-img-top img-responsive'
                      alt='img'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FileUploadScreen;
