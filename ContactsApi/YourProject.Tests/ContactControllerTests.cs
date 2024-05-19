using Moq;
using ContactsApi.Models;

public class ContactControllerTests
{
    private readonly Mock<IContactService> _mockContactService;
    private readonly ContactController _controller;

    public ContactControllerTests()
    {
        _mockContactService = new Mock<IContactService>();
        _controller = new ContactController(_mockContactService.Object);
    }

    [Fact]
    public void GetContacts_ReturnsOkResult_WithListOfContacts()
    {
        // Arrange
        var contacts = new List<Contact>
        {
            new Contact { Id = 1, Name = "John Doe", Email = "john@example.com", Phone = "1234567890" },
            new Contact { Id = 2, Name = "Jane Smith", Email = "jane@example.com", Phone = "0987654321" }
        };
        _mockContactService.Setup(service => service.GetAllContacts()).Returns(contacts);

        // Act
        var result = _controller.GetContacts();
    }
}

