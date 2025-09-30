export interface AppConfig {
    pg: {
        host: string;
        port: number;
        database: string;
        user: string;
        password: string;
    };
    redis: {
        host: string;
        port: number;
    };
}
export declare function loadConfig(): AppConfig;
