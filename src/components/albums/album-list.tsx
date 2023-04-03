import { isEmpty } from "lodash";
import { Album, AlbumsProps } from "./album";

export const AlbumsList = ({ list }: { list: any }) => {
  if (isEmpty(list)) return null;

  return list.map(
    (album: AlbumsProps & Record<string, string>, index: number) => (
      <Album
        key={index}
        artistName={album.artistName}
        collectionId={album.collectionId}
        collectionName={album.collectionName}
        primaryGenreName={album.primaryGenreName}
        releaseDate={album.releaseDate}
        artworkUrl100={album.artworkUrl100}
        collectionViewUrl={album.collectionViewUrl}
      />
    )
  );
};
