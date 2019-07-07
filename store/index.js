export const state = () => ({
  blogs: [],
  blog: {}
})

export const mutations = {
  SET_BLOGS(state, data) {
    state.blogs = data
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getAllBlogs')
  },
  async getAllBlogs({ state, commit }) {
    // The require.context is from Webpack
    const context = await require.context('~/content/blogs/', false, /\.md$/)

    const searchBlogs = await context.keys().map(key => ({
      ...context(key),
      _path: `/blogs/${key.replace('.md', '').replace('./', '')}`
    }))
    commit('SET_BLOGS', searchBlogs)
  }
}
