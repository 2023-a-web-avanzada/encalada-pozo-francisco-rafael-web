import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SongEntity} from "./song.entity";
import {SongController} from "./song.controller";
import {SongService} from "./song.service";
import {ArtistModule} from "../artist/artist.module";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [SongEntity],
            'default'
        ),
        ArtistModule,
    ],
    controllers: [SongController],
    providers: [SongService],
    exports: [SongService]
})
export class SongModule {}