import  Connection from "../../src/db/connection"

describe('class EventRepo', ()=> {
    let instance: EventListenerOptions;
    const conn = new Connection();    

    beforeEach(()=> {
        instance = new EventRepo();
     });


    beforeEach(async () => {
        await conn.create.query('START TRANSACTION');
    });


    afterEach(async () => {
        await conn.create.query('ROLLBACK');
    });


     it('should return event list', async()=> {
         const results = await instance.findAll();
         expect(results.length).toBe(3);
         expect(results[0].toBeInstaneOf(Event));
         expect (results[0].title).toBe('RDV médical');
     });

     it('should add a new event', async () => {
         await instance.add(new Event('title', ,  , 'locality', 'description'))
     })
})