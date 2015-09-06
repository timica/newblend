package ro.timica.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("test")
public class TestApi {

    @GET
    @Path("random")
    public String doSomething() {
        return "andi";
    }

}
