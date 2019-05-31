package domain;

public class Plane {
    int id;
    String registration;
    String type;
    int seats;

    public Plane() {}
    public Plane(int id, String registration, String type, int seats) {
        this.id = id;
        this.registration = registration;
        this.type = type;
        this.seats = seats;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRegistration() {
        return registration;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }
}
