package mybatis.sesac.service;
import mybatis.sesac.domain.User;
import mybatis.sesac.dto.UserDTO;
import mybatis.sesac.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;

    public List<UserDTO> getUserList(){
        List<User> result = mainMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<UserDTO>();
        // UserDTO를 담아주는.. 리스트

        for ( int i =0; i < result.size(); i++){
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }

    public String loginUser(User user) {
        String result = mainMapper.login(user);
        return result;
    }

    public void addUser(User user) {mainMapper.insertUser(user); }

  //  public void loginUser (User user) {mainMapper.loginUser(user);}

}
