import {Component} from '@angular/core';
import {BackupService} from './backup.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent {

  constructor(private backupService: BackupService) { }

  public performBackup() {
    this.backupService.performBackup();
  }
}
