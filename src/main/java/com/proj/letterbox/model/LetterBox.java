package com.proj.letterbox.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@Table(name="letterBox")
public class LetterBox {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="letterbox_id")
    private int letterboxId;

    @ManyToOne
    @JoinColumn(name="owner")
    private User user;

    @Column(name="name")
    private String name;

    @Column(name="create_time")
    private Timestamp create_time;
}
