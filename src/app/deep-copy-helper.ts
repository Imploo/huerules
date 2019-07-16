export class DeepCopyHelper {
  public static copy<T>(object: T): T {
    return Object.assign({}, object, JSON.parse(JSON.stringify(object)));
  }
}
