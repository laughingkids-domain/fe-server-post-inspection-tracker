const axios = require("axios");
const { map } = require("p-iteration");
const token = "14885191b5b20df85525168954fe982a";

// Get listing details
async function listings(parent, args, context) {
  const listings = await args.ids.map(async listing => {
    const listingUrl = `https://api.domain.com.au/sandbox/v1/listings/${listing}`;
    const result = await axios.get(listingUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return result.data;
  });
  return listings;
}

module.exports.listings = listings;
