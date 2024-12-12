import { Request, Response } from "express";
import {
  addBusService,
  updateBusService,
  deleteBusService,
  getAllBusesService,
} from "./bus.service";

export const addBus = async (req: Request, res: Response) => {
  try {
    const { name, capacity } = req.body;
    const bus = await addBusService(name, capacity);
    res.status(201).json({ message: "Bus added successfully", bus });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to add bus", error: (error as Error).message });
  }
};

export const updateBus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, capacity } = req.body;
    const bus = await updateBusService(id, name, capacity);
    if (bus) {
      res.json({ message: "Bus updated successfully", bus });
    } else {
      res.status(404).json({ message: "Bus not found" });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Failed to update bus",
        error: (error as Error).message,
      });
  }
};

export const deleteBus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const bus = await deleteBusService(id);
    if (bus) {
      res.json({ message: "Bus deleted successfully" });
    } else {
      res.status(404).json({ message: "Bus not found" });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Failed to delete bus",
        error: (error as Error).message,
      });
  }
};

export const getAllBuses = async (req: Request, res: Response) => {
  try {
    const buses = await getAllBusesService();
    res.json(buses);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to fetch buses",
        error: (error as Error).message,
      });
  }
};
