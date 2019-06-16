package endpoint;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
public class JwtFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {

        final HttpServletRequest request = (HttpServletRequest) servletRequest;
        final String authorization = request.getHeader("authorization");
        if (authorization==null || !authorization.startsWith("Bearer ")){
            throw new ServletException("401 - UNAUTHORIZED");
        }
        try{
            final Claims claims = Jwts.parser().setSigningKey("F7VmkmD9yg2lT6BT7maj9rGiVSSfHqBN")
                    .parseClaimsJws(authorization.substring(7)).getBody();
            request.setAttribute("Claims", claims);
        }catch (final SignatureException e){
            throw new ServletException("401 - UNAUTHORIZED");
        }
        filterChain.doFilter(servletRequest, servletResponse);

    }


}
