package sesac.jpaPractice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.jpaPractice.domain.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {
    // 기본 함수만 이용하기 위해 extends 만~~ 해도
    // void deleteByWriter(String writer); 글쓴이를 기준으로 삭제..
}
