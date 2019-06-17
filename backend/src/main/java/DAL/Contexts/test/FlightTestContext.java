package DAL.Contexts.test;

import DAL_interfaces.Contexts.IFlightContext;
import domain.Flight;

import java.util.ArrayList;

public class FlightTestContext implements IFlightContext {

    private ArrayList<Flight> flights;

    public FlightTestContext() {
        this.flights = new ArrayList<>();
    }

    @Override
    public ArrayList<Flight> getAll() {
        return this.flights;
    }

    @Override
    public Flight add(Flight flight) {
        this.flights.add(flight);
        return flight;
    }
}
