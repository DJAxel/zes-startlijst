package DAL.Contexts.jpa;

import DAL_interfaces.Contexts.IPilotContext;
import domain.Pilot;
import domain.Plane;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.ArrayList;
import java.util.Iterator;

public class PilotJpaContext implements IPilotContext {

    private static SessionFactory factory;

    public PilotJpaContext() {
        try {
            factory = new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Failed to create sessionFactory object." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public ArrayList<Pilot> getAll() {

        return null;
    }

}
