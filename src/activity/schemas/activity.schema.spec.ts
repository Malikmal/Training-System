import { ActivitySchema } from './activity.schema';

describe('ActivitySchema', () => {
  it('should be defined', () => {
    expect(new ActivitySchema()).toBeDefined();
  });
});
