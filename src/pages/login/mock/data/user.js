import Mock from 'mockjs';

// 自定义mock数据
const Users = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    name: '小明拉阿拉',
    avatar: 'https://avatars2.githubusercontent.com/u/9530963?v=3&s=60'
  }, {
    id: 2,
    username: 'admin',
    password: '666666',
    name: '小花呵呵哒',
    avatar: 'https://avatars1.githubusercontent.com/u/9377192?v=3&s=60'
  }
]

for (let i = 0; i < 10; i++) {
  Users.push(
    Mock.mock({
      'id': Mock.Random.increment() + 2,
      'username': Mock.Random.word(3, 5),
      'password': /\d{6}/,
      'name': Mock.Random.cname(),
      'avatar': Mock.Random.image('30*30')
    })
  )
}
console.log(Users);
export { Users }