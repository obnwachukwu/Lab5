import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { DataService } from './Services/data.service'; // importing data from DataServices
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule], //an array of the imports 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  //atributes
  students:any[] = [];
  weather:any[] = [];
  temperature:any = "";
  //setting up the service
  constructor(private dataService: DataService){

  }

  //requesting data from API for students
  ngOnInit(): void {
    //getting students
    this.dataService.getStudentData().subscribe(
      (data)=>{
        this.students = data.students;
      }
    );

    this.dataService.getWeatherData().subscribe(
      (data)=>{
        //getting weather and temperature
        this.weather = data.weather;
        this.temperature = (data.main.temp - 273.155).toFixed(2); //toFixed function to round temperature to 2 decimal places
      }
    )
  }
}
