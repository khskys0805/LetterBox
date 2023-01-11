package com.proj.letterbox.repository;

import com.proj.letterbox.model.Letter;
import org.springframework.data.repository.CrudRepository;

public interface LetterRepository extends CrudRepository<Letter, Integer> {

}
