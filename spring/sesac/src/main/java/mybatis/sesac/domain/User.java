package mybatis.sesac.domain;

public class User {
    private int id;
    private String name;
    private String nickname;

    private String userid;

    private String password;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getNickname() { return nickname;}
    public void setNickname(String nickname) { this.nickname = nickname; }


    public String getUserid() { return userid; }

    public void setUserid(String userid) { this.userid = userid; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
