import { serializable, json } from './index.bundle';

@serializable
class User {
  @json('user_name')
  userName
}

const user = User.serialize({ user_name: 123 });

console.log(user.userName);