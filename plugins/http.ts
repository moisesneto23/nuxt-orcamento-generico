export class AppHttpFetch {
  private token: string | null;

  constructor() {
    const { $token } = useNuxtApp();
    const tokenc = $token.getToken();
    this.token = tokenc || null;
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
        navigateTo(Rotas.Visitante.Login);
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
      httpUseFetch: new  AppHttpUseFetch(),
    },
  };
});


/*-----------------   useFetch --------------------------------------*/
export class AppHttpUseFetch {
  private token: string | null;

  constructor() {
    const { $token } = useNuxtApp();
    const tokenc = $token.getToken();
    this.token = tokenc || null;
  }



  private async handleRequestSSR(verbo: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE', url: string, corpo?: any): Promise<any> {  
    const headers: HeadersInit = this.token
      ? { Authorization: this.token }
      : {};
    const now = new Date();
 
    try {
          const { data } = await useFetch(() =>  'https://localhost:7187/'+ url,{
          key: now.getMinutes().toString(),
          method:verbo,
          body: JSON.stringify(corpo),
          headers
          });
          return data.value;
        }
    catch (error: any) {
            if (error.response && (error.response.status === 404 || error.response.status === 401)) {
            alert(error.response._data.detail);
            navigateTo(Rotas.Visitante.Login);
            }
            if (error.response && error.response.status === 400) {
            alert(error.response._data.Detail);
            }
          throw error;
        }
  }

  public async get<T = any>(url: string): Promise<T | null> {
    return await this.handleRequestSSR('GET', url);
  }

  public post<T = any>(url: string, data?: any): Promise<T | null> {
    return this.handleRequestSSR('POST', url, data);
  }

  public patch<T = any>(url: string, data?: any): Promise<T | null> {
    return this.handleRequestSSR('PATCH', url, data);
  }

  public put<T = any>(url: string, data?: any): Promise<T | null> {
    return this.handleRequestSSR('PUT', url, data);
  }

  public delete<T = any>(url: string): Promise<T | null> {
    return this.handleRequestSSR('DELETE', url);
  }

}


