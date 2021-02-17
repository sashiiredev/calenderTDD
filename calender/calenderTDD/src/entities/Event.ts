export interface IEvent {
    id: number;
    name: string;

}

class Event implements IEvent {

    public id: number;
    public name: string;


    constructor(nameOfUser: string | IEvent, id?: number) {
        if (typeof nameOfUser === 'string') {
            this.name = nameOfUser;
            this.id = id || -1;
        } else {
            this.name = nameOfUser.name;
            this.id = nameOfUser.id;
        }
    }
}

export default Event;
