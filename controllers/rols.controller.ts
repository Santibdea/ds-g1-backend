import { Request, Response } from "express";
import Rols from "../models/rols.model";
import User from "../models/user.model";

class RolsController{

    public async newRol(req: Request, res: Response){
        const {body} = req;
        
        try {
            
            const role = new Rols(body);
            await role.save()

            res.json({
                msg: `El rol, ${body.name}, fue creado con exito`,
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "No se pudo crear el rol, intente de nuevo."
            })
        }    
    }
    
    public async getAll(req: Request, res: Response){
        try {
            const rols = await Rols.findAll()

            res.json(rols)
        
        } catch (error) {
            res.json('Ocurrió un error al obtener los roles')
        }
    }

}

export default RolsController