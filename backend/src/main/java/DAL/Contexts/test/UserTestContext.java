package DAL.Contexts.test;

import DAL_interfaces.Contexts.IUserContext;
import domain.User;

import java.util.ArrayList;

public class UserTestContext implements IUserContext {

    private ArrayList<User> users;

    public UserTestContext() {
        this.users = new ArrayList<>();
        this.users.add( new User("axelk1998", "$2a$10$pnZOE7oTOOowJEvlNq6DF.gqiTTyL2P2pRINkZlawuwZ0.McA4/3m") );
    }

    @Override
    public User findByUsername(String username) {
        for (int i = 0; i < this.users.size(); i++) {
            User user = this.users.get(i);
            if( user.getUsername().equals(username) ) {
                return user;
            }
        }
        return null;
    }
}
