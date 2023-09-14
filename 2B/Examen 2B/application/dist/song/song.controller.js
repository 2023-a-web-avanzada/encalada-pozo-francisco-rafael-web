"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const song_service_1 = require("./song.service");
const song_create_dto_1 = require("./dto/song-create.dto");
const class_validator_1 = require("class-validator");
const song_update_dto_1 = require("./dto/song-update.dto");
let SongController = class SongController {
    constructor(songService) {
        this.songService = songService;
    }
    findOneById(params) {
        return this.songService.findOneById(+params.id);
    }
    delete(params) {
        return this.songService.delete(+params.id);
    }
    async create(bodyParams) {
        const newRegister = new song_create_dto_1.SongCreateDto();
        newRegister.song_name = bodyParams.song_name;
        newRegister.duration = bodyParams.duration;
        newRegister.genre = bodyParams.genre;
        newRegister.artist_id = bodyParams.artist_id;
        const errorsArray = await (0, class_validator_1.validate)(newRegister);
        if (errorsArray.length > 0) {
            console.error({ errorsArray });
            throw new common_1.BadRequestException({
                message: 'Wrong data send'
            });
        }
        return this.songService.create(newRegister);
    }
    async update(params, bodyParams) {
        const newRegister = new song_update_dto_1.SongUpdateDto();
        newRegister.song_name = bodyParams.song_name;
        newRegister.duration = bodyParams.duration;
        newRegister.genre = bodyParams.genre;
        newRegister.artist_id = bodyParams.artist_id;
        const errorsArray = await (0, class_validator_1.validate)(newRegister);
        if (errorsArray.length > 0) {
            console.error({ errorsArray });
            throw new common_1.BadRequestException({
                message: 'Wrong data send'
            });
        }
        return this.songService.update(bodyParams, +params.id);
    }
    find(queryParams) {
        const consult = {
            relations: ['artist'],
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultWhere = [];
        if (queryParams.name) {
            consultWhere.push({
                song_name: (0, typeorm_1.Like)('%' + queryParams.name + '%'),
                duration: queryParams.duration ? queryParams.duration : undefined,
                genre: queryParams.genre ? queryParams.genre : undefined,
            });
        }
        if (consultWhere.length > 0) {
            consult.where = consultWhere;
        }
        return this.songService.find(consult);
    }
};
exports.SongController = SongController;
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SongController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SongController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SongController.prototype, "find", null);
exports.SongController = SongController = __decorate([
    (0, common_1.Controller)('song'),
    __metadata("design:paramtypes", [song_service_1.SongService])
], SongController);
//# sourceMappingURL=song.controller.js.map