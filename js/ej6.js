class Libros {
  constructor(ISBN, titulo, autor, numeroDePaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroDePaginas = numeroDePaginas;
  }

  getISBN() {
    return this.ISBN;
  }

  setISBN(ISBN) {
    this.ISBN = ISBN;
  }

  getTitulo() {
    return this.titulo;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  getAutor() {
    return this.autor;
  }

  setAutor(autor) {
    this.autor = autor;
  }

  getNumeroDePaginas() {
    return this.numeroDePaginas;
  }

  setNumeroDePaginas(numeroDePaginas) {
    this.numeroDePaginas = numeroDePaginas;
  }

  mostrarLibros() {
    console.log(
      `El libro es ${this.titulo}, su ISBN es ${this.ISBN}, del autor ${this.autor}, y tiene ${this.numeroDePaginas} páginas.`
    );
    document.write(
      `<p>El libro es ${this.titulo}, su ISBN es ${this.ISBN}, del autor ${this.autor}, y tiene ${this.numeroDePaginas} páginas.</p><br>`
    );
  }
}

const libro1 = new Libros(
  `123456789`,
  `Orgullo y prejuicio`,
  `Jane Austen`,
  300
);
const libro2 = new Libros(`987654321`, `Emma`, `Jane Austen`, 400);

libro1.mostrarLibros();
libro2.mostrarLibros();

if (libro1.getNumeroDePaginas() > libro2.getNumeroDePaginas()) {
  console.log(
    `${libro1.getTitulo()} tiene más páginas que ${libro2.getTitulo()}.`
  );
  document.write(
    `${libro1.getTitulo()} tiene más páginas que ${libro2.getTitulo()}.`
  );
} else if (libro1.getNumeroDePaginas() < libro2.getNumeroDePaginas()) {
  console.log(
    `${libro2.getTitulo()} tiene más páginas que ${libro1.getTitulo()}.`
  );
  document.write(
    `${libro2.getTitulo()} tiene más páginas que ${libro1.getTitulo()}.`
  );
} else {
  console.log(`Los dos libros tienen igual cantidad de páginas.`);
  document.write(`<p>Los dos libros tienen igual cantidad de páginas.</p>`);
}
