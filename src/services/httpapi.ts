import { Configuration, DefaultApi, DbDatasApi, DbUsersApi } from '../lib/httpclient';

class HttpApi {
    public default: DefaultApi;
    public dbDatas: DbDatasApi;
    public dbUsers: DbUsersApi;

    private configuration: Configuration;

    public set url(value: string) {
        this.configuration.basePath = value;
    }
    public get url(): string {
        return this.configuration.basePath;
    }

    constructor(url: string) {
        this.configuration = new Configuration({ basePath: url })
        this.default = new DefaultApi(this.configuration);
        this.dbDatas = new DbDatasApi(this.configuration);
        this.dbUsers = new DbUsersApi(this.configuration);
    }
}

console.log('create httpapi');
export const httpApi = new HttpApi('http://localhost:3000');

