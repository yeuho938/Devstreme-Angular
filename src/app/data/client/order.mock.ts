import * as faker from 'faker';
import { random } from 'lodash';
import { Flower } from 'src/app/modules/shared/models';

export function randomOrders(count: number): Flower[] {
    return Array(count).fill({}).map((item: Flower, index) => {
        return new Flower({
            id: index + 1,
            name: faker.name.findName(),
            description: faker.random.words(6),
            image: faker.image.nature(),
            price: faker.random.number(),
            remainingStock: faker.random.number(100),
        });
    });
}
export function randomOrderById(param: number): Flower {
    return new Flower({
        id: param,
        name: faker.name.findName(),
        description: faker.random.words(6),
        image: faker.image.nature(),
        price: faker.random.number(),
        remainingStock: faker.random.number(100),
    });
}

