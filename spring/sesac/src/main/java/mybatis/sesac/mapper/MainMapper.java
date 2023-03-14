package mybatis.sesac.mapper;

import mybatis.sesac.domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainMapper {
    // Mapper참고하기
    List<User> retrieveAll();
    String login(User user);

    // Mapper 참고 안하기
    @Insert("insert into user(name, nickname, userid, password) values(#{name}, #{nickname}, #{userid}, #{password})")
    void insertUser(User user);

    // @Select("select * from user where userid = #{userid} and password = #{password})")
    //void loginUser(User user);
}
