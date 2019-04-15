import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api/api.service';
import {take} from 'rxjs/operators';
import {ApiModel} from '../api/api.model';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  performBackup() {
    this.apiService.apiData$
      .pipe(
        take(1)
      )
      .subscribe(data => this.createFile(data));
  }

  private createFile(data: ApiModel) {
    const json = JSON.stringify(data);
    const now = Date.now().toString();
    this.downloadFile(json, `huebackup-${now}.json`);
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
