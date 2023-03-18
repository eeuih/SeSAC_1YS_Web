package sesac.jpaPractice.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="boardtest")
public class Board {
    @Id
    @GeneratedValue
    private int id;

    @Column(length=100, nullable = false)
    private String title;

    @Lob
    private String content;
    // mysql long type

    @Column(length=50, nullable = false)
    private String writer;
}