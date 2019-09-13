export interface IRule {
    id?: number;
    name: string;
    conditions: ICondition[];
    actions: IAction[];
    status: string;
    lasttriggered: string;
}

export interface IAction {
    address: string;
    method: string;
    body: IBody[];
}

export interface IBody {
    key: string;
    value: string|number|boolean;
}

export interface ICondition {
    address: string;
    operator: string;
    value: string | number[];
}

export interface IPayload {
    name: string;
    conditions: ICondition[];
    actions: IPayloadAction[];
    status: string;
}

export interface IPayloadAction {
    address: string;
    method: string;
    body: Object;
}
