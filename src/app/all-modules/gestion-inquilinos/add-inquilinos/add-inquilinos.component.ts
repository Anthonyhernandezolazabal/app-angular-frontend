import { Component, OnInit } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { Inquilinos } from 'src/app/model/inquilinos';
import { InquilinosService } from 'src/app/services/inquilinos.service';
import * as alertifyjs from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inquilinos',
  templateUrl: './add-inquilinos.component.html',
  styleUrls: ['./add-inquilinos.component.css']
})
export class AddInquilinosComponent implements OnInit {

  constructor(private InquilinosService:InquilinosService, private router:Router) { }
  videoRef:any;
  btncamera= true;
  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;

  inquilinos : Inquilinos = new Inquilinos();

  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  ngOnInit(): void {
    this.showCamera();
  }

  addInquilinos(){
  
    this.InquilinosService.addInquilino(this.inquilinos).subscribe(hero => {
        alertifyjs.success('¡Se registró un nuevo inquilino!');
        this.router.navigate(['inquilinos/registros-inquilinos'])
    // },error => alertifyjs.error('¡Error!, '+error.message ) )
    },error => alertifyjs.error('¡Error al registrar!') )
  }

  //CAMARA
  showCamera(){
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public handleImage(webcamImage: WebcamImage): void {
    console.info('imagen recibida de la cámara web', webcamImage);
    this.webcamImage = webcamImage;
  }
  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


}
