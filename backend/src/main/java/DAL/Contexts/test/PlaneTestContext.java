package DAL.Contexts.test;

import DAL_interfaces.Contexts.IPlaneContext;
import domain.Plane;

import java.util.ArrayList;

public class PlaneTestContext implements IPlaneContext {

    private ArrayList<Plane> planes = new ArrayList<Plane>();

    public ArrayList<Plane> getAll() {
        return this.planes;
    }

    public PlaneTestContext() {
        planes.add(new Plane(1, "PH-1016", "LS-4B", 1));
        planes.add(new Plane(2, "PH-1134", "TWIN III Acro", 2));
        planes.add(new Plane(3, "PH-1259", "HPH 304C", 1));
        planes.add(new Plane(4, "PH-421", "Ka8", 1));
        planes.add(new Plane(5, "PH-1606", "ASK21", 2));
        planes.add(new Plane(6, "PH-980", "Junior", 1));
        planes.add(new Plane(7, "PH-351", "Ka7", 2));
    }

}
