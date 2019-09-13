import {Injectable} from '@angular/core';
import * as huejay from 'huejay';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HueService {

  constructor() {
  }

  getAllRules() {
    // const client = huejay.Client({
    //   host: '192.168.2.3',
    //   username: 'BDJo7SGB-6KsWHHAaXZidJNuboQejknxnh6ruEWe'
    // });
    //
    // return from(client.rules.getAll());
  }
}
