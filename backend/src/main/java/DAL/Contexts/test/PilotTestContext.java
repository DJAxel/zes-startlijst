package DAL.Contexts.test;

import DAL_interfaces.Contexts.IPilotContext;
import domain.Pilot;
import domain.Status;

import java.util.ArrayList;

public class PilotTestContext implements IPilotContext {

    private ArrayList<Pilot> pilots = new ArrayList<Pilot>();

    public ArrayList<Pilot> getAll() {
        return this.pilots;
    }

    public PilotTestContext() {
        pilots.add(new Pilot(1, "Axel Köhler", Status.Solist));
        pilots.add(new Pilot(2, "Fraya Verbakel", Status.DBO));
        pilots.add(new Pilot(3, "Eduard Huyge", Status.GPL));
        pilots.add(new Pilot(4, "Quick Otters", Status.IIO));
        pilots.add(new Pilot(5, "Abraham Veldhuis", Status.Instructeur));
        pilots.add(new Pilot(6, "Stefan Brilmans", Status.DBO));
        pilots.add(new Pilot(7, "Augustus Slager", Status.DBO));
        pilots.add(new Pilot(8, "Bram Buijs", Status.Solist));
        pilots.add(new Pilot(9, "Niels Mandenmakers", Status.Solist));
    }
}
