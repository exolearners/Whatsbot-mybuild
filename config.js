// Add values if you are not using env vars
const fs = require('fs');

module.exports = {
    session: JSON.parse(process.env.SESSION || fs.readFileSync(__dirname + '/session.json', { encoding: 'utf8' })), //if not using env vars create a file named session.json
    pmpermit_enabled: process.env.PMPERMIT_ENABLED || "true",
    mongodb_url: process.env.MONGODB_URL || process.env.MONGO_URL || "mongodb+srv://aaditay:aaditaycluster0.m301i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    pmpermit_mutetime: process.env.PMPERMIT_MUTETIME || "1800",
    yt_data_api_key: process.env.YT_DATA_API_KEY || "AIzaSyBvAuxqLjpUFB8WTcfJ3qJ74ATsL7DMk2o",
    default_tr_lang: process.env.DEFAULT_TR_LANG || "en",
    enable_delete_alert: process.env.ENABLE_DELETE_ALERT || "true",
    ocr_space_api_key: process.env.OCR_SPACE_API_KEY || "7fc606a4ad88957",
    infospace_api_key: process.env.INFOSPACE_API_KEY || "b872e00mqaaljc83ii094d55k1bc7t7wymkqdx3qlz1hur25yyydn"
}
