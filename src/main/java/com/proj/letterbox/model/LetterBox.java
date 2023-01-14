package com.proj.letterbox.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@Table(name="letter_box")
public class LetterBox {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="letterbox_id")
    private int letterboxId;

    @OneToOne
    @JoinColumn(name="owner")
    private User owner;

    @Column(name="name")
    private String name;

    @Column(name="create_time")
    @CreationTimestamp
    private Timestamp create_time;

    @ElementCollection
    @CollectionTable(
            name = "letter_list",
            joinColumns = @JoinColumn(name = "letterbox_id")
    )
    @Column(name="location")
    private Set<Integer> letterList = new HashSet<>();

    @Builder
    public LetterBox(String name, User owner) {
        this.name = name;
        this.owner = owner;
    }




    public LetterBox(int letterboxId, String name, Set letterList) {
        this.letterboxId = letterboxId;
        this.name = name;
        this.letterList = letterList;
    }
}
