package DAL.Repositories;

import DAL_interfaces.Contexts.IUserContext;
import DAL_interfaces.Repositories.IUserRepository;
import domain.User;

public class UserRepository implements IUserRepository {

    private IUserContext context;

    public UserRepository(IUserContext context) {
        this.context = context;
    }

    @Override
    public User findByUsername(String username) {
        return this.context.findByUsername(username);
    }
}
