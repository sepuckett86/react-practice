export const getVideos = state => state.videos;
export const getVideoImageUrls = state => {
  return getVideos(state)
    .map(id => `https://img.youtube.com/vi/${id}/0.jpg`);
};
