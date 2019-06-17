package endpoint;

import DAL_interfaces.Repositories.IUserRepository;
import Factory.UserFactory;
import domain.User;
import endpoint.viewmodels.outgoing.LoginResponse;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.util.Date;

@RestController
@RequestMapping("/users")
public class AuthenticationController {

    private IUserRepository userRepository = UserFactory.getUserRepository();

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public LoginResponse login(@RequestBody User login) throws ServletException {

        String jwtToken = "";

        if (login.getUsername() == null || login.getPassword() == null) {
            throw new ServletException("Please fill in username and password");
        }

        String username = login.getUsername();
        String password = login.getPassword();

        User user = userRepository.findByUsername(username);

        if (user == null) {
            throw new ServletException("Username not found.");
        }

        if (!BCrypt.checkpw(password, user.getPassword())) {
            throw new ServletException("Invalid login. Please check your name and password.");
        }

        jwtToken = Jwts.builder().setSubject(username).claim("roles", "user").setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "F7VmkmD9yg2lT6BT7maj9rGiVSSfHqBN").compact();

        return new LoginResponse(jwtToken);
    }
}
