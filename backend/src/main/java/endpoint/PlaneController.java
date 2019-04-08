package endpoint;

import DAL_interfaces.Repositories.IPlaneRepository;
import Factory.PlaneFactory;
import domain.Plane;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class PlaneController {

    private IPlaneRepository repository;

    public PlaneController() {
        this.repository = PlaneFactory.getPlaneRepository();
    }

    @RequestMapping(value = "/planes", method = RequestMethod.GET)
    public ArrayList<Plane> getAll() {
        return repository.getAll();
    }

}
