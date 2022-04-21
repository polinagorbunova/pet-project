import { injectable } from 'injector';

@injectable()
export class FirstService {
    constructor() {
        console.log('init first service');
    }
}