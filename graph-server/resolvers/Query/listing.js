const axios = require("axios");
const token = "14885191b5b20df85525168954fe982a";

async function listing(parent, args, context) {
  const listingUrl = `https://api.domain.com.au/sandbox/v1/listings/${listing}`;
  const result = await axios.get(listingUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const listing = result.data;
  return listing;
}

module.exports.listing = listing;
