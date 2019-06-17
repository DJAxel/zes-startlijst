package DAL_interfaces.Repositories;

import domain.User;

public interface IUserRepository {
    User findByUsername(String username);
}
