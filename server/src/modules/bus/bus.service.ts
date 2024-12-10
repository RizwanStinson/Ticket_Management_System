import Bus, { IBus } from "./bus.model";

export const addBusService = async (name: string, capacity: number): Promise<IBus> => {
  const bus = new Bus({ name, capacity });
  await bus.save();
  return bus;
};

export const updateBusService = async (
  id: string,
  name: string,
  capacity: number
): Promise<IBus | null> => {
  return Bus.findByIdAndUpdate(id, { name, capacity }, { new: true });
};

export const deleteBusService = async (id: string): Promise<IBus | null> => {
  return Bus.findByIdAndDelete(id);
};

export const getAllBusesService = async (): Promise<IBus[]> => {
  return Bus.find();
};