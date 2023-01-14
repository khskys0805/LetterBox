package com.proj.letterbox.service;

import com.proj.letterbox.model.Letter;
import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.LetterList;
import com.proj.letterbox.model.User;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.LetterRepository;
import com.proj.letterbox.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class LetterService {
    @Autowired
    LetterRepository letterRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    LetterBoxRepository letterBoxRepository;
    @Autowired
    UserService userService;
    @Autowired
    LetterBoxService letterBoxService;

    public Letter saveLetter(HttpServletRequest request, int letterboxIdx, Letter letter) {
        User user = userService.getUser(request);
        letter.setUser(user);
        LetterBox letterBox = letterBoxService.getLetterBoxById(letterboxIdx);
        int location = letter.getLetterlocation();
        letterBox.getLetterList().add(location);
        //TODO : letterBox는 저장할 필요가 없는지 확인
        letterBoxRepository.save(letterBox);
        letter.setLetterBox(letterBox);
        letterRepository.save(letter);
        return letter;
    }

    public Letter getLetter(HttpServletRequest request, int letterboxIdx, int letterIdx) {
        User user = userService.getUser(request);
        LetterBox letterBox = letterBoxService.getLetterBoxById(letterboxIdx);
        if (user == letterBox.getOwner()) {
            return letterRepository.findByLetterId(letterIdx);
        }
        else {
            return null;
        }
    }

}
