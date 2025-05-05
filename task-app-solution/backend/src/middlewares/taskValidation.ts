import { Request, Response, NextFunction } from 'express';

// Validate task data for create and update operations
export const validateTask = (req: Request, res: Response, next: NextFunction) => {
    const { title, description, completed } = req.body;

    if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing "title".' });
    }

    if (description && typeof description !== 'string') {
        return res.status(400).json({ error: 'Invalid "description".' });
    }

    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Invalid "completed" status.' });
    }

    next();
};

// Validate task ID for update and delete operations
export const validateTaskId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid or missing "id".' });
    }

    next();
};