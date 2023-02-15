package com.proj.letterbox.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_code")
    private int userCode;
    @Column(name = "id")
    private Long id;

    @Column(name = "platform")
    private String platform;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "name")
    private String name;

    @Column(name = "naverId")
    private String naverId;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "email")
    private String email;

    @Column(name = "user_role")
    private String userRole;

    @Column(name = "create_time")
    @CreationTimestamp //(4)
    private Timestamp createTime;

//    @OneToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY, mappedBy = 'user')
//    @JoinColumn(name = 'user_code')
//    private LetterBox letterBox;
    public User(String naverId,
                String email, String userRole, String platform) {

        this.naverId = naverId;
        this.email = email;
        this.userRole = userRole;
        this.platform = platform;
    }

    public User(Long id, String profileImg, String nickname,
                String email, String userRole, String platform) {

        this.id = id;
        this.profileImg = profileImg;
        this.nickname = nickname;
        this.email = email;
        this.userRole = userRole;
        this.platform = platform;
    }

}
