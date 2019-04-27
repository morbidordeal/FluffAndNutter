import { Relation, Sex } from './enums';

export interface Fighter {
    src: string;
}

export interface Monkey {
    name: string;
    age: number;
    sex: Sex;
    relation: Relation;
}