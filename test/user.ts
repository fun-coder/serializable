import "reflect-metadata";
import { json, serializable } from "../index";

@serializable
class Name {
  public static serialize: (json: any) => Name;
  public deserialize: () => Map<String, any>;

  @json('first_name')
  firstName: string;

  @json('last_name')
  lastName: string;

  public toString(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

@serializable
export class User {

  public static serialize: (json: any) => User;
  public deserialize: () => Map<String, any>;

  @json('user_name')
  public userName: Name;

  @json('Age')
  public age: number;

  @json()
  public gender: number;

  @json('is_active')
  public isActive: boolean;

  public sayHello() {
    return `Hello I'm ${this.userName}`;
  }
}

