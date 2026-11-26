$(document).ready(function(){

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // put json data into bookshelf
  $.getJSON("/documents/books.json")
  .done(function (data) {
    shuffle(data.books);
    $.each(data.books, function (_, book) {
      const card = $("<div>").addClass("book");

      const container = $("<div>").addClass("book-container").appendTo(card);

      $("<p>").addClass("title").html("<span class='label'>title ~  </span>" + book.title).appendTo(container);
      $("<p>").addClass("author").html("<span class='label'>by ~  </span>" + book.author).appendTo(container);

      $("<img>")
        .attr("src", "/images/covers/" + book.image)
        .attr("alt", "Book cover for " + book.title + " by " + book.author)
        .appendTo(card);

      $("#bookshelf").append(card);
    });

    //bookshelf grid
    var grid = $('#bookshelf');
    grid.imagesLoaded(function () {
      grid.masonry({
        itemSelector: '.book',
        percentPosition: true, 
        columnWidth: '.book',
        gutter: 20
      });
    });
  })
  .fail(function (jqXHR, textStatus, error) {
    console.error("Could not load books.json:", textStatus, error);
  });

});
