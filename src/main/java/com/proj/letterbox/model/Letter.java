package com.proj.letterbox.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.io.File;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@DynamicInsert
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

    @Column(name="content")
    private String content;

    @OneToOne
    @JoinColumn(name="file")
    private Files file;

    @Column(name="create_time")
    @CreationTimestamp
    private Timestamp create_time;

    @Column(name="letterloction")
    private int letterlocation;

    @ElementCollection
    @CollectionTable(
            name = "answer",
            joinColumns = @JoinColumn(name = "letter_id")
    )
    @Column(name="answer_list")
    private List<String> answerList = new ArrayList<>();

    @Column(name="correct")
    @ColumnDefault("false")
    private boolean correct;

    @Column(name="hint_num")
    @ColumnDefault("0")
    private int hintNum;

    @Column(name="open")
    @ColumnDefault("false")
    private boolean open;

    @Column(name="text_color")
    private String textColor;

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public void setOpen(boolean open) {
        this.open = open;
    }

    public Letter(int letterId, LetterBox letterBox, String nickname, String content, int letterlocation, Files file, List<String> answerList, int hintNum, boolean correct, boolean open, String textColor) {
        this.letterId = letterId;
        this.letterBox = letterBox;
        this.nickname = nickname;
        this.content = content;
        this.letterlocation = letterlocation;
        this.file = file;
        this.answerList = answerList;
        this.hintNum = hintNum;
        this.correct = correct;
        this.open = open;
        this.textColor = textColor;
    }

}
