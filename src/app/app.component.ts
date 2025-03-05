import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { DataService } from './Services/data.service'; // importing data from DataServices
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  students:any[] = [];
  weather:any[] = [];
  temperature:any = "";
  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.getStudentData().subscribe(
      (data)=>{
        this.students = data.students;
      }
    );

    this.dataService.getWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather;
        this.temperature = (data.main.temp - 273.155).toFixed(2);
      }
    )
  }
}
