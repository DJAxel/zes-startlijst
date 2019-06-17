package DAL.Contexts.jpa;

import DAL_interfaces.Contexts.IUserContext;
import domain.User;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

public class UserJpaContext implements IUserContext {

    private static SessionFactory factory;

    public UserJpaContext() {
        try {
            factory = new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Failed to create sessionFactory object." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    @Override
    public User findByUsername(String username) {
        Query query = factory.openSession().createQuery("FROM User U WHERE U.username = :username");
        query.setParameter("username", username);

        return (User) query.getSingleResult();
    }
}
