serializable
---

Basic serialize

```typescript
import { json, serializable } from "serializable";

@serializable
export class User {
  public static serialize: (json: any) => User;
  public deserialize: () => Map<String, any>;

  @json('user_name')
  public userName: string;

  @json()
  public age: number;
}


const user = User.serialize({user_name: 'Hello world', age: 10})

user.userName // =>  'Hello world';
user.age // =>  10;

```