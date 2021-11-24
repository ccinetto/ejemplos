import { BaseRepository } from './base/BaseRepository';
import { Persona } from '../entities/Persona';

// now, we have all code implementation from BaseRepository
export class PersonaRepository extends BaseRepository<Persona> {
  // here, we can create all especific stuffs of Persona Repository
  countOfPersonas(): Promise<number> {
    return this._collection.countDocuments({});
  }
}
