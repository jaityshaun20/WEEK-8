class User {
  constructor(public id: number, public name: string, public age: number) {}
}

class Data {
  private rows: Map<number, User> = new Map<number, User>();

  add(user: User): Promise<void> {
    return sleep(100).then(() => {
      this.rows.set(user.id, user);
    });
  }

  update(id: number, partialUser: Partial<User>): Promise<void> {
    return sleep(100).then(() => {
      const user = this.rows.get(id);
      if (user) {
        const updatedUser = { ...user, ...partialUser };
        this.rows.set(id, updatedUser);
      } else {
        throw new Error("User not found.");
      }
    });
  }

  delete(user: User): Promise<void> {
    return sleep(100).then(() => {
      let found = false;
      this.rows.forEach((value, key) => {
        if (value === user) {
          this.rows.delete(key);
          found = true;
        }
      });
      if (!found) {
        throw new Error("User not found.");
      }
    });
  }

  get(id: number): Promise<User | undefined> {
    return sleep(100).then(() => this.rows.get(id));
  }
}