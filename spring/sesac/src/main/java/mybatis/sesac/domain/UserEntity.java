package mybatis.sesac.domain;

import javax.persistence.*;

@Entity
@Table(name="user")
// 실제 db에서 어떤 테이블인지 알려주는
public class UserEntity {
    @Id // 어노테이션과 연결 된 필드가 기본키다
    @GeneratedValue // 자동으로 생성 되는 값이다.
    private int id; // id primary key auto_increment 와 동일
    @Column(length = 10, nullable = false) // 기본키나 그런거 아니고 컬럼.
    private String name;
    @Column(length = 10, nullable = false)
    private String nickname;
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }
}
