export abstract class BaseEntity {
  constructor(
    public name: string,
    public id: number,
    public type: string,
    public properties: string[],
    public selectedProperty: string = null
  ) { }

  public abstract getAddress(): string;
}
