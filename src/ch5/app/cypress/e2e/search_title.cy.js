// Our first test in Cypress. This test searches for the string 'quality' in the search box on the home page of https://www.packtpub.com/. Then, verifies the search result page by looking for the string 'Filter Results '
/// <reference types="cypress"/>
describe("Vist packt home page, ", () => {
  beforeEach(() => {
    cy.visit("https://www.packtpub.com");
  });
  it("search for a title and and click submit", () => {
    const search_string = "quality";
    const result_string = "Filter Results ";
    cy.get('#__BVID__324').and("have.value", "");
    cy.get('#__BVID__324').type(`${search_string}`, { delay: 500 });
    cy.get('.form-inline > .btn-parent > .btn > .fa').click();
    cy.get(".filter-results").contains(result_string);
    cy.get(".reset-button", { timeout: 10000 }).should("be.disabled");
    cy.get("#packt-navbar").and("have.class", "navbar-logout");
  });

  it("by intercepting the recent items GET call", () => {
    const staticResponse = {
      message: "Success",
      data: {
        content: {
          setting: "subs.homepage.recent.item",
          block: null,
          assetUrl:
            "//images.ctfassets.net/e8bc6jcp8co0/3JCpolUxQxGEFICKAL8oBZ/43533a104e2e4e5aed1f516cfcb602dc/bg.png",
          jsonValue: {
            title: "Jump back in",
            "btn-link":
              "https://www.packtpub.com/checkout/subscription/monthly-packt-subscription-vz22?freeTrial",
            subtitle:
              "Get all the quality content you\u2019ll ever need to stay ahead with a Packt subscription \u2013 access over 7,500 online books and videos on everything in tech",
            "btn-title": "Start FREE trial",
            "upsell-title": "Advance your knowledge in tech",
          },
        },
        products: [],
        rows: 0,
      },
    };
    cy.intercept(
      "GET",
      "https://subscription.packtpub.com/api/subscription/getrecentitems?offset=0&limit=4",
      staticResponse
    );
  });
});
