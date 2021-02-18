
export class Event {
    constructor(
        public title: string,
        public heureD: Date,
        public heureF: Date,
        public locality: string,
        public description: string,
        public id?: number){}
}