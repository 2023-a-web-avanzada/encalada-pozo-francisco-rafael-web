import {Module} from "@nestjs/common";
import {EventosService} from "./evento.service";
import {EventosGateway} from "./eventos.gateway";

@Module({
    imports: [],
    controllers: [],
    providers: [EventosService, EventosGateway],
    exports: [EventosService],
})
export class EventosModule {}