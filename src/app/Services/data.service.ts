import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { // DataService class

  //constructor to build the htttpClient request
  constructor(private httpClient:HttpClient) { }

    //Getting data from student from API request
  getStudentData(): Observable<any>{
    // Making a GET request to the student data API and returning the response as an observable
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/1336347674273832960');
  }

  //Getting weather data from API
  getWeatherData(): Observable<any>{
    //returning the requested data from the WeatherAPI
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }
}//the end of the code
