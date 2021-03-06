package Factory;

import DAL.Contexts.jpa.UserJpaContext;
import DAL.Contexts.test.UserTestContext;
import DAL.Repositories.UserRepository;
import DAL_interfaces.Repositories.IUserRepository;

public class UserFactory {
    public static IUserRepository getUserRepository(){
        return new UserRepository( new UserTestContext() );
    };
}
