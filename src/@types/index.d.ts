namespace global {
  type GlobalResponse<D> = Promise<RestResponse<D>>;
  interface RestResponse<D> {
    errors?: {
      errorCode: string;
      message: string;
      propertyName: string;
    }[];
    message: string;
    isSuccess: boolean;
    code: number;
    entity: D;
  }
  interface PaginationParams {
    index?: number;
    size?: number;
    value?: string;
    BrancheIds?: any[];
    From?: DayValue | undefined | string;
    To?: DayValue | undefined | string;
    BranchUserId?: string;
    ServiceIds?: any[];
    Step?: number;
  }
}
