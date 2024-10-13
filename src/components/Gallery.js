import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './Gallery.css';

const Gallery = ({ user, logoutUser }) => {
  const [artworks, setArtworks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('https://7r3rtiffni.execute-api.us-east-1.amazonaws.com/prod/viewArtwork');
        setArtworks(response.data);
      } catch (error) {
        console.error('Failed to load artworks:', error);
        alert('Failed to load artworks!');
      }
    };

    fetchArtworks();
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center my-4">
        <h2>Art Gallery</h2>
        <div>
          <a href="/upload" className="btn btn-primary me-2">Upload Artwork</a>
          <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="row">
        {artworks.map((artwork) => (
          <div key={artwork.ArtworkId} className="col-md-4 mb-3">
            <div className="card">
              <img src={artwork.ImageUrl} alt={artwork.Title} className="card-img-top artwork-img" />
              <div className="card-body">
                <h5 className="card-title">{artwork.Title}</h5>
                <p className="card-text">{artwork.Description}</p>
                <p className="card-text"><strong>Artist:</strong> {artwork.Artist}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
