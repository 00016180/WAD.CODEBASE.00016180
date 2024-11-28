namespace WAD.BACKEND._00016180.Repositories
{
    public interface IRepository<T>
    {
        // Get all data, 00016180
        Task<IEnumerable<T>> GetAll();
        // Get object by Id 00016180
        Task<T> GetById(int id);
        // Create new object 00016180
        Task Add(T entity);
        // Update object 00016180
        Task Update(T entity);
        // Delete object 00016180
        Task Delete(int id);
    }
}
