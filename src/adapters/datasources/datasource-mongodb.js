"use strict";

/**
 * Datasource adapter factory.
 * @param {string} url database url
 * @param {number} [cacheSize] number of models to keep in cache
 * @param {*} DataSource base class that enables caching
 * @returns {import("./datasource").default}
 */
export const DataSourceAdapterMongoDb = function (
  url,
  cacheSize,
  DataSourceMongoDb
) {
  /**
   * MongoDB adapter extends in-memory datasource to support caching.
   * The cache is always updated first, which allows the system to run
   * even when the database is offline.
   */
  class DataSourceMongoDbCustom extends DataSourceMongoDb {
    constructor(datasource, factory, name) {
      super(datasource, factory, name);
      this.url = url;
      this.cacheSize = cacheSize;
    }
  }

  return DataSourceMongoDbCustom;
};
