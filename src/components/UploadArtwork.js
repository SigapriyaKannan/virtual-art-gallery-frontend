// components/UploadArtwork.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadArtwork = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState('');
  const [imageData, setImageData] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://7r3rtiffni.execute-api.us-east-1.amazonaws.com/prod/uploadArtwork', {
        title,
        description,
        artist,
        imageData,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Upload failed!');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result.split(',')[1]);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Upload Artwork</h2>
      <form onSubmit={handleUpload}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Title:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Description:</label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Artist:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Image:</label>
          <div className="col-sm-10">
            <input
              type="file"
              className="form-control"
              onChange={handleImageChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default UploadArtwork;
