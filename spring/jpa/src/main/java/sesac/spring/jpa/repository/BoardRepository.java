package sesac.spring.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.spring.jpa.domain.BoardEntity;

import java.util.Optional;

@Repository
public interface BoardRepository  extends JpaRepository<BoardEntity, Integer> {
}
