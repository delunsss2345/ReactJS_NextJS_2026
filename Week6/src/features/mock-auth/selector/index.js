export const selectMockUser = (state) => state.mockAuth.user
export const selectIsMockLoggedIn = (state) => Boolean(state.mockAuth.user)
