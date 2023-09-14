import { ArtistService } from "./artist.service";
import { ArtistEntity } from "./artist.entity";
export declare class ArtistController {
    private readonly artistService;
    constructor(artistService: ArtistService);
    findOneById(params: any): Promise<ArtistEntity>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
    create(bodyParams: any): Promise<import("typeorm").DeepPartial<ArtistEntity> & ArtistEntity>;
    update(params: any, bodyParams: any): Promise<import("typeorm").DeepPartial<ArtistEntity> & ArtistEntity>;
    find(queryParams: any): Promise<ArtistEntity[]>;
}
