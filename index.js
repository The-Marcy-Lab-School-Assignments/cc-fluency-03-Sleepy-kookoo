const users = [
  {
    name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  {
    name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  {
    name: 'Anne',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  {
    name: 'Steph',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  {
    name: 'Carmen',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]

//Q1
const logAllNames = (users) => {
  users.forEach((user) => console.log(user.name))
}

// logAllNames(users)

//Q2
const getAllTags = (users) => {
  users.forEach((user) => console.log(`Hi my name is ${user.name}, and my tag is ${user.username}!`))
}

// getAllTags(users)

//Q3
const sumAllFollowers = (users) => {
  const map = users.map((user) => user.followers);
  return map.reduce((acc, curr) => acc + curr)

  // Reuben method
  // return users.reduce((total, currUser) => total + currUser.followers, 0)
  // return users.reduce((total, {followers}) => total + followers, 0)

}

// console.log(sumAllFollowers(users))


//Q4
const searchUsername = (users, searchTerm) => {
  // return users.find(({username}) => username === searchTerm)


  // return users.filter((user) => {
  //   if (user.username === searchTerm) {
  //     return users
  //   }
  // })//[0]-> this returns it without it being in an array


  return users.filter(({ username }) => username === searchTerm)
}

console.log(searchUsername(users, "@passaic_papi"))


//Q5
const longWinded = (users) => {

}

// console.log(longWinded(users))

//Q6
const follower = (users) => {

}
// console.log(follower(users))
