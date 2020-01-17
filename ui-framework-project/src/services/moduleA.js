import Http from './http'

// 获取测试数据
export const getTestData = params => {
  return Http.get('/repos/octokit/octokit.rb', params)
}
