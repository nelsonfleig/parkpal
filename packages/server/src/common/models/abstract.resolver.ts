import { Type } from '@nestjs/common';
import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import pluralize from 'pluralize';
import { AbstractService } from './abstract.service';

export function AbstractResolver<
  T extends Type<unknown>,
  I extends Type<unknown>
>(classRef: T, inputType: I): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    constructor(protected readonly service: AbstractService<T>) {}

    @Query(() => [classRef], {
      name: `findAll${pluralize(classRef.name)}`,
      description: `List all ${pluralize(classRef.name)}`,
    })
    async findAll(): Promise<T[]> {
      return this.service.find();
    }

    @Query(() => classRef, {
      name: `findOne${classRef.name}`,
      description: `Find one ${classRef.name}`,
    })
    findOne(
      @Args('id', { type: () => ID }) id: number
    ): Promise<T | undefined> {
      return this.service.findOne({ id });
    }

    @Mutation(() => classRef, {
      name: `create${classRef.name}`,
      description: `Create ${classRef.name}`,
    })
    create(@Args('input', { type: () => inputType }) data: any): Promise<T> {
      return this.service.create(data);
    }

    @Mutation(() => classRef, {
      name: `update${classRef.name}`,
      description: `Update ${classRef.name}`,
    })
    update(
      @Args('id', { type: () => ID }) id: number,
      @Args('input', { type: () => inputType }) data: any
    ): Promise<T> {
      return this.service.update(id, data);
    }

    @Mutation(() => classRef, {
      name: `delete${classRef.name}`,
      description: `Delete ${classRef.name}`,
    })
    delete(@Args('id', { type: () => ID }) id: number): Promise<boolean> {
      return this.service.delete(id);
    }
  }
  return BaseResolver;
}
