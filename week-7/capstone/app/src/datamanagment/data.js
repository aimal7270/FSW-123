const {v4: uuidv4} = require('uuid');

let fullInventory = [
{
    Title:"Khoobsurat",
    Author: "Akshay Kumar",
    CheckedOut:false,
    SeriesOrder:1,
    _id:uuidv4()
},{
    Title:"Dilwale",
    Author: "Sharukh Khan",
    CheckedOut:false,
    SeriesOrder:2,
    _id:uuidv4()
},{
    Title:"Junoon Tere pyar Ka",
    Author: "Turkish",
    CheckedOut:false,
    SeriesOrder:3,
    _id:uuidv4()
},{
    Title:"Emergency Love",
    Author: "Turkish",
    CheckedOut:false,
    _id:uuidv4()
},{
    Title:"Diriliş: Ertuğrul",
    Author: "Metin Günay",
    CheckedOut: true,
    _id:uuidv4()
},{
    Title:"Mera Sultan",
    Author: "Muhteşem Yüzyıl",
    CheckedOut: true,
    SeriesOrder:2,
    _id:uuidv4()
},{
    Title:"hercai",
    Author: "Cem Karci",
    CheckedOut:true,
    SeriesOrder:3,
    _id:uuidv4()
},{
    Title:"Barbaros",
    Author: "Dogan Umit",
    CheckedOut:false,
    SeriesOrder:4,
    _id:uuidv4()
},{
    Title:"The Protector",
    Author: "Umut Aral",
    CheckedOut:false,
    _id:uuidv4()
},{
    Title:"Love 101 (Turkish: Aşk 101)",
    Author: "Ahmet Katiksiz",
    CheckedOut:true,
    _id:uuidv4()
},{
    Title:"OTTOMAN",
    Author: "Emre Şahin",
    CheckedOut:false,
    SeriesOrder:2,
    _id:uuidv4()
},{
    Title:"Muhteşem Yüzyıl: Kösem ",
    Author: "Çağatay Tosun, Mert Baykal, Yağız Alp, Akaydın Zeynep, Günay Tan, Deniz Koloş",
    CheckedOut:false,
    SeriesOrder:1,
    _id:uuidv4()
},{
    Title:"Wounded Love",
    Author: " Burak Arliel, Durul Taylan, Yagmur Taylan. With Halit Ergenç, Bergüzar Korel, Onur Saylak, Sebnem Hassanisoughi.",
    CheckedOut: true,
    SeriesOrder:2,
    _id:uuidv4()
},{
    Title:"Filinta",
    Author: "Hüsamettin Efendi, and the padişah's",
    CheckedOut:false,
    _id:uuidv4()
}]

module.exports = fullInventory