package com.proj.letterbox.service;

import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.User;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.LetterListRepository;
import com.proj.letterbox.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class LetterBoxService {
    @Autowired
    LetterBoxRepository letterBoxRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    LetterListRepository letterListRepository;

    public LetterBox findLetterBoxByUserIdx(int userIdx) {
        User user = userRepository.findByUserCode(userIdx);
        LetterBox letterBox = null;
        if (user != null) {
            letterBox = letterBoxRepository.findByOwner(user);
        }
        return letterBox;
    }

    public LetterBox saveLetterBox(int userIdx, LetterBox letterBox) {
        User user = userRepository.findByUserCode(userIdx);
        letterBox.setOwner(user);
        letterBoxRepository.save(letterBox);
        return letterBox;
    }


    public LetterBox getLetterBoxById (int letterboxIdx) {
        LetterBox letterBox = letterBoxRepository.findByLetterboxId(letterboxIdx);
        //letterBox.setLetterLists(letterListRepository.findAllByLetterBox(letterBox));
        return letterBox;
    }

    public List<LetterBox> findAll () {
        List<LetterBox> letterBoxes = letterBoxRepository.findAll();
        for (LetterBox letterBox : letterBoxes){
            letterBox.setLetterLists(letterListRepository.findAllByLetterBox(letterBox));
        }
        return letterBoxes;
    }

}
