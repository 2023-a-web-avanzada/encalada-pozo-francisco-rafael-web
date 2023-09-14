import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";
import {SongService} from "./song.service";
import {SongCreateDto} from "./dto/song-create.dto";
import {validate} from "class-validator";
import {SongUpdateDto} from "./dto/song-update.dto";
import {SongEntity} from "./song.entity";


@Controller('song')
export class SongController {
    constructor(
        private readonly songService: SongService
    ) {
    }

    @Get('/:id')
    @HttpCode(200)
    findOneById(@Param() params) {
        return this.songService.findOneById(+params.id);
    }

    @Delete('/:id')
    @HttpCode(200)
    delete(@Param() params) {
        return this.songService.delete(+params.id);
    }

    @Post('/')
    @HttpCode(200)
    async create(@Body() bodyParams) {
        const newRegister = new SongCreateDto();
        newRegister.song_name = bodyParams.song_name;
        newRegister.duration = bodyParams.duration;
        newRegister.genre = bodyParams.genre;
        newRegister.artist_id = bodyParams.artist_id;
        const errorsArray = await validate(newRegister);
        if (errorsArray.length > 0) {
            console.error({errorsArray});
            throw new BadRequestException({
                message: 'Wrong data send'
            });
        }
        return this.songService.create(newRegister);
    }

    @Put('/:id')
    @HttpCode(200)
    async update(
        @Param() params,
        @Body() bodyParams
    ) {
        const newRegister = new SongUpdateDto();
        newRegister.song_name = bodyParams.song_name;
        newRegister.duration = bodyParams.duration;
        newRegister.genre = bodyParams.genre;
        newRegister.artist_id = bodyParams.artist_id;
        const errorsArray = await validate(newRegister);
        if (errorsArray.length > 0) {
            console.error({errorsArray});
            throw new BadRequestException({
                message: 'Wrong data send'
            });
        }
        return this.songService.update(
            bodyParams, +params.id
        );
    }

    @Get('/')
    @HttpCode(200)
    find(@Query() queryParams){
        const consult: FindManyOptions<SongEntity> = {
            relations: ['artist'],
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultWhere = [] as FindOptionsWhere<SongEntity>[]
        if(queryParams.name){
            consultWhere.push({
                song_name: Like('%' + queryParams.name + '%'),
                duration: queryParams.duration ? queryParams.duration: undefined,
                genre: queryParams.genre ? queryParams.genre: undefined,
            })
        }
        if (consultWhere.length > 0){
            consult.where = consultWhere;
        }
        return this.songService.find(consult);
    }
}