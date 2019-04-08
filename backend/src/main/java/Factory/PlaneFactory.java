package Factory;

import DAL.Contexts.PlaneTestContext;
import DAL.Repositories.PlaneRepository;
import DAL_interfaces.Repositories.IPlaneRepository;

public class PlaneFactory {

    public static IPlaneRepository getPlaneRepository() {
        return new PlaneRepository( new PlaneTestContext() );
    }

}
