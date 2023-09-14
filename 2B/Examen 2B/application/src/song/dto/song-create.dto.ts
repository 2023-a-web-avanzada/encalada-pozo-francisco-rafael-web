import {IsNotEmpty, IsString} from "class-validator";

export class SongCreateDto {
    @IsNotEmpty()
    @IsString()
    song_name: string;

    @IsNotEmpty()
    duration: number;

    @IsNotEmpty()
    @IsString()
    genre: string;

    @IsNotEmpty()
    artist_id: number;
}