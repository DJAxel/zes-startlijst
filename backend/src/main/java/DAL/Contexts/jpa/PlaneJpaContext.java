package DAL.Contexts.jpa;

import DAL_interfaces.Contexts.IPlaneContext;
import domain.Pilot;
import domain.Plane;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.ArrayList;
import java.util.Iterator;

public class PlaneJpaContext implements IPlaneContext {

    private static SessionFactory factory;

    public PlaneJpaContext() {
        try {
            factory = new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Failed to create sessionFactory object." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public ArrayList<Plane> getAll() {
        Session session = factory.openSession();
        Transaction tx = null;
        ArrayList<Plane> planes = null;

        try {
            tx = session.beginTransaction();
            planes = (ArrayList<Plane>) session.createQuery("FROM Plane").list();
            for (Iterator iterator = planes.iterator(); iterator.hasNext();){
                Plane plane = (Plane) iterator.next();
            }
            tx.commit();
        } catch (HibernateException e) {
            if (tx!=null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return planes;
    }

}
