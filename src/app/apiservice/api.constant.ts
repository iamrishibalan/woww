export const CONST = Object.freeze({
  SESSION_NAME: 'wow',
  VERSION: '',
  // API: 'http://localhost:3004/',
  // ApiUrlss: 'http://localhost:3004',
  // APIBase: 'http://localhost:3004/',
  API: 'https://webinarserver.s2ftech.in/',
  APIBase: 'https://webinarserver.s2ftech.in/',
  ApiUrlss:'https://webinarserver.s2ftech.in',
  APPLink: 'http://localhost:4200/#/'
});

export class CommonDates {
  public static makeDate(strDate) {
    var makeDate = new Date();
    let hh = makeDate.getHours();
    let hm = makeDate.getMinutes();
    let hs = makeDate.getSeconds();
    let getTime = hh + ':' + hm + ':' + hs;
    let allDate = new Date(strDate);
    let day = allDate.getDate();
    let mon = allDate.getMonth() + 1;
    let year = allDate.getFullYear();
    let FullDaty = year + '-' + mon + '-' + day;
    return FullDaty;
    //return FullDaty +' '+ getTime;
  }

  public static GetFromdate(strDate) {
    var Fdata = new Date;
    // let hh = "23";
    // let hm = "50";
    // let hs = "00";
    // let getTime= hh + ':' + hm + ':' + hs;
    var x = 3; 
    Fdata.setDate(Fdata.getDate() - x);
    let Tday = Fdata.getDate();
    let Tmon = Fdata.getMonth() + 1;
    let Tyear = Fdata.getFullYear();
    let FullDaty = Tyear + '-' + Tmon + '-' + Tday;
    return FullDaty;
    //return FullDaty +' '+ getTime;
  }

}
