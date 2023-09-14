import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {SongEntity} from "../song/song.entity";

@Entity('artist')
export class ArtistEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'artist_name',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    name: string;

    @Column({
        name: 'date_of_birth',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    date_of_birth: string;

    @Column({
        name: 'is_group',
        type: 'boolean',
        nullable: false
    })
    is_group: boolean;

    @Column({
        name: 'height',
        type: 'decimal',
        scale: 2,
        nullable: false
    })
    height: number;

    @OneToMany(()=>SongEntity, (songInstance) => songInstance.artist)
    songs: SongEntity[];
}