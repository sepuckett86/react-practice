import React from 'react';
import PhotoAlbum from './PhotoAlbum';

export default function App() {
  const photos = [
    'https://cdn.pixabay.com/photo/2018/08/28/21/01/panama-3638527_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/07/31/22/40/sloth-407042_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/04/20/13/25/sloth-731297_1280.jpg'
  ];

  return <PhotoAlbum title="Sloths" photos={photos}/>;
}
