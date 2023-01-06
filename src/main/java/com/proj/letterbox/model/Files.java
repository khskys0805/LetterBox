package com.proj.letterbox.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="files")
public class Files {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="file_id")
    private int fileId;

    @Column(name="filename")
    private String filename;

    @Column(name="fileoriname")
    private String fileoriname;

    @Column(name="fileurl")
    private String fileurl;
}
