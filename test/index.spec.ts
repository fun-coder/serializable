import 'mocha';
import { expect } from 'chai';
import { User } from './user';

describe('Serialize the object by json', () => {
  const json = {
    user_name: { first_name: 'Hello', last_name: 'world' },
    Age: "22",
    gender: 0,
    is_active: 'false'
  };

  it('should be true', async () => {
    const user = User.serialize(json);
    user.sayHello();
    expect(user.userName.firstName).to.eq('Hello');
    expect(user.userName.lastName).to.eq('world');
    expect(user.age).to.eq(22);
    expect(user.gender).to.eq(0);
  });

  it('should deserialize to json', async () => {
    const user = User.serialize(json);
    expect(user.deserialize()).to.deep.equal({...json, Age: 22, is_active: false});
  });
});