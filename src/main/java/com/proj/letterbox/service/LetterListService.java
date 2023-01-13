package com.proj.letterbox.service;

import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.LetterList;
import com.proj.letterbox.model.User;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.LetterListRepository;
import com.proj.letterbox.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LetterListService {
    @Autowired
    LetterListRepository letterListRepository;
    @Autowired
    UserRepository letterRepository;


    public LetterList getLetterListById (int letterlistIdx) {
        return letterListRepository.findByLetterlistId(letterlistIdx);
    }
    public LetterList saveLetterList (LetterList letterList) {
        return letterListRepository.save(letterList);
    }

}
