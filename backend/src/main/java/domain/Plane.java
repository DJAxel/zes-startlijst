package domain;

public class Plane {
    int id;
    String registration;
    String type;
    int seats;

    public Plane(int id, String registration, String type, int seats) {
        this.id = id;
        this.registration = registration;
        this.type = type;
        this.seats = seats;
    }

    public int getId() {
        return id;
    }

    public String getRegistration() {
        return registration;
    }

    public String getType() {
        return type;
    }

    public int getSeats() {
        return seats;
    }
}
