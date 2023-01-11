import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const verifyData = (serializer: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {

      const data = await serializer.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.body = data;

      next();

    } catch (error) {
        return res.status(400).json({
            message: error.errors,
        });
    }

};

export default verifyData;
