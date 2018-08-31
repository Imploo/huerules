import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private http: HttpClient) { }

  performBackup() {
    this.backupType('groups');
    this.backupType('lights');
    this.backupType('sensors');
    this.backupType('rules');
  }

  private backupType(type: string) {
    this.http.get<any>(`http://192.168.178.22/api/BDJo7SGB-6KsWHHAaXZidJNuboQejknxnh6ruEWe/${type}`).subscribe(response => {
      window.localStorage[`huerules_${type}`] = JSON.stringify(response);
      this.downloadFile(response, `${type}.json`);

    });
  }

  private downloadFile(data: any, filename: string) {
    if (!data) {
      console.error('No data');
      return;
    }

    if (!filename) {
      filename = 'download.json';
    }

    if (typeof data === 'object') {
      data = JSON.stringify(data, undefined, 2);
    }

    const blob = new Blob([data], {type: 'text/json'});

    // FOR IE:
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      const e = document.createEvent('MouseEvents');
      const a = document.createElement('a');

      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false);
      a.dispatchEvent(e);
    }
  }
}
