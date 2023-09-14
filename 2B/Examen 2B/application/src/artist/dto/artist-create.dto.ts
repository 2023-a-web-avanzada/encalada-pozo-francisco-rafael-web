import {IsNotEmpty, IsString} from "class-validator";

export class ArtistCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    date_of_birth: string;

    @IsNotEmpty()
    is_group: boolean;

    @IsNotEmpty()
    height: number;
}