// Get listing details
const fs = require("fs");
const userDetails = fs.readFileSync(`${__dirname}/users.json`);
const mockUsers = JSON.parse(userDetails);

function users(parent, args, context) {
  try {
    const users = args.ids.map(id => {
      const user = mockUsers.find(user => user.userId === id);
      const avatarFileName = `${user.firstName}${user.lastName}`.toLowerCase();
      const avatarUrl = `https://api.adorable.io/avatars/285/${avatarFileName}`;
      return { ...user, avatarUrl };
    });
    return users;
  } catch (err) {
    console.error(err);
  }
}

module.exports.users = users;
