import { dataSourceOptions } from '../config/database.config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource(dataSourceOptions);
