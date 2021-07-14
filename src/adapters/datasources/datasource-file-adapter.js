export const DataSourceFileAdapter = function (
  url,
  cacheSize = 2000,
  DataSourceFile
) {
  /**
   * Datasource adapter for AWS Dynamo DB
   */
  class DataSourceFileOrder extends DataSourceFile {
    save(id, data) {
      super.save(id, data);
      console.log("DataSourceFileOrder datasource", id, data);
    }
  }

  return DataSourceFileOrder;
};
