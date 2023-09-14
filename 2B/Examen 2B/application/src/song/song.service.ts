import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeepPartial, DeleteResult, FindManyOptions} from "typeorm";
import {SongEntity} from "./song.entity";
import {SongCreateDto} from "./dto/song-create.dto";
import {SongUpdateDto} from "./dto/song-update.dto";


@Injectable()
export class SongService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }

    public songRepository = this.datasource.getRepository(SongEntity);

    find(options: FindManyOptions<SongEntity>): Promise<SongEntity[]> {
        return this.songRepository.find(options);
    }

    findOneById(id: number): Promise<SongEntity> {
        return this.songRepository.findOne({
            where: {
                id: id
            }
        });
    }

    create(data: SongCreateDto): Promise<(DeepPartial<SongEntity> & SongEntity)> {
        return this.songRepository.save(data);
    }

    update(data: SongUpdateDto, id: number): Promise<(DeepPartial<SongEntity> & SongEntity)> {
        return this.songRepository.save({
            ...data, id
        })
    }

    delete(id: number): Promise<DeleteResult> {
        return this.songRepository.delete(id);
    }
}