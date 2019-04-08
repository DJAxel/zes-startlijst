package DAL.Repositories;

import DAL_interfaces.Contexts.IPlaneContext;
import DAL_interfaces.Repositories.IPlaneRepository;
import domain.Plane;

import java.util.ArrayList;

public class PlaneRepository implements IPlaneRepository {

    private IPlaneContext context;

    public PlaneRepository(IPlaneContext context) {
        this.context = context;
    }

    public ArrayList<Plane> getAll() {
        return context.getAll();
    }
}
