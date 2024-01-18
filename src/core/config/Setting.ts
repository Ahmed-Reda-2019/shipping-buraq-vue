import axios from "axios";

class Setting {
  public static $setting = {};

  public static async loadFile() {
    if (Object.keys(Setting.$setting).length == 0) {
      await axios.get('/settings.json').then((res) => {
        Setting.$setting = res.data
      });
    }
    Promise.resolve();
  }
  public static getTitle(key) {
    // await this.loadFile()
    return this.$setting[key].trans.title[localStorage.getItem("lang")];
  }

  public static  getVal(key) {
    return this.$setting[key].value;
  }
  public static  getColor(total) {
//        console.log(this.$setting)
    let color = "#eee";
    this.$setting['color-settings'].options.map((item)=>{
      if (total > item.start && total <= item.end){
        color = item.color;
      }
    });
    return color ;
  }


}

export default Setting;
