package com.proj.letterbox.repository;

import com.proj.letterbox.model.Files;
import org.springframework.data.repository.CrudRepository;

public interface FilesRepository extends CrudRepository<Files, Integer> {
    Files findByFileId(int fileId);
}
