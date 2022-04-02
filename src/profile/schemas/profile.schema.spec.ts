import { ProfileSchema } from './profile.schema';

describe('ProfileSchema', () => {
  it('should be defined', () => {
    expect(new ProfileSchema()).toBeDefined();
  });
});
