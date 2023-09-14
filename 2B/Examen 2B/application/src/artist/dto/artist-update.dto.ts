import {IsOptional, IsString} from "class-validator";

export class ArtistUpdateDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    date_of_birth: string;

    @IsOptional()
    is_group: boolean;

    @IsOptional()
    height: number;
}