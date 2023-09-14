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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistEntity = void 0;
const typeorm_1 = require("typeorm");
const song_entity_1 = require("../song/song.entity");
let ArtistEntity = class ArtistEntity {
};
exports.ArtistEntity = ArtistEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ArtistEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'artist_name',
        type: 'varchar',
        length: 20,
        nullable: false
    }),
    __metadata("design:type", String)
], ArtistEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'date_of_birth',
        type: 'varchar',
        length: 20,
        nullable: false
    }),
    __metadata("design:type", String)
], ArtistEntity.prototype, "date_of_birth", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_group',
        type: 'boolean',
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ArtistEntity.prototype, "is_group", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'height',
        type: 'decimal',
        scale: 2,
        nullable: false
    }),
    __metadata("design:type", Number)
], ArtistEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => song_entity_1.SongEntity, (songInstance) => songInstance.artist),
    __metadata("design:type", Array)
], ArtistEntity.prototype, "songs", void 0);
exports.ArtistEntity = ArtistEntity = __decorate([
    (0, typeorm_1.Entity)('artist')
], ArtistEntity);
//# sourceMappingURL=artist.entity.js.map