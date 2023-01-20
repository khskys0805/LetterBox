package com.proj.letterbox.repository;

import com.proj.letterbox.model.Letter;
import com.proj.letterbox.model.LetterBox;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LetterRepository extends CrudRepository<Letter, Integer> {
    public Letter findByLetterId(int letterId);
    public List<Letter> findAllByLetterBox(LetterBox letterBox);
}
