import { DataSource, DeepPartial, DeleteResult, FindManyOptions } from "typeorm";
import { SongEntity } from "./song.entity";
import { SongCreateDto } from "./dto/song-create.dto";
import { SongUpdateDto } from "./dto/song-update.dto";
export declare class SongService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    songRepository: import("typeorm").Repository<SongEntity>;
    find(options: FindManyOptions<SongEntity>): Promise<SongEntity[]>;
    findOneById(id: number): Promise<SongEntity>;
    create(data: SongCreateDto): Promise<(DeepPartial<SongEntity> & SongEntity)>;
    update(data: SongUpdateDto, id: number): Promise<(DeepPartial<SongEntity> & SongEntity)>;
    delete(id: number): Promise<DeleteResult>;
}
