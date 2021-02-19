import  Connection from "../../src/db/connection"

describe('class EventRepo', ()=> {
    let instance: EventListenerOptions;
    const conn = new Connection();    
    let cnx;

    beforeEach(()=> {
        instance = new EventRepo();
     });


    beforeEach(async () => {
        cnx = await conn.create()
        
       await cnx.query('START TRANSACTION');
    });


    afterEach(async () => {
        await cnx.query('ROLLBACK');
    });


     it('should return event list', async()=> {
         const results = await instance.findAll();
         expect(results.length).toBe(3);
         expect(results[0].toBeInstaneOf(Event));
         expect (results[0].title).toBe('RDV médical');
     });

     it('should add a new event', async () => {
         await instance.add(new Event('title', new Date(2021, 2, 23, 17, 23, 55, 11), new Date(2021, 2, 23, 19, 23, 55, 11), 'locality', 'description'));
     })
})