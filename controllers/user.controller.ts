import { Request, Response } from "express";
import PasswordHelper from "../helpers/password.helper";
import emailAlreadyExists from "../middlewares/emailAlreadyExists.middleware";
import noErrors from "../middlewares/noErrors.middleware";
import User from "../models/user.model";
import { where } from "sequelize";

class UserController{


    public async getAllUsuarios(req:Request, res:Response) {
        
        const usuarios =  await User.findAll();
        res.json({
            usuarios
        })
    }

    public async GetUsuarioByID(req:Request, res:Response) {
        const {id} = req.params
        const usuario = await User.findByPk(id)

        if(!usuario){
            res.status(404).json({msg: `No se encontro un usuario con el id ${id}`})
        } else{
            res.json(usuario)
        }
        
    }

    public async register(req:Request, res:Response) {
        
        const { body } = req;
        body.Rol_Name = body.Rol_Name.trim().toLowerCase();
        body.email = body.email.trim().toLowerCase();
        body.name = body.name.trim().toLowerCase();
        body.lastname = body.lastname.trim().toLowerCase();
        body.fullname = body.name + ' ' + body.lastname;
        
        try {
            body.password = new PasswordHelper().hash(body.password);

            const user = new User(body);
            await user.save()
            res.status(201).json({
                msg: 'El usuario se creo con exito',
                user: body
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'No se pudo crear el usuario'
            })
        }
    }


    public async putUsuario(req: Request, res: Response){
        const {id} = req.params
        const {body} = req;

        try {
            const user = await User.findByPk(id)

            if(body.password){
                body.password = new PasswordHelper().hash(body.password);
            }

            if(body.email){
                const exists = await User.findOne({
                    where: {
                        'email' : body.email
                    }
                });
            
                if(exists){
                    return res.json({
                        msg: 'Ya existe un usuario con el email que quieres actualizar ' + body.email
                    });
                }
            }

            if (!user){
                return res.status(404).json({
                    msg: 'No existe un usuario con el id ' + id
                });
            }

            await user.update(body);
            res.json(user)

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'No se pudo actualizar el usuario'
            })
        }
    }
}

export default UserController