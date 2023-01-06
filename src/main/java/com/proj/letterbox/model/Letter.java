package com.proj.letterbox.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.File;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@Table(name="letter")
public class Letter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="letter_id")
    private int letterId;

    @ManyToOne
    @JoinColumn(name="letterbox")
    private LetterBox letterBox;

    @ManyToOne
    @JoinColumn(name="user")
    private User user;

    @Column(name="name")
    private String name;

    @Column(name="nickname")
    private String nickname;

    @Column(name="hint1")
    private String hint1;

    @Column(name="hint2")
    private String hint2;

    @Column(name="hint3")
    private String hint3;

    @Column(name="phone")
    private String phone;

    @Column(name="content")
    private String content;

    @OneToOne
    @JoinColumn(name="file")
    private Files file;

    @Column(name="create_time")
    private Timestamp create_time;
}
