
export interface IEvent{
    id: number;
    title: string;
    heureD: Date;
    heureF: Date;
    locality: string;
    description: string;
}

export class Event implements IEvent{
    constructor(public id: number,
        public title: string,
        public heureD: Date,
        public heureF: Date,
        public locality: string,
        public description: string){

    }
}