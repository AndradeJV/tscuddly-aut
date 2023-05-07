/// <reference types="cypress"/>

interface author {
  id: number,
  idBook: number,
  firstName: string,
  lastName: string
}


export default new class Authors {
  getAllAuthors() {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('booksApi')}/Authors`,
      failOnStatusCode: false
    });
  }

  postNewAuthor(payload : author){
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('booksApi')}/Authors`,
      failOnStatusCode: false,
      body: payload
    });
  }

  updateAuthorInformation(payload : author, id : number){
    return cy.request({
      method: 'PUT',
      url: `${Cypress.env('booksApi')}/Authors/${id}`,
      failOnStatusCode: false,
      body: payload
    });
  }
}