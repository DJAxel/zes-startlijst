package Factory;

import DAL.Contexts.jpa.FlightJpaContext;
import DAL.Contexts.test.FlightTestContext;
import DAL.Repositories.FlightRepository;
import DAL_interfaces.Repositories.IFlightRepository;

public class FlightFactory {
    public static IFlightRepository getFlightRepository() {
        return new FlightRepository( new FlightTestContext() );
    }
}
