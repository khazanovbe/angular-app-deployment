import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { ApiService } from '../api.service';
import { IEmotion } from '../interfaces';

@Component({
  selector: 'app-metrics-form',
  templateUrl: './metrics-form.component.html',
  styleUrls: ['./metrics-form.component.less']
})
export class MetricsFormComponent implements OnInit {
  capturedPhoto : any = null;
  photoTaken = false;
  showLoader = false;

  takePhoto = new EventEmitter();
  columns = ['name','value'];
  familyStates = [
    "В браке",
    "Не замужем/не женат",
    "Разведен/разведена",
    "Состою в гражданском браке"
  ];

  sex = [
    "Мужчина",
    "Женщина"
  ];

  clouds = [
    "Ясно",
    "Облачно",
    "Пасмурно",
    "Дождь",
    "Снег",
    "Град"
  ];

  flats = [
    "Своя квартира",
    "Свой дом",
    "снимаю дом/квартиру"
  ];

  workTypes=[
    "Оффлайн",
    "Онлфйн",
    "Гибридный"
  ];

  initState:Record<any,any> = {
    age : 0,
    holiday: false,
    sex: null,
    income: 0,
    familyState: null,
    changeWork: false,
    countOfChildren: 0,
    cityOrTown: false,
    weather: {
      clouds: null,
      temperature: 0,
    },
    flat: null,
    chronicDeseases: false,
    termOfWork:0,
    workingHours: 0,
    workOvertime: 0,
    workType: null,
    hobby: false,
    sportToday:false,
  }
  emotions:any;
  emotionNames: string[] = [];
  isResultRecieved: boolean = false;

  constructor(private api:ApiService) { }
  form = new FormGroup({
    age : new FormControl(0),
    holiday: new FormControl(false),
    sex: new FormControl(null),
    income: new FormControl(0),
    familyState: new FormControl(null),
    changeWork: new FormControl(false),
    countOfChildren: new FormControl(0),
    cityOrTown: new FormControl(false),
    weather: new FormGroup({
      clouds: new FormControl(null),
      temperature: new FormControl(0),
    }),
    flat: new FormControl(null),
    chronicDeseases: new FormControl(false),
    termOfWork: new FormControl(0),
    workingHours: new FormControl(0),
    workOvertime: new FormControl(0),
    workType: new FormControl(null),
    hobby: new FormControl(false),
    sportToday: new FormControl(false),
    photo: new FormControl(null),
  });
  ngOnInit(): void {
  }

  onSubmit(){
    this.showLoader = true;
    this.api.getEmotions(this.form.value).subscribe(emotionsResult=>{
      this.emotions = Object.keys(emotionsResult.emotions).map(name=>{
        return {name:name,value:emotionsResult.emotions[name]}});
      this.emotionNames = Object.keys(emotionsResult.emotions);
      this.isResultRecieved =true;
      this.showLoader = false;
    });
  }

  onReset(){
    Object.keys(this.form.controls).forEach(control =>{
      this.form.get(control)?.setValue(this.initState[control]);
    });
  }

  onImageCapture(base64Photo:WebcamImage){
    this.photoTaken = true;
    this.form.get('photo')?.setValue(base64Photo.imageAsBase64);
    this.capturedPhoto = base64Photo.imageAsDataUrl;
  }

}
