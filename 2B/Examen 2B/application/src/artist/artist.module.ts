import {Module} from "@nestjs/common";
import {ArtistService} from "./artist.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArtistEntity} from "./artist.entity";
import {ArtistController} from "./artist.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [ArtistEntity],
            'default'
        ),
        ArtistModule,
    ],
    controllers: [ArtistController],
    providers: [ArtistService],
    exports: [ArtistService]
})
export class ArtistModule {}