import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArtistEntity} from "./artist/artist.entity";
import {SongEntity} from "./song/song.entity";
import {ArtistModule} from "./artist/artist.module";
import {SongModule} from "./song/song.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './bdd/bdd.sqlite',
        entities: [
            ArtistEntity, SongEntity
        ],
        synchronize: true,
        dropSchema: false,
      }),
      ArtistModule,
      SongModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
