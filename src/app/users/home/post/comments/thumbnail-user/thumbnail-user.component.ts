import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail-user',
  templateUrl: './thumbnail-user.component.html',
  styleUrls: ['./thumbnail-user.component.scss']
})
export class ThumbnailUserComponent implements OnInit {

  @Input('photo') url="https://www.yourfirstpatient.com/assets/default-user-avatar-thumbnail@2x-ad6390912469759cda3106088905fa5bfbadc41532fbaa28237209b1aa976fc9.png";
  constructor() { }

  ngOnInit() {
  }

}
