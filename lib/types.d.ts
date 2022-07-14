export declare type RssAppCredentials = {
    apiKey: string;
    apiSecret: string;
};
export declare type RssAppOptions = {
    host?: string;
    port?: string;
    protocol?: string;
};
export declare type CreateFeedOptions = {
    url: string;
};
export declare type RssAppApi = {
    host: string;
    protocol: string;
    basePath: string;
};
export declare type RssAppListOptions = {
    offset?: number;
    limit?: number;
};
export declare enum ERssAppRequestMethod {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare type MakeRequestOptions = {
    path: string;
    method: ERssAppRequestMethod;
    body?: any;
    params?: any;
};
export declare type RssAppFeedFeedItem = {
    title: string;
    url: string;
    description: string;
    author: string;
    publishedAt: string;
    thumbnail: {
        url: string;
        mimeType: string;
    };
};
export declare type RssAppFeed = {
    id: string;
    title: string;
    description: string;
    source: {
        url: string;
    };
    icon: {
        url: string;
        mimeType: string;
    };
    items: RssAppFeedFeedItem[];
};
export declare type RssAppFeedList = {
    total: number;
    offset: number;
    limit: number;
    data: RssAppFeed[];
};
export declare type RssAppErrorResponse = {
    message: string;
    statusCode: number;
    errors: {
        title: string;
        code: string;
    }[];
};
export declare type RssAppError = Error & {
    response?: RssAppErrorResponse;
    status?: number;
};
