export interface Info {
     followers: number;
     following: number;
     photo: string;
}
export interface Weather {
     temperature: number;
     wind: number;
     icon: 'rain'|'cloud'|'sun';
}

export interface Hotel {
    id?: string;
    title: string;
    address: string;
    description: string;
    phone: string;
    photo: string[];
    weather: Weather;
    info: Info;
    stars: number;
}
