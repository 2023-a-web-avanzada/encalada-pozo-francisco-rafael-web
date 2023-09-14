import { SongService } from "./song.service";
import { SongEntity } from "./song.entity";
export declare class SongController {
    private readonly songService;
    constructor(songService: SongService);
    findOneById(params: any): Promise<SongEntity>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
    create(bodyParams: any): Promise<import("typeorm").DeepPartial<SongEntity> & SongEntity>;
    update(params: any, bodyParams: any): Promise<import("typeorm").DeepPartial<SongEntity> & SongEntity>;
    find(queryParams: any): Promise<SongEntity[]>;
}
