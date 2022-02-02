import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export abstract class AbstractService<T> {
  protected constructor(protected readonly repository: Repository<T>) {}

  find(query: any = {}, relations: string[] = []): Promise<T[]> {
    return this.repository.find({ where: query, relations });
  }

  findOne(query: any = {}, relations: string[] = []): Promise<T> {
    return this.repository.findOne({ where: query, relations });
  }

  create(data: DeepPartial<T>): Promise<T> {
    // create entity first so private entity methods run (ie. slugify)
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async update(id: number, data: DeepPartial<T>): Promise<T> {
    const found = await this.repository.findOne(id);

    if (!found) {
      throw new GraphQLError('Not found');
    }
    // Original Typeorm entity props must be updated directly for
    // BeforeUpdate hooks to run. Using spread operator does not work updates
    // entity, but does not run hooks
    Object.entries(data).forEach(([key, value]) => {
      found[key] = value;
    });
    return this.repository.save(found);
  }

  async delete(id: number | string): Promise<boolean> {
    const res = await this.repository.delete(id);
    if (res.affected) {
      return true;
    }
    throw new GraphQLError('Not found');
  }
}
