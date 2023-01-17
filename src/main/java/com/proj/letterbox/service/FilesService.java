package com.proj.letterbox.service;

import com.proj.letterbox.model.Files;
import com.proj.letterbox.repository.FilesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilesService {
    @Autowired
    FilesRepository filesRepository;

    public Files save(Files files) {
        filesRepository.save(files);
        return files;
    }
    public Files findByFileId(int id) {
        return filesRepository.findByFileId(id);
    }
}
