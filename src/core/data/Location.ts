import ApiService from "@/core/services/ApiService";

class Location {
  public static $counries = null;

  public static async getCountries() {
    if (!Location.$counries) {
      await ApiService.get("site/General/countries").then((res) => {
        Location.$counries = res.data;
      });
      // console.log("get from serveer")
    }
    return Location.$counries;
  }
}

export default Location;
