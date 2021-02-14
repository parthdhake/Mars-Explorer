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
  sol: number = 1000;
  currentRover: string;
  currentCamera: string;

  showFullImage(p){
    window.open(p['img_src']);
  }

  async getPhotos(){
    
    if(this.currentRover && this.currentCamera){
      let promise = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.currentRover.toLowerCase()}/photos?sol=${this.sol}&camera=${this.currentCamera.toLowerCase()}&api_key=uCQ0ibUlWh83iBkeRvlM8oBdZ7AkCa7JHQjlxBzo`);
      let data = await promise.json();
      this.photos = data['photos'];
    }
  }
}
