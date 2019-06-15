package DAL.Repositories;

import DAL_interfaces.Contexts.IFlightContext;
import DAL_interfaces.Repositories.IFlightRepository;
import domain.Flight;

import java.util.ArrayList;

public class FlightRepository implements IFlightRepository {

    private IFlightContext context;

    public FlightRepository(IFlightContext context) {
        this.context = context;
    }

    @Override
    public ArrayList<Flight> getAll() {
        return context.getAll();
    }
}
