package DAL_interfaces.Contexts;

import domain.User;

public interface IUserContext {
    User findByUsername(String username);
}
