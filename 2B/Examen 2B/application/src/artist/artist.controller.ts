import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {ArtistService} from "./artist.service";
import {ArtistCreateDto} from "./dto/artist-create.dto";
import {validate} from "class-validator";
import {ArtistUpdateDto} from "./dto/artist-update.dto";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";
import {ArtistEntity} from "./artist.entity";

@Controller('artist')
export class ArtistController {
    constructor(
        private readonly artistService: ArtistService
    ) {
    }

    @Get('/:id')
    @HttpCode(200)
    findOneById(@Param() params) {
        return this.artistService.findOneById(+params.id);
    }

    @Delete('/:id')
    @HttpCode(200)
    delete(@Param() params) {
        return this.artistService.delete(+params.id);
    }

    @Post('/')
    @HttpCode(200)
    async create(@Body() bodyParams) {
        const newRegister = new ArtistCreateDto();
        newRegister.name = bodyParams.name;
        newRegister.date_of_birth = bodyParams.date_of_birth;
        newRegister.is_group = bodyParams.is_group;
        newRegister.height = bodyParams.height;
        const errorsArray = await validate(newRegister);
        if (errorsArray.length > 0) {
            console.error({errorsArray});
            throw new BadRequestException({
                message: 'Wrong data send'
            });
        }
        return this.artistService.create(newRegister);
    }

    @Put('/:id')
    @HttpCode(200)
    async update(
        @Param() params,
        @Body() bodyParams
    ) {
        const newRegister = new ArtistUpdateDto();
        newRegister.name = bodyParams.name;
        newRegister.date_of_birth = bodyParams.date_of_birth;
        newRegister.is_group = bodyParams.is_group;
        newRegister.height = bodyParams.height;
        const errorsArray = await validate(newRegister);
        if (errorsArray.length > 0) {
            console.error({errorsArray});
            throw new BadRequestException({
                message: 'Wrong data send'
            });
        }
        return this.artistService.update(
            bodyParams, +params.id
        );
    }

    @Get('/')
    @HttpCode(200)
    find(@Query() queryParams){
        const consult: FindManyOptions<ArtistEntity> = {
            relations: ['songs'],
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultWhere = [] as FindOptionsWhere<ArtistEntity>[]
        if(queryParams.name){
            consultWhere.push({
                name: Like('%' + queryParams.name + '%'),
                date_of_birth: queryParams.date_of_birth ? queryParams.date_of_birth: undefined,
                is_group: queryParams.is_group ? queryParams.is_group: undefined,
                height: queryParams.height ? queryParams.height: undefined,
            })
        }
        if (consultWhere.length > 0){
            consult.where = consultWhere;
        }
        return this.artistService.find(consult);
    }
}