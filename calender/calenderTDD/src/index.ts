import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import {connectionOptions} from './util/connection-options';
import { createConnection } from "typeorm";



const port = Number(process.env.PORT || 3000);

createConnection(connectionOptions).then(() => {

    app.listen(port, async () => {
        console.log('listening on port ' + port);
        logger.info('Express server started on port: ' + port);
    })

});
