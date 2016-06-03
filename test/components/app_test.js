import { renderComponent, expect } from '../test_helper';
import App from '../../app/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it ('shows an h1', () => {
    expect(component.find('h1')).to.exist;
  });
});
