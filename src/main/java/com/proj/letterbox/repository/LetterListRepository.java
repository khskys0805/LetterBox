package com.proj.letterbox.repository;

import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.LetterList;
import com.proj.letterbox.model.User;
import org.springframework.data.repository.CrudRepository;

public interface LetterListRepository extends CrudRepository<LetterList, Integer> {
    //TODO 여기서부터 채우면 됨.
    public LetterList findByLetterlistId(int letterlistId);
}
