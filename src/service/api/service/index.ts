import { getFetcher } from "@/service/config/fetcher";

export interface GetServiceDetailsResponse {
    title: string,
    categoryTitle: string,
    categoryId: string,
    branchIds: string[],
    duration: string,
    description: string,
    icon: string,
    discount: string,
    discountDescription: string,
    prepay: string,
    isActive: boolean
    countOfPersonnel: number,
    pictures : [],
    users: [
        {
            id: string,
            firstName: string
            lastName: string
            picture: string,
            phoneNumber: string,
            isActive: boolean
        }
    ],
    comments: [
        {
            id: string
            title: string
            firstName: string
            lastName: string
            phoneNumber: string
            date: string
            status: number
            description: string
            user: {
                id: string
                firstName: string
                lastName: string
            }
        }
    ],
    details: {
        id: string
        name: string
        displayName: string
        value: string
        order: number,
        type: number,
        isActive: boolean
    }[]
    nearTimesToReserve: [
        {
            branchUserFirstName: string,
            branchUserLastName: string,
            freeTimes: {
                [key: string]: [{
                    from: string, to: string,
                    details: [
                        {
                            branchAddress: string
                            branchId:string
                            branchTitle:string
                            branchUserFirstName:string
                            branchUserLastName:string
                            duration:string
                            endTime:string
                            order:number
                            prepay:number
                            serviceId:string
                            serviceTitle:string
                            start:string
                        }
                    ]
                }]
            },
            prepay: number,
            serviceTitle: string,
        }
    ]
}

export interface GetServicesResponse {
    id: string,
    title: string,
    categoryTitle: string,
    icon: string,
    prepay: string,
    discount: string,
    isActive: boolean
}

export const getServiceDetails = (params: any): global.GlobalResponse<GetServiceDetailsResponse> => {
    return getFetcher(`api/services?id=${params}`, { cache: 'no-cache' });
};
export const getServices = (): global.GlobalResponse<GetServicesResponse[]> => {
    return getFetcher(`api/service/GetAll`, { cache: 'no-cache' });
};

interface GetFilterByBranchId {
    id: string;
    title: string;
    iconAddress: string;
    prepay: number;
    status: boolean;
    discount: number;
    samples: string[]
}
export type GetFilterByBranchIdResponse = { [key: string]: GetFilterByBranchId[] };

export const getFilterByBranchId =
    (): global.GlobalResponse<GetFilterByBranchIdResponse> =>
        getFetcher(`api/category/filterbybranchId`);