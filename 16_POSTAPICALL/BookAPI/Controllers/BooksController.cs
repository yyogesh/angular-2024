using BookAPI.DTO;
using BookAPI.Entity;
using Microsoft.AspNetCore.Mvc;

namespace BookAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private static List<Book> _books = new List<Book>();
        private static int _nextId = 1;
        [HttpPost]
        public ActionResult<Book> CreateBook([FromBody] CreateBookDto bookDto)
        {
            var book = new Book
            {
                Id = _nextId++,
                Title = bookDto.Title,
                Author = bookDto.Author,
                Year = bookDto.Year
            };

            _books.Add(book);

            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
        }

        [HttpGet("{id}")]
        public ActionResult<Book> GetBook(int id)
        {
            var book = _books.Find(b => b.Id == id);
            if (book == null)
            {
                return NotFound();
            }
            return book;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetAllBooks()
        {
            return _books;
        }
    }
}
