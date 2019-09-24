import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer dn6QNlNFMi-E70rxmgTcd1BLje_pbQmO91hc1qgqMq0EjTVAPGvly0B6Anrw-fA7E1E6QeTxmSC6IuqO55KowONJy1WHyfd4eAVrdMUOejuDmDIT6p-9PERY1nhbXXYx"
  }
});
