package DAL.Contexts.jpa;

import DAL_interfaces.Contexts.IFlightContext;
import domain.Flight;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Iterator;

public class FlightJpaContext implements IFlightContext {

    private static SessionFactory factory;

    public FlightJpaContext() {
        try {
            factory = new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Failed to create sessionFactory object." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    @Override
    public ArrayList<Flight> getAll() {
        Session session = factory.openSession();
        Transaction tx = null;
        ArrayList<Flight> flights = null;

        try {
            tx = session.beginTransaction();
            flights = (ArrayList<Flight>) session.createQuery("FROM Flight").list();
            for (Iterator iterator = flights.iterator(); iterator.hasNext();){
                Flight flight = (Flight) iterator.next();
//                System.out.println("Plane: " + flight.getPlane().getRegistration());
//                System.out.println("Pilot: " + flight.getPilot().getName());
                System.out.println("Starttime: " + flight.getStarttime().toString());
            }
            tx.commit();
        } catch (HibernateException e) {
            if (tx!=null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }

        return flights;
    }

    @Override
    public Flight add(Flight flight) {
        try {
            Session session = factory.openSession();
            session.beginTransaction();
            session.persist(flight);
            session.getTransaction().commit();
            session.close();
        }
        catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return flight;
    }
}
