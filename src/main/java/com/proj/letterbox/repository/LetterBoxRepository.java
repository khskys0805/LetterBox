package com.proj.letterbox.repository;

import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.User;
import com.sun.xml.bind.v2.TODO;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LetterBoxRepository extends CrudRepository<LetterBox, Integer> {
    //TODO 여기서부터 채우면 됨..
    public LetterBox findByOwner(User user);
    public LetterBox findByLetterboxId(int letterboxId);
    public List<LetterBox> findAll();
}
