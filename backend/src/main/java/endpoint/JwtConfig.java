package endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {
    @Autowired
    private JwtFilter jwtFilter;

    @Bean
    public FilterRegistrationBean<JwtFilter> filterFilterRegistrationBean(){
        FilterRegistrationBean<JwtFilter> filterFilterRegistrationBean = new FilterRegistrationBean<>();
        filterFilterRegistrationBean.setFilter(jwtFilter);
        filterFilterRegistrationBean.addUrlPatterns("/flights/*");
        filterFilterRegistrationBean.addUrlPatterns("/pilots/*");
        return filterFilterRegistrationBean;
    }
}
