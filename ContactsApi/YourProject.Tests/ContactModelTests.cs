using ContactsApi.Models;

public class ContactModelTests
{
    [Fact]
    public void ContactModel_CanBeInitialized()
    {
        // Arrange & Act
        var contact = new Contact
        {
            Id = 1,
            Name = "John Doe",
            Email = "john@example.com",
            Phone = "1234567890"
        };

        // Assert
        Assert.Equal(1, contact.Id);
        Assert.Equal("John Doe", contact.Name);
        Assert.Equal("john@example.com", contact.Email);
        Assert.Equal("1234567890", contact.Phone);
    }
}
