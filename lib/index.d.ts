import { CreateFeedOptions, RssAppFeed, RssAppCredentials, RssAppListOptions, RssAppOptions, RssAppFeedList } from './types';
declare class RssApp {
    private _credentials;
    private _api;
    /**
     *
     * @param credentials - API key and API secret
     * @param options
     *
     * @see {@link https://rss.app/docs/api/authentication | Authentication Documentation}
     */
    constructor(credentials: RssAppCredentials, options?: RssAppOptions);
    feed: {
        /**
         * Returns a list of feeds in the account.
         *
         * @param options - Limit and offset options
         * @returns Promise<Feed[]>
         *
         * @see {@link https://rss.app/docs/api/feed/list | List Feed Documentation}
         */
        list: (options?: RssAppListOptions) => Promise<RssAppFeedList>;
        /**
         * A feed is returned. Otherwise, an error is returned.
         *
         * @param feedId - Feed id
         * @returns Promise<Feed>
         *
         * @see {@link https://rss.app/docs/api/feed/get | Get Feed Documentation}
         */
        get: (feedId: string) => Promise<RssAppFeed>;
        /**
         * A feed with posts is returned. Otherwise, an error is returned.
         *
         * @param createFeedOptions - A valid website URL is required
         * @returns Promise<Feed>
         *
         * @example https://bbc.com
         *
         * @see {@link https://rss.app/docs/api/feed/create | Create Feed Documentation}
         */
        create: (createFeedOptions: CreateFeedOptions) => Promise<RssAppFeed>;
        /**
         * A feed with posts is returned. Otherwise, an error is returned.
         *
         * @param feedId - Feed id
         * @returns Promise<{ id: string; deleted: boolean }>
         *
         * @see {@link https://rss.app/docs/api/feed/delete | Delete Feed Documentation}
         */
        delete: (feedId: string) => Promise<{
            id: string;
            deleted: boolean;
        }>;
    };
    private _getHeaders;
    private _getUrl;
    private _makeRequest;
}
export { RssAppCredentials, RssAppOptions, RssAppListOptions, CreateFeedOptions, RssAppFeed, RssAppFeedList };
export default RssApp;
