using MongoDB.Driver;

namespace C_Sheet.Server.Database
{
    public class DbContext
    {
        private readonly IMongoDatabase _database;

        public DbContext(string connectionString, string databaseName)
        {
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase(databaseName);
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return _database.GetCollection<T>(collectionName);
        }
    }
}
