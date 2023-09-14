import { ArtistEntity } from "../artist/artist.entity";
export declare class SongEntity {
    id: number;
    song_name: string;
    duration: number;
    genre: string;
    artist: ArtistEntity;
}
