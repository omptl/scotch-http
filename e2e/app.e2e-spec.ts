import { ScotchRoutingThreePage } from './app.po';

describe('scotch-routing-three App', function() {
  let page: ScotchRoutingThreePage;

  beforeEach(() => {
    page = new ScotchRoutingThreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
