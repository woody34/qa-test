import { selectors } from '../util';
import { authRoutes } from '../../src/routes';
import mockPodcastData from '../../src/mock/data/podcast';
import { headers } from '../../src/podcast/components/util';

// GETTING STARTED:
// install pre-reqs in README of project root
// start project using `npm run start`
// start interactive cypress runner using `npm run cypress`
// if you have any problems getting the project started email me -> mwoodruff at bisonok dot com

// NOTES:
// - cypress docs - https://docs.cypress.io/api/api/table-of-contents.html
// - use data-cy attribute 'selectors' to select elements (imported above)
// - restructure the spec however you see fit

describe('Podcast', () => {
  it('should load app', () => {
    cy.visit('/');
  });

  it('should navigate to podcast page', () => {
    cy.get(selectors.links.podcasts).last().click();
    cy.url().should('include', authRoutes.podcast);
  });

  describe('Table', () => {
    it('should display the podcast table', () => {
      // write test
    });

    it('should display play buttons for each row', () => {
      // write test
    });

    it('should play only selected podcast when clicking its play button', () => {
      // write test
    });

    it('should pause selected podcast when its pause button is click', () => {
      // write test
    });

    it('should cycle rows per page, properly displaying number, title, and description', () => {
      // 'headers' determine what columns are displayed in the table
      // 'mockPodcastData' is being used to fill the rows of the table
      // write test
    });
  });

  describe('Player', () => {
    // extra credit: test player component however you like
  });
});
