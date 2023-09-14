import { DataSource, DeepPartial, DeleteResult, FindManyOptions } from "typeorm";
import { ArtistEntity } from "./artist.entity";
import { ArtistCreateDto } from "./dto/artist-create.dto";
import { ArtistUpdateDto } from "./dto/artist-update.dto";
export declare class ArtistService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    artistRepository: import("typeorm").Repository<ArtistEntity>;
    find(options: FindManyOptions<ArtistEntity>): Promise<ArtistEntity[]>;
    findOneById(id: number): Promise<ArtistEntity>;
    create(data: ArtistCreateDto): Promise<(DeepPartial<ArtistEntity> & ArtistEntity)>;
    update(data: ArtistUpdateDto, id: number): Promise<(DeepPartial<ArtistEntity> & ArtistEntity)>;
    delete(id: number): Promise<DeleteResult>;
}
