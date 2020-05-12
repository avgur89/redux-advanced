
import { profileActions } from '../actions';

describe('profile actions:', () => {
    test('clearProfile', () => {
        expect(profileActions.clearProfile()).toMatchSnapshot();
    });

    test('fillProfile', () => {
        expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot();
    });

    test('updateAvatar', () => {
        expect(profileActions.updateAvatar(__.url)).toMatchSnapshot();
    });

    test('updateAvatarAsync', () => {
        expect(profileActions.updateAvatarAsync(__.newAvatar))
            .toMatchSnapshot();
    });

    test('updateNameAsync', () => {
        expect(profileActions.updateNameAsync(__.newName)).toMatchSnapshot();
    });

    test('updatePasswordAsync', () => {
        expect(profileActions.updatePasswordAsync(__.newPassword))
            .toMatchSnapshot();
    });
});
