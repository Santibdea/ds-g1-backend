import express, { Application } from "express";
import db from "../db/db";
import cors from "cors";
import userRoutes from "../routes/user.routes"
import authRoutes from "../routes/auth.routes"
import rolsRoutes from "../routes/rols.routes"

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/tasty-doughs/api/users',
        auth: '/app-turnos/api/auth',
        rols: '/app-turnos/api/rols',
        orders: '/app-turnos/api/orders',
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3000';
        this.initDB()
        this.middlewares();
        this.sync();
        this.routes();

    }


    async sync() {
        await db.sync({ alter: true });
    }

    middlewares() {
        // Cors
        const corsOptions = {
            credentials: true,
            origin: '*' 
        }
        this.app.use(cors(corsOptions));
        this.app.use(express.json());
        // this.app.use((req, res, next) => {
        //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100'); // Reemplaza con el dominio de tu aplicación
        //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        //     next();
        //   })

        // this.app.use(fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/'
        // }));

    }

    private async initDB(){
        try {

            await db.authenticate();
            console.log("Database Online");

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log('Server running at', this.port);
        })
    }


    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.rols, rolsRoutes);
        // this.app.use(this.apiPaths.orders, ordersRoutes);  
        }

}


export default Server;