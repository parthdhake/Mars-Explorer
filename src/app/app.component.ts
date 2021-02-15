import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarsExplorer';

  cameras: Object = {
    'Curiosity': ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
    'Opportunity': ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
    'Spirit': ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']
  };
 
  photos: Object[];
  data_avail: Boolean;
  sol: number = 999;
  currentRover: string;
  currentCamera: string;
  state: Boolean;


  showFullImage(p){
    window.open(p['img_src']);
  }

  async getPhotos(){

    this.state = true;
    this.data_avail = false;

    if(this.currentRover && this.currentCamera){
      let promise = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.currentRover.toLowerCase()}/photos?sol=${this.sol}&camera=${this.currentCamera.toLowerCase()}&api_key=uCQ0ibUlWh83iBkeRvlM8oBdZ7AkCa7JHQjlxBzo`);
      let data = await promise.json();
      this.state = false;

      this.photos = data['photos'];
      if(this.photos.length == 0){
        this.data_avail = true;
      }
      console.log(data);
    }
  }
}
