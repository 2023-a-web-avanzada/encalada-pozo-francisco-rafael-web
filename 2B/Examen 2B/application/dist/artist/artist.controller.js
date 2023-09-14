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
exports.ArtistController = void 0;
const common_1 = require("@nestjs/common");
const artist_service_1 = require("./artist.service");
const artist_create_dto_1 = require("./dto/artist-create.dto");
const class_validator_1 = require("class-validator");
const artist_update_dto_1 = require("./dto/artist-update.dto");
const typeorm_1 = require("typeorm");
let ArtistController = class ArtistController {
    constructor(artistService) {
        this.artistService = artistService;
    }
    findOneById(params) {
        return this.artistService.findOneById(+params.id);
    }
    delete(params) {
        return this.artistService.delete(+params.id);
    }
    async create(bodyParams) {
        const newRegister = new artist_create_dto_1.ArtistCreateDto();
        newRegister.name = bodyParams.name;
        newRegister.date_of_birth = bodyParams.date_of_birth;
        newRegister.is_group = bodyParams.is_group;
        newRegister.height = bodyParams.height;
        const errorsArray = await (0, class_validator_1.validate)(newRegister);
        if (errorsArray.length > 0) {
            console.error({ errorsArray });
            throw new common_1.BadRequestException({
                message: 'Wrong data send'
            });
        }
        return this.artistService.create(newRegister);
    }
    async update(params, bodyParams) {
        const newRegister = new artist_update_dto_1.ArtistUpdateDto();
        newRegister.name = bodyParams.name;
        newRegister.date_of_birth = bodyParams.date_of_birth;
        newRegister.is_group = bodyParams.is_group;
        newRegister.height = bodyParams.height;
        const errorsArray = await (0, class_validator_1.validate)(newRegister);
        if (errorsArray.length > 0) {
            console.error({ errorsArray });
            throw new common_1.BadRequestException({
                message: 'Wrong data send'
            });
        }
        return this.artistService.update(bodyParams, +params.id);
    }
    find(queryParams) {
        const consult = {
            relations: ['songs'],
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultWhere = [];
        if (queryParams.name) {
            consultWhere.push({
                name: (0, typeorm_1.Like)('%' + queryParams.name + '%'),
                date_of_birth: queryParams.date_of_birth ? queryParams.date_of_birth : undefined,
                is_group: queryParams.is_group ? queryParams.is_group : undefined,
                height: queryParams.height ? queryParams.height : undefined,
            });
        }
        if (consultWhere.length > 0) {
            consult.where = consultWhere;
        }
        return this.artistService.find(consult);
    }
};
exports.ArtistController = ArtistController;
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "find", null);
exports.ArtistController = ArtistController = __decorate([
    (0, common_1.Controller)('artist'),
    __metadata("design:paramtypes", [artist_service_1.ArtistService])
], ArtistController);
//# sourceMappingURL=artist.controller.js.map