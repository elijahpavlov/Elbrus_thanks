import { React } from 'react';

function LoadingPage() {
  return (
    <div className="loading-div">
      <div className="spinner-grow text-primary loading" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-primary loading" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-primary loading" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingPage;
