package Factory;

import DAL.Contexts.jpa.PilotJpaContext;
import DAL.Contexts.test.PilotTestContext;
import DAL.Repositories.PilotRepository;
import DAL_interfaces.Repositories.IPilotRepository;

public class PilotFactory {

    public static IPilotRepository getPilotRepository() {
        return new PilotRepository( new PilotJpaContext() );
    }

}
