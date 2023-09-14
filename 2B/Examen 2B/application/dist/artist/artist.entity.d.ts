import { SongEntity } from "../song/song.entity";
export declare class ArtistEntity {
    id: number;
    name: string;
    date_of_birth: string;
    is_group: boolean;
    height: number;
    songs: SongEntity[];
}
