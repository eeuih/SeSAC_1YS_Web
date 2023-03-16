package mybatis.sesac.service;
import mybatis.sesac.domain.UserEntity;
import mybatis.sesac.dto.UserDTO;
import mybatis.sesac.mapper.MainMapper;
import mybatis.sesac.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;
    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getUserList(){
        // List<User> result = mainMapper.retrieveAll();
        List<UserEntity> result = userRepository.findAll(); // select all
        List<UserDTO> users = new ArrayList<UserDTO>();
        // UserDTO 를 담아주는.. 리스트

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

//    public String loginUser(User user) {
//        String result = mainMapper.login(user);
//        return result;
//    }
//
//    public void addUser(User user) {mainMapper.insertUser(user); }
  //  public void loginUser (User user) {mainMapper.loginUser(user);}
    public void addUser(UserEntity user) {userRepository.save(user); } // insert

    public ArrayList<UserDTO> getUserName(String name) {
        Optional<UserEntity> user = userRepository.findByName(name);
        // findByName 하면 name을 조건으로 걸어서 검색함 jpa의 장점 중 하나 컬럼을 조건으로 검색~~~
        ArrayList<UserDTO> userList = new ArrayList<>();

        if ( user.isPresent() ) {
            UserDTO dto = new UserDTO();
            dto.setId(user.get().getId());
            dto.setNo(0);
            dto.setName(user.get().getName());
            dto.setNickname(user.get().getNickname());
            userList.add(dto);
        }
        return userList;
    }

}
