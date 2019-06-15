package DAL_interfaces.Repositories;

import domain.Flight;

import java.util.ArrayList;

public interface IFlightRepository {
    ArrayList<Flight> getAll();
    Flight add(Flight flight);
}
