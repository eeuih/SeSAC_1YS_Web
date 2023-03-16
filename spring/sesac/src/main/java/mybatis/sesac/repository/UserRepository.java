package mybatis.sesac.repository;
import mybatis.sesac.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByName(String name); // Optional 안의 함수가 null 여부 체크해줌
    
    // UserEntity userEntity
    // Optional <UserEntity> user; user.get()
}
