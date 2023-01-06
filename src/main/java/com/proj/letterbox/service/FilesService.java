package com.proj.letterbox.service;

import com.proj.letterbox.model.Files;
import com.proj.letterbox.repository.FilesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilesService {
    @Autowired
    FilesRepository filesRepository;

    public void save(Files files) {
        Files f = new Files();
        f.setFilename(files.getFilename());
        f.setFileoriname(files.getFileoriname());
        f.setFileurl(files.getFileurl());

        filesRepository.save(f);
    }
}
