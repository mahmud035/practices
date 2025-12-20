import { NextFunction, Request, Response } from 'express';
import { productService } from './product.service';

export const productController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await productService.create(req.body);
      res.status(201).json({
        success: true,
        message: 'Product created. Image upload pending.',
        data: product,
      });
    } catch (e) {
      next(e);
    }
  },

  list: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productService.list();
      res
        .status(200)
        .json({ success: true, count: products.length, data: products });
    } catch (e) {
      next(e);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await productService.getById(req.params.id);
      if (!product)
        return res
          .status(404)
          .json({ success: false, message: 'Product not found' });
      res.status(200).json({ success: true, data: product });
    } catch (e) {
      next(e);
    }
  },

  getUploadSignature: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const signature = await productService.getUploadSignature(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Upload signature generated',
        data: signature,
      });
    } catch (e) {
      next(e);
    }
  },

  confirmImage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await productService.confirmUpload(
        req.params.id,
        req.body
      );
      res.status(200).json({
        success: true,
        message: 'Image confirmed and product updated',
        data: product,
      });
    } catch (e) {
      next(e);
    }
  },

  markImageFailed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await productService.markUploadFailed(
        req.params.id,
        req.body?.reason || 'Upload failed'
      );
      res
        .status(200)
        .json({ success: true, message: 'Upload failure recorded' });
    } catch (e) {
      next(e);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedId = await productService.deleteProduct(req.params.id);
      if (!deletedId)
        return res
          .status(404)
          .json({ success: false, message: 'Product not found' });
      res.status(200).json({
        success: true,
        message: 'Product deleted',
        data: { deletedId },
      });
    } catch (e) {
      next(e);
    }
  },
};
