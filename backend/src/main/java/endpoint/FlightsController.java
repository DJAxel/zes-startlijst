package endpoint;

import DAL_interfaces.Repositories.IFlightRepository;
import Factory.FlightFactory;
import domain.Flight;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/flights")
public class FlightsController {
    private IFlightRepository repository;

    public FlightsController() {
        this.repository = FlightFactory.getFlightRepository();
    }

    @GetMapping("/")
    public ArrayList<Flight> getAll() {
        return repository.getAll();
    }
}
