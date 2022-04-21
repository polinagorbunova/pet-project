import {Injector} from "injector";
import {SecondService} from "./services/second-service";

const injector = new Injector();

injector.resolve(SecondService);