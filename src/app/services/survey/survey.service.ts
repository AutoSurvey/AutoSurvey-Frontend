import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ISurvey } from '../../models/isurvey-survey';

interface SurveyServiceInterface {
  getSurveys(): Observable<Map<string, ISurvey>>;
}

@Injectable({
  providedIn: 'root',
})
export class SurveyService implements SurveyServiceInterface {
  endpoint: string = environment.apiUrl + '/surveys';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
    withCredentials: true,
  };

  private formOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  getSurveys(): Observable<Map<string, ISurvey>> {
    return this.http
      .get<any>(this.endpoint + '/', this.httpOptions)
      .pipe(map((response) => response as Map<string, ISurvey>));
  }

  replacerFunc = () => {
    const visited = new WeakSet();
    return (key: any, value: object | null) => {
      if (typeof value === "object" && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };


  addSurvey(survey: ISurvey):Observable<ISurvey> {
    return this.http.post<ISurvey>(this.endpoint, JSON.stringify(survey, this.replacerFunc()), this.httpOptions);
  }

  upload(formData: FormData): Observable<ISurvey> {
    this.formOptions.headers.delete('Content-Type');
    return this.http.post<ISurvey>(this.endpoint, formData, this.formOptions);
  }

  getSurveyById(surveyId: string): Observable<ISurvey> {
    return this.http.get<ISurvey>(this.endpoint + '/' + surveyId);
  }

  getSurveyByTitle(surveys: String): Observable<ISurvey> {
    return this.http.get<ISurvey>(this.endpoint + '/title/' + surveys);
  }

  getSurveysString(): Observable<Map<string, string>> {
    return this.http
      .get<any>(this.endpoint + '/', this.httpOptions)
      .pipe(map((response) => response as Map<string, string>));
  }

  deleteSurvey(surveyId: string) {
    return this.http.delete(this.endpoint + '/' + surveyId, this.httpOptions);
  }
 
  editSurvey(oldSurvey: ISurvey, survey: ISurvey):Observable<ISurvey> {
    console.log(survey);
    survey.uuid = oldSurvey.uuid;
    survey.createdOn = oldSurvey.createdOn;
    survey.version = oldSurvey.version;
    return this.http
      .put<any>(this.endpoint + '/' + oldSurvey.uuid, JSON.stringify(survey), this.httpOptions);
  }


}

@Injectable({
  providedIn: 'root',
})
export class MockSurveyService implements SurveyServiceInterface {
  constructor() { }
  getSurveys(): Observable<Map<string, ISurvey>> {
    let survey0: ISurvey = {
      uuid: '000',
      createdOn: 'now',
      title: 'title0',
      description: '',
      confirmation: '',
      version: '',
      questions: [],
    };
    let survey1: ISurvey = {
      uuid: '001',
      createdOn: 'now',
      title: 'title1',
      description: '',
      confirmation: '',
      version: '',
      questions: [],
    };
    let response: Map<string, ISurvey> = new Map();
    response.set(survey0.uuid, survey0);
    response.set(survey1.uuid, survey1);
    return of(response);
  }
}
