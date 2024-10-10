
import { useRouter } from 'vue-router';

export class AppHttpFetch {
  private token: string | null;

  constructor() {
    this.token = process.client ? localStorage.getItem('ocirenegotnemacro') : null;
  }

  private async handleRequest<T = any>(method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE', url: string, data?: any): Promise<T> {
    try {
      const headers: HeadersInit = this.token
        ? { Authorization: this.token }
        : {};

      const response = await $fetch<T>(url, {
        method,
        body: JSON.stringify(data),
        headers,
        baseURL: 'https://localhost:7187/',
      });

      return response;
    } catch (error: any) {
      if (error.response && (error.response.status === 404 || error.response.status === 401)) {
        alert(error.response._data.detail);
        const router = useRouter();
        router.push(Rotas.Visitante.Login);
      }

      if (error.response && error.response.status === 400) {
        alert(error.response._data.Detail);
      }

      throw error;
    }
  }

  public get<T = any>(url: string): Promise<T> {
    return this.handleRequest('GET', url);
  }

  public post<T = any>(url: string, data?: any): Promise<T> {
    return this.handleRequest('POST', url, data);
  }

  public patch<T = any>(url: string, data?: any): Promise<T> {
    return this.handleRequest('PATCH', url, data);
  }

  public put<T = any>(url: string, data?: any): Promise<T> {
    return this.handleRequest('PUT', url, data);
  }

  public delete<T = any>(url: string): Promise<void> {
    return this.handleRequest('DELETE', url);
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      http: new AppHttpFetch(),
    },
  };
});
