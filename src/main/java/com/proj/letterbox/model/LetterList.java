package com.proj.letterbox.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
@Table(name="letter_list")
public class LetterList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="letterList_id")
    private int letterListId;

    @Column(name = "location")
    int location;

    @ManyToOne(targetEntity = LetterBox.class, fetch = FetchType.LAZY)
    @JoinColumn(name="letterBox_id", insertable = false, updatable = false)
    @JsonIgnore
    private LetterBox letterBox;

    @Column(name="letterBox_id")
    private int letterBoxId;

    @ManyToOne(targetEntity = Letter.class, fetch = FetchType.LAZY)
    @JoinColumn(name="letter_id", insertable = false, updatable = false)
    @JsonIgnore
    private Letter letter;

    @Column(name="letter_id")
    private int letterId;

    @Column(name = "open")
    @ColumnDefault("false")
    boolean open;

    @Column(name="back_color")
    private String backColor;

    public LetterList(int location, int letterBoxId, int letterId, String backColor) {
        this.location = location;
        this.letterBoxId = letterBoxId;
        this.letterId = letterId;
        this.backColor = backColor;
    }


    public void setOpen(boolean open) {
        this.open = open;
    }
}
