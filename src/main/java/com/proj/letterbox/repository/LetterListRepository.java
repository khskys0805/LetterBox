package com.proj.letterbox.repository;

import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.LetterList;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LetterListRepository extends CrudRepository<LetterList, Integer> {
    public List<LetterList> findByLetterBoxId(int letterBoxId);
}
