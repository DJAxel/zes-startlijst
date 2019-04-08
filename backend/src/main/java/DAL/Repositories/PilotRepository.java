package DAL.Repositories;

import DAL_interfaces.Contexts.IPilotContext;
import DAL_interfaces.Repositories.IPilotRepository;
import domain.Pilot;

import java.util.ArrayList;

public class PilotRepository implements IPilotRepository {

    private IPilotContext context;

    public PilotRepository(IPilotContext context) {
        this.context = context;
    }

    public ArrayList<Pilot> getAll() {
        return context.getAll();
    }

}
