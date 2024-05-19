using ContactsApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ContactsApi.Data
{
    public class ContactsContext: DbContext
    {
        public ContactsContext(DbContextOptions<ContactsContext> options):base(options) 
        {

        }


        public DbSet<Contact> Contacts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasData(
                new Contact { Id = 1, Name = "Mohd", Email = "mohd@example.com", Phone = "730-082-2509" },
                new Contact { Id = 2, Name = "sharik", Email = "sharik@example.com", Phone = "730-082-2509" }
                // Add more default contacts
            );
        }

    }
}
