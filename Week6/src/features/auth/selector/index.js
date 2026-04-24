export const selectAuthUser = (state) => state.auth.user
export const selectAuthToken = (state) => state.auth.token
export const selectAuthStatus = (state) => state.auth.status
export const selectAuthError = (state) => state.auth.error
export const selectProfileLoading = (state) => state.auth.profileLoading
export const selectProfileError = (state) => state.auth.profileError
export const selectIsAuthenticated = (state) => Boolean(state.auth.token)
