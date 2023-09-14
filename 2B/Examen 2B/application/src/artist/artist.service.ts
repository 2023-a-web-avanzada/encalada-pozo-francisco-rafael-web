import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeepPartial, DeleteResult, FindManyOptions} from "typeorm";
import {ArtistEntity} from "./artist.entity";
import {ArtistCreateDto} from "./dto/artist-create.dto";
import {ArtistUpdateDto} from "./dto/artist-update.dto";

@Injectable()
export class ArtistService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }

    public artistRepository = this.datasource.getRepository(ArtistEntity);

    find(options: FindManyOptions<ArtistEntity>): Promise<ArtistEntity[]> {
        return this.artistRepository.find(options);
    }

    findOneById(id: number): Promise<ArtistEntity> {
        return this.artistRepository.findOne({
            where: {
                id: id
            }
        });
    }

    create(data: ArtistCreateDto): Promise<(DeepPartial<ArtistEntity> & ArtistEntity)> {
        return this.artistRepository.save(data);
    }

    update(data: ArtistUpdateDto, id: number): Promise<(DeepPartial<ArtistEntity> & ArtistEntity)> {
        return this.artistRepository.save({
            ...data, id
        })
    }

    delete(id: number): Promise<DeleteResult> {
        return this.artistRepository.delete(id);
    }
}