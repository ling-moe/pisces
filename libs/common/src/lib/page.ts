
export class PageRequest<T extends AuditDomain> {

  static of<T extends AuditDomain>(page = 0, size = 20): PageRequest<T>{
    const pageRequest = new PageRequest();
    pageRequest.page = page;
    pageRequest.size = size;
    return pageRequest as PageRequest<T>;
  }

  page = 0;
  size = 20;
  sorts: Sort<T>[] = [{ field: 'createAt', direction: 'desc' }];

}

export interface Sort<T> {
  alise?: string;
  field: keyof T;
  direction: 'asc' | 'desc';
}

export const DEFAULT_PAGE: PageRequest<any> = new PageRequest();

export interface AuditDomain {
  createBy: bigint;
  createAt: Date;
  updateBy: bigint;
  updateAt: Date;
}

export interface OCC {
  versionNum: bigint
}

export interface RemoveMark {
  isRemove?: boolean
}


export interface Page<T> {
  data: T[];
  total: number;
  lastPage: number;
  page: number;
  size: number;
  prev: number | null;
  next: number | null;
}

export type PaginateFunction = <T extends AuditDomain, K>(model: any, args?: K, options?: PageRequest<T>) => Promise<Page<T>>;

export const paginator = <T extends AuditDomain>(pageRequest: PageRequest<T>): PaginateFunction => {
  return async (model, args: any = { where: undefined }) => {
    const {page, size, sorts} = pageRequest;

    const [total, data] = await Promise.all([
      model.count({ where: args.where }),
      model.findMany({
        ...args,
        ...toPrisma(page,size, sorts)
      }),
    ]);
    const lastPage = Math.ceil(total / size);

    return {
      data,
      total,
      lastPage,
      page: page,
      size: size,
      prev: page > 1 ? page - 1 : null,
      next: page < lastPage ? page + 1 : null,
    };
  };
};

function toPrisma<T>(page: number, size: number, sorts: Sort<T>[]) {
  return {
    skip: page * size,
    take: size,
    orderBy: sorts.reduce((result, sort) => {
      const modelOrder = {} as any;
      if(sort.alise){
        const fieldOrder = {} as any;
        fieldOrder[sort.field] = sort.direction;
        modelOrder[sort.alise] = modelOrder;
      }else{
        modelOrder[sort.field] = sort.direction;
      }
      return {...result, ...modelOrder}
    }, {} as {[P in keyof T]: 'asc' | 'desc'})
  }
}
