import {IsOptional, IsString} from "class-validator";

export class SongUpdateDto {
    @IsOptional()
    @IsString()
    song_name: string;

    @IsOptional()
    duration: number;

    @IsOptional()
    @IsString()
    genre: string;

    @IsOptional()
    artist_id: number;
}