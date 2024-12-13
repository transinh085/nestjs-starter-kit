import { Repository } from 'typeorm';
import { PaginationOptions } from '../interfaces/pagination-options';
import { PaginatedResult } from '../interfaces/paginated-result';

export class BaseRepository<T> extends Repository<T> {
  async paginate(
    options: PaginationOptions,
    searchOptions = {},
  ): Promise<PaginatedResult<T>> {
    const page = options.page || 1;
    const limit = options.limit || 10;
    const skip = (page - 1) * limit;

    const [data, total] = await this.findAndCount({
      ...searchOptions,
      skip,
      take: limit,
    });

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
