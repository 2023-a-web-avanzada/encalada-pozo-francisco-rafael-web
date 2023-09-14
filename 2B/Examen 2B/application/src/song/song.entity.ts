import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ArtistEntity} from "../artist/artist.entity";

@Entity('song')
export class SongEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'song_name',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    song_name: string;

    @Column({
        name: 'duration',
        type: 'decimal',
        scale: 2,
        nullable: false
    })
    duration: number;

    @Column({
        name: 'genre',
        type: 'varchar',
        length: '20',
        nullable: false
    })
    genre: string;

    @ManyToOne(() => ArtistEntity, (artistInstance) => artistInstance.songs)
    artist: ArtistEntity
}