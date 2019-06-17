package Factory;

import DAL.Contexts.jpa.PlaneJpaContext;
import DAL.Contexts.test.PlaneTestContext;
import DAL.Repositories.PlaneRepository;
import DAL_interfaces.Repositories.IPlaneRepository;

public class PlaneFactory {

    public static IPlaneRepository getPlaneRepository() {
        return new PlaneRepository( new PlaneJpaContext() );
    }

}
