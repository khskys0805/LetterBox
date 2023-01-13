package com.proj.letterbox.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@Table(name="letter_list")
public class LetterList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="letterlist_id")
    private int letterboxId;

    @Column(name="l0")
    private boolean l0;

    @Column(name="l1")
    private boolean l1;

    @Column(name="l2")
    private boolean l2;

    @Column(name="l3")
    private boolean l3;

    @Column(name="l4")
    private boolean l4;

    @Column(name="l5")
    private boolean l5;

    @Column(name="l6")
    private boolean l6;

    @Column(name="l7")
    private boolean l7;

    @Column(name="l8")
    private boolean l8;

    @Column(name="l9")
    private boolean l9;

    @Column(name="l10")
    private boolean l10;

    @Column(name="l11")
    private boolean l11;

    @Column(name="l12")
    private boolean l12;

    @Column(name="l13")
    private boolean l13;

    @Column(name="l14")
    private boolean l14;

    @Column(name="l15")
    private boolean l15;

    @Column(name="l16")
    private boolean l16;

    @Column(name="l17")
    private boolean l17;

    @Column(name="l18")
    private boolean l18;

    @Column(name="l19")
    private boolean l19;

    @Column(name="l20")
    private boolean l20;

    @Column(name="l21")
    private boolean l21;

    @Column(name="l22")
    private boolean l22;

    @Column(name="l23")
    private boolean l23;

    @Column(name="l24")
    private boolean l24;

    @Column(name="l25")
    private boolean l25;

    @Column(name="l26")
    private boolean l26;

    @Column(name="l27")
    private boolean l27;

    @Column(name="l28")
    private boolean l28;

    @Column(name="l29")
    private boolean l29;

    @Column(name="l30")
    private boolean l30;

    @Column(name="l31")
    private boolean l31;

    @Column(name="l32")
    private boolean l32;

    @Column(name="l33")
    private boolean l33;

    @Column(name="l34")
    private boolean l34;

    @Column(name="l35")
    private boolean l35;

    @Column(name="l36")
    private boolean l36;

    @Column(name="l37")
    private boolean l37;

    @Column(name="l38")
    private boolean l38;

    @Column(name="l39")
    private boolean l39;

    @Column(name="l40")
    private boolean l40;

    @Column(name="l41")
    private boolean l41;

    @Column(name="l42")
    private boolean l42;

    @Column(name="l43")
    private boolean l43;

    @Column(name="l44")
    private boolean l44;

    @Column(name="l45")
    private boolean l45;

    @Column(name="l46")
    private boolean l46;

    @Column(name="l47")
    private boolean l47;

    public LetterList(boolean l0, boolean l1, boolean l2, boolean l3, boolean l4, boolean l5, boolean l6, boolean l7, boolean l8, boolean l9, boolean l10, boolean l11, boolean l12, boolean l13, boolean l14, boolean l15, boolean l16, boolean l17, boolean l18, boolean l19, boolean l20, boolean l21, boolean l22, boolean l23, boolean l24, boolean l25, boolean l26, boolean l27, boolean l28, boolean l29, boolean l30, boolean l31, boolean l32, boolean l33, boolean l34, boolean l35, boolean l36, boolean l37, boolean l38, boolean l39, boolean l40, boolean l41, boolean l42, boolean l43, boolean l44, boolean l45, boolean l46, boolean l47) {
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
        this.l4 = l4;
        this.l5 = l5;
        this.l6 = l6;
        this.l7 = l7;
        this.l8 = l8;
        this.l9 = l9;
        this.l10 = l10;
        this.l11 = l11;
        this.l12 = l12;
        this.l13 = l13;
        this.l14 = l14;
        this.l15 = l15;
        this.l16 = l16;
        this.l17 = l17;
        this.l18 = l18;
        this.l19 = l19;
        this.l20 = l20;
        this.l21 = l21;
        this.l22 = l22;
        this.l23 = l23;
        this.l24 = l24;
        this.l25 = l25;
        this.l26 = l26;
        this.l27 = l27;
        this.l28 = l28;
        this.l29 = l29;
        this.l30 = l30;
        this.l31 = l31;
        this.l32 = l32;
        this.l33 = l33;
        this.l34 = l34;
        this.l35 = l35;
        this.l36 = l36;
        this.l37 = l37;
        this.l38 = l38;
        this.l39 = l39;
        this.l40 = l40;
        this.l41 = l41;
        this.l42 = l42;
        this.l43 = l43;
        this.l44 = l44;
        this.l45 = l45;
        this.l46 = l46;
        this.l47 = l47;
    }
}