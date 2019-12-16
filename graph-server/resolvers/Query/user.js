// Get listing details
const fs = require("fs");
const userDetails = fs.readFileSync(`${__dirname}/users.json`);
const mockUsers = JSON.parse(userDetails);

function user(parent, args, context) {
  try {
    const user = mockUsers.find(user => user.userId === args.id);
    const avatarFileName = `${user.firstName}${user.lastName}`.toLowerCase();
    const avatarUrl = `https://api.adorable.io/avatars/285/${avatarFileName}`;
    return { ...user, avatarUrl };
  } catch (err) {
    console.error(err);
  }
}

module.exports.user = user;
