class EventRepo implements EventListenerOptions {
    findAll() {
    }
}

describe('class EventRepo', ()=> {
    let instance: EventListenerOptions;

    beforeEach(()=> {
        instance = new EventRepo();
     });

     it('should return event list', async()=> {
         const results = await instance.findAll();
         expect(results.length).toBe(3);
         expect(results[0].toBeInstaneOf(Event));
         expect (results[0].title).toBe('RDV chez Dr Dupin le');
     });
})
