package endpoint;

import domain.Pilot;
import domain.Status;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PilotsController {

    @RequestMapping(value = "/pilots", method = RequestMethod.GET)
    public Pilot getAll() {
        return new Pilot(1, "Axel Köhler", Status.Solist);
    }

}
