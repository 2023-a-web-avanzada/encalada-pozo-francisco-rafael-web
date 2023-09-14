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
exports.SongEntity = void 0;
const typeorm_1 = require("typeorm");
const artist_entity_1 = require("../artist/artist.entity");
let SongEntity = class SongEntity {
};
exports.SongEntity = SongEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SongEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'song_name',
        type: 'varchar',
        length: 20,
        nullable: false
    }),
    __metadata("design:type", String)
], SongEntity.prototype, "song_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'duration',
        type: 'decimal',
        scale: 2,
        nullable: false
    }),
    __metadata("design:type", Number)
], SongEntity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'genre',
        type: 'varchar',
        length: '20',
        nullable: false
    }),
    __metadata("design:type", String)
], SongEntity.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artist_entity_1.ArtistEntity, (artistInstance) => artistInstance.songs),
    __metadata("design:type", artist_entity_1.ArtistEntity)
], SongEntity.prototype, "artist", void 0);
exports.SongEntity = SongEntity = __decorate([
    (0, typeorm_1.Entity)('song')
], SongEntity);
//# sourceMappingURL=song.entity.js.map