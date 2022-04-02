import { ProfileRepository } from './profile.repository';

describe('ProfileRepository', () => {
  it('should be defined', () => {
    expect(new ProfileRepository()).toBeDefined();
  });
});
