package com.proj.letterbox.service;

import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.User;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LetterBoxService {
    @Autowired
    LetterBoxRepository letterBoxRepository;
    @Autowired
    UserRepository userRepository;

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
        return letterBoxRepository.findByLetterboxId(letterboxIdx);
    }

}
