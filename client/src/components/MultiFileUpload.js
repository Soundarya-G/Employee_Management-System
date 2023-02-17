import React, { useState } from 'react';
import { multipleFileUpload } from '../data/api';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MultiFileUpload = (props) => {
  const [multipleFiles, setMultipleFiles] = useState('');
  const [progressBar, setProgressBar] = useState(0);
  const onChange = (e) => {
    setMultipleFiles(e.target.files);
    setProgressBar(0);
  };

  const ProgressBarOptions = {
    onUploadProgress: (ProgressEvent) => {
      const { loaded, total } = ProgressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgressBar(percentage);
    },
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files', multipleFiles[i]);
    }

    await multipleFileUpload(formData, ProgressBarOptions);
    props.getMultiple();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='row mt-3'>
          <div className='col-6'>
            <div className='form-group'>
              <h4 className='text-success font-weight-bold mb-3'>Select Files</h4>
              <input
                type='file'
                className='form-control'
                multiple
                onChange={onChange}
              />
            </div>
            <div className='row'>
              <div className='col-10'>
                <input
                  type='submit'
                  value='Upload'
                  className='btn btn-primary'
                />
              </div>
              <div className='col-2'>
              <CircularProgressbar
                value={progressBar}
                text={`${progressBar}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(255, 136, 136, ${progressBar / 100}`,
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              />
            </div>
            </div>
            
          </div>
        </div>
      </form>
    </>
  );
};

export default MultiFileUpload;
