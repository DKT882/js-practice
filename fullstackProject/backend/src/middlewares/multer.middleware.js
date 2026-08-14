import multer from "multer"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../public/temp") // in this cb is callback function. we can also write it in this way
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // this can chagne the filename with unique filename
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, file.originalname)

    }
})

export const upload = multer({
    storage: storage
})