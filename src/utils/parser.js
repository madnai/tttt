
export const parseToEpisode = (anchorEpisode) => {
  const { itunes, enclosure, ...rest } = anchorEpisode;

  const result = {
    ...rest,
    duration: itunes ? parseInt(itunes.duration) : 0,
    cover: itunes ? itunes.image : '',
    episode: itunes ? itunes.episode : '',
    url: enclosure ? enclosure.url : '',
  };

  return result;
};