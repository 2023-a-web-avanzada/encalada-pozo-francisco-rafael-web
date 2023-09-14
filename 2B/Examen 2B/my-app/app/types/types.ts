export interface Artist {
    id: number;
    name: string;
    date_of_birth: string;
    is_group: boolean;
    height: number;
}

export interface Song {
    id: number;
    name: string;
    duration: number;
    genre: string;
    artist_id: number;
}