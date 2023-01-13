package com.proj.letterbox.model;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class LetterList {

    private int letterBoxId;
    private int location;

}