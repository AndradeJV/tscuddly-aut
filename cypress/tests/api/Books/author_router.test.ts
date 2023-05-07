import Authors from "../../../support/requests/Books/Authors";


describe('Author Router validation requests api', () => {
  it('Make request success on general authors information', () => {
    Authors.getAllAuthors().then(res => {
      expect(res.status).to.eq(200);
    });
  });

  it('Make request success on create a new author', () => {
    const author = {
      id: 1,
      idBook: 18,
      firstName: 'John',
      lastName: 'Virgil'
    }


    Authors.postNewAuthor(author).then(res => {
      expect(res.status).to.eq(200);
    });
  });
});