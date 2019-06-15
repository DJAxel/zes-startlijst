package DAL_interfaces.Contexts;

import java.util.ArrayList;
import domain.Flight;

public interface IFlightContext {
    ArrayList<Flight> getAll();
    Flight add(Flight flight);
}
