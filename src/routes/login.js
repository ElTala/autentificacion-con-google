import {Router} from "express";
const loginRouter = Router();
loginRouter.get("/google",(req,res)=>
res.send("Bienvenido a la pagina mi chavo")
);
export { loginRouter }
