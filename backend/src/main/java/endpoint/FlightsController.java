package endpoint;

import DAL_interfaces.Repositories.IFlightRepository;
import Factory.FlightFactory;
import domain.*;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/")
    public Flight add(@RequestBody Flight flight) {
        System.out.println(flight);
        return this.repository.add(flight);
    }
}
