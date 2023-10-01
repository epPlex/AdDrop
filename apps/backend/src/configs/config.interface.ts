export interface Config {
    nest: NestConfig;
    cors: CorsConfig;
    security: SecurityConfig;
    throttle: ThrottleConfig;
    sphere: SphereConfig;
}
export interface SphereConfig {
    apiKey: string;
}
export interface NestConfig {
    port: number;
    api: string;
}

export interface CorsConfig {
    enabled: boolean;
}


export interface SecurityConfig {
    expiresIn: string;
    refreshIn: string;
    bcryptSaltOrRound: string | number;
}

export interface ThrottleConfig {
    ttl: number;
    limit: number;
    ignoreUserAgents: RegExp[];
}
