package domain;

import java.time.Instant;

public class Flight {
    private int id;
    private Plane plane;
    private Pilot pilot;
    private Pilot second_pilot;
    private Instant starttime;
    private Instant landtime;
    private String airfield;
    private Startmethod startmethod;
    private String remarks;

    public Flight() { }
    public Flight(int id, Plane plane, Pilot pilot, Pilot second_pilot, Instant starttime, Instant landtime, String airfield, Startmethod startmethod, String remarks) {
        this.id = id;
        this.plane = plane;
        this.pilot = pilot;
        this.second_pilot = second_pilot;
        this.starttime = starttime;
        this.landtime = landtime;
        this.airfield = airfield;
        this.startmethod = startmethod;
        this.remarks = remarks;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Plane getPlane() {
        return plane;
    }

    public void setPlane(Plane plane) {
        this.plane = plane;
    }

    public Pilot getPilot() {
        return pilot;
    }

    public void setPilot(Pilot pilot) {
        this.pilot = pilot;
    }

    public Pilot getSecond_pilot() {
        return second_pilot;
    }

    public void setSecond_pilot(Pilot second_pilot) {
        this.second_pilot = second_pilot;
    }

    public Instant getStarttime() {
        return starttime;
    }

    public void setStarttime(Instant starttime) {
        this.starttime = starttime;
    }

    public Instant getLandtime() {
        return landtime;
    }

    public void setLandtime(Instant landtime) {
        this.landtime = landtime;
    }

    public String getAirfield() {
        return airfield;
    }

    public void setAirfield(String airfield) {
        this.airfield = airfield;
    }

    public Startmethod getStartmethod() {
        return startmethod;
    }

    public void setStartmethod(Startmethod startmethod) {
        this.startmethod = startmethod;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
