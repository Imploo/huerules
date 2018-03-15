export interface IRule {
    id: number;
    name: string;
    conditions: ICondition[];
    actions: IAction[];
    status: string;
}

export interface IAction {
    address: string;
    method: string;
    body: IBody;
}

export interface IBody {
    [key: string]: string;
}

export interface ICondition {
    address: string;
    operator: string;
    value: string;
}

export interface IPayload {
    name: string;
    conditions: ICondition[];
    actions: IAction[];
}