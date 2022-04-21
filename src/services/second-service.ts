import {injectable} from "injector";
import {FirstService} from "./first-service";

@injectable()
export class SecondService {
    constructor(private readonly firstService: FirstService) {
        console.log('init second service');
    }
}