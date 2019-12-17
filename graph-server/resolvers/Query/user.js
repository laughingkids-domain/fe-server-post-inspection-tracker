// Get listing details
const fs = require("fs");
const userDetails = fs.readFileSync(`${__dirname}/users.json`);
const mockUsers = JSON.parse(userDetails);
const axios = require("axios");
const { map } = require("p-iteration");
const token = "14885191b5b20df85525168954fe982a";

async function user(parent, args, context) {
  try {
    const user = mockUsers.find(user => user.userId === args.id);
    const avatarFileName = `${user.firstName}${user.lastName}`.toLowerCase();
    const avatarUrl = `https://api.adorable.io/avatars/285/${avatarFileName}`;
    let ownedProperties = [];
    if (user.ownedProperties) {
      ownedProperties = await user.ownedProperties.map(async listing => {
        const listingUrl = `https://api.domain.com.au/sandbox/v1/listings/${listing}`;
        const result = await axios.get(listingUrl, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return result.data;
      });
    }
    return { ...user, avatarUrl, ownedProperties };
  } catch (err) {
    console.error(err);
  }
}

module.exports.user = user;
