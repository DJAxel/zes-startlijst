package endpoint;

import DAL_interfaces.Repositories.IPilotRepository;
import Factory.PilotFactory;
import domain.Pilot;
import domain.Status;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class PilotsController {

    private IPilotRepository repository;

    public PilotsController() {
        this.repository = PilotFactory.getPilotRepository();
    }

    @RequestMapping(value = "/pilots", method = RequestMethod.GET)
    public ArrayList<Pilot> getAll() {
        return repository.getAll();
    }

}
