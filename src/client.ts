import { Server } from 'http';
import express, { Application } from 'express';
import assert from 'assert';
import fetch from 'node-fetch';
// import { Database } from './Database';
import { Parser } from './parser';


export class Client {

    public database:Array<Array<string>> = [];//Database = new Database();

    private async fetchFromServer():Promise<Array<Array<string>>>{
        const response = await fetch('http://localhost:8790/getData');
        const data = await response.text();
        return Parser(data);
    }
 
    public async start():Promise<void>{
        this.database = await this.fetchFromServer();
    }

    public constructor() {
 
    }
    public fetchMatchedTutee(sliderVal:string):string{
        let result =[]
        for (let entry in this.database){
            if (entry[0] == 'tutee'){
                if (parseInt(entry[6]??'')>parseInt(sliderVal)){
                    result.push(entry);
                }
            }
        }
        return '';

    }


}

