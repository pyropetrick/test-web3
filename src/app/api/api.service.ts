import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Params = Record<string, string | number | boolean>;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly #apiUrl = import.meta.env.NG_APP_API_URL;
  readonly #httpClient = inject(HttpClient);

  get<T>(endpoint: string, params: Params): Observable<T> {
    return this.#httpClient.get<T>(`${this.#apiUrl}/${endpoint}`, {
      params,
    });
  }
}
