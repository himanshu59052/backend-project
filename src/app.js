import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
})

)

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))

app.use(cookieParser())


export {app}




// middeleware or configurstion setting me app.get k jagah app.use hota h
//cookie parser se server se webBrowser k cookie ko change aur set krte h ye sb sif aur sirf server se hi hota h
//highorder function wo function h jo ki function ko as a prameter le skta h ex:async