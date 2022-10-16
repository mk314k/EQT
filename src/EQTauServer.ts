import assert from 'assert';
import { Server } from 'http';
import express, { Application } from 'express';
import HttpStatus from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import fs from 'fs';
import Browserify from 'browserify';

export class WebServer {

    private readonly app: Application;
    private server: Server|undefined;

    public constructor(
        private readonly requestedPort: number
    ) {
        this.app = express();
        this.setServerFunctionality();
    }

    private setServerFunctionality(): void {
        this.app.use((request, response, next) => {
            response.set('Access-Control-Allow-Origin', '*');
            next();
        });


        // this.app.get('/table', function(request,response){
        //     const data:FormData = new FormData();
        //     const content = updateTutor(data);
        //     response.status(HttpStatus.OK).type('text').send(content);
            
        // });

        this.app.get('/getData', function(request, response) {
            const content = fs.readFileSync("db/data.kesh", { encoding: 'utf-8' });
            response
                .status(HttpStatus.OK)
                .type('text')
                .send(content);
        });
        // this.app.get('/', function(request, response) {
        //     const content = fs.readFileSync("EQT.html", { encoding: 'utf-8' });
        //     response.end(content);
        // });
        // this.app.get('/dist/client-bundle.js', function(req, res, next) {
        //     res.contentType('application/javascript');
        //     new Browserify().add('dist/src/web-client.js').bundle().pipe(res, { end: true });
        //   });

    }

    public start(): Promise<void> {
        return new Promise(resolve => {
            this.server = this.app.listen(this.requestedPort, () => {
                console.log('server now listening at', this.port);
                resolve();
            });
        });
    }

    public get port(): number {
        const address = this.server?.address() ?? 'not connected';
        if (typeof(address) === 'string') {
            throw new Error('server is not listening at a port');
        }
        return address.port;
    }


    public stop(): void {
        this.server?.close();
        console.log('server stopped');
    }
}


async function main(): Promise<void> {
    const port = 8790;
    const server: WebServer = new WebServer(port);
    await server.start();
}

if (require.main === module) {
    void main();
}