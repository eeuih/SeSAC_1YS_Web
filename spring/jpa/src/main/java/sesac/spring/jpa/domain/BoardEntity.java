package sesac.spring.jpa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="board")
@Getter
@Setter
public class BoardEntity {
    @Id
    @GeneratedValue
    private int id;
    @Column(length = 10, nullable = false) // 기본키나 그런거 아니고 컬럼.
    private String name;
    @Column(length = 50, nullable = true)
    private String date;

}
